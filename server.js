require('../src/dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const axios = require('axios');
const { connectToDb } = require('./config/db');

// Middleware imports
const { authenticate, authorize } = require('./middleware/authMiddleware');
const { errorHandler, notFound } = require('./middleware/errorMiddleware');
const requestLogger = require('./middleware/loggerMiddleware');
const { apiLimiter, authLimiter } = require('./middleware/rateLimitMiddleware');

// Route imports
const authRoutes = require('./routes/authRoutes');
const businessRoutes = require('./routes/businessRoutes');
const adminRoutes = require('./routes/adminRoutes');
const customerRoutes = require('./routes/customerRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// 1. Middleware Setup
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(requestLogger);

// Rate limiting
app.use('/api/auth', authLimiter);
app.use('/api', apiLimiter);

// 2. Database Connection
connectToDb(async (err) => {
  if (err) {
    console.error('Database connection failed:', err);
    process.exit(1);
  }
  console.log('Connected to MongoDB Atlas');
  
  if (process.env.NODE_ENV === 'development') {
    const adminController = require('./controllers/adminController');
    await adminController.initializeAdmin();
  }
});

// 3. Enhanced Chatbot Configuration
const PREDEFINED_RESPONSES = {
  // General SME Questions
  "what is a sme": {
    answer: "An SME (Small and Medium Enterprise) is a business with a certain number of employees and revenue that falls below a specific threshold. In Mauritius, SMEs are the backbone of the economy!",
    emoji: "💼🏢",
    keywords: ["sme", "small business", "medium enterprise"]
  },
  "how to register as sme": {
    answer: "In Mauritius, you can register your SME with the Registrar of Companies. ZilBiz can help promote your business once registered! Visit the Economic Development Board website for details.",
    emoji: "📝🏛️",
    keywords: ["register", "registration", "incorporate"]
  },

  // ZilBiz Platform Questions
  "what's zilbiz": {
    answer: "ZilBiz is Mauritius' premier digital platform connecting SMEs with customers through business listings, reviews, and consumer insights. Think of us as your digital marketplace!",
    emoji: "🤝💡",
    keywords: ["zilbiz", "platform", "about"]
  },
  "zilbiz features": {
    answer: "ZilBiz offers: 1) Business listings 2) Customer reviews 3) Analytics dashboard 4) Promotion tools 5) Consumer insights - all designed to help SMEs grow!",
    emoji: "📊🛠️",
    keywords: ["features", "tools", "capabilities"]
  },
  "zilbiz pricing": {
    answer: "We offer free basic listings and premium packages starting at Rs 500/month. Premium features include advanced analytics and promotional tools!",
    emoji: "💎💰",
    keywords: ["price", "cost", "subscription"]
  },

  // Business Operations
  "how to list my business": {
    answer: "1) Sign up on our platform 2) Complete your business profile 3) Verify your details 4) Start engaging with customers! It's that simple!",
    emoji: "📝🖥️",
    keywords: ["list", "add business", "register business"]
  },
  "contact zilbiz": {
    answer: "Reach us at: Email - info@zilbiz.mu | Phone - +230 1234 5678 | Office - Ebene Cybercity, Mauritius",
    emoji: "📧📞",
    keywords: ["contact", "support", "help"]
  }
};

const getPredefinedResponse = (question) => {
  const lowerQuestion = question.toLowerCase().trim();
  
  // Exact match check
  if (PREDEFINED_RESPONSES[lowerQuestion]) {
    return PREDEFINED_RESPONSES[lowerQuestion];
  }

  // Keyword matching
  for (const key in PREDEFINED_RESPONSES) {
    if (PREDEFINED_RESPONSES[key].keywords.some(keyword => 
      lowerQuestion.includes(keyword)
    )) {
      return PREDEFINED_RESPONSES[key];
    }
  }

  return null;
};

const queryDeepSeek = async (message, userId = null) => {
  try {
    const systemMessage = {
      role: "system",
      content: `You are ZilBiz Assistant, helping users with SME business listings in Mauritius. 
                Keep responses concise (1-2 paragraphs max), friendly, and professional.
                ${userId ? `User ID: ${userId}` : ''}`
    };

    const response = await axios.post('https://api.deepseek.com/v1/chat/completions', {
      model: "deepseek-chat",
      messages: [systemMessage, { role: "user", content: message }],
      temperature: 0.7,
      max_tokens: 200
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
        'Content-Type': 'application/json'
      },
      timeout: 5000
    });

    return {
      response: response.data.choices[0].message.content,
      tokens: response.data.usage.total_tokens
    };
  } catch (error) {
    console.error('DeepSeek API error:', error.response?.data || error.message);
    throw new Error('Failed to get AI response');
  }
};

// 4. Route Definitions
app.use('/api/auth', authRoutes);

// Public Chatbot Endpoint
app.post('/api/chat', async (req, res, next) => {
  try {
    const { message, userId } = req.body;
    
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({ error: 'Message is required and must be a non-empty string' });
    }

    // Check predefined responses first
    const predefinedResponse = getPredefinedResponse(message);
    if (predefinedResponse) {
      return res.json({
        response: `${predefinedResponse.answer} ${predefinedResponse.emoji}`,
        isAI: false,
        timestamp: new Date().toISOString()
      });
    }

    // Fallback to AI
    const { response, tokens } = await queryDeepSeek(message, userId);
    res.json({
      response,
      isAI: true,
      tokens,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    next(error);
  }
});

// Protected routes
app.use('/api/business', authenticate, authorize(['business', 'admin']), businessRoutes);
app.use('/api/admin', authenticate, authorize(['admin']), adminRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK',
    database: 'Connected',
    services: {
      chatbot: 'Operational',
      auth: 'Operational'
    },
    timestamp: new Date().toISOString()
  });
});

// 5. Error Handling
app.use(notFound);
app.use(errorHandler);

// 6. Server Startup
app.listen(PORT, () => {
  console.log(`
  ███████╗██╗██╗     ██████╗ ██╗███████╗
  ╚══███╔╝██║██║     ██╔══██╗██║╚══███╔╝
    ███╔╝ ██║██║     ██████╔╝██║  ███╔╝ 
   ███╔╝  ██║██║     ██╔══██╗██║ ███╔╝  
  ███████╗██║███████╗██████╔╝██║███████╗
  ╚══════╝╚═╝╚══════╝╚═════╝ ╚═╝╚══════╝
  
  Server running on port ${PORT}
  Environment: ${process.env.NODE_ENV || 'development'}
  API Documentation: http://localhost:${PORT}/api-docs
  Chatbot Endpoint: POST http://localhost:${PORT}/api/chat
  `);
});