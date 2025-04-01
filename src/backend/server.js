require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
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
    
    // Initialize first admin if in development
    if (process.env.NODE_ENV === 'development') {
      const adminController = require('./controllers/adminController');
      await adminController.initializeAdmin();
    }
  });


 // 3. Route Definitions
// Public routes
app.use('/api/auth', authRoutes);

// Protected routes
app.use('/api/business', authenticate, authorize(['business', 'admin']), businessRoutes);
app.use('/api/admin', authenticate, authorize(['admin']), adminRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK',
    database: 'Connected',
    timestamp: new Date().toISOString()
  });
});


// 4. Error Handling
app.use(notFound);
app.use(errorHandler);


// 5. Server Startup
app.listen(PORT, () => {
  console.log(`
  Server running on port ${PORT}
  Environment: ${process.env.NODE_ENV || 'development'}
  Access the API: http://localhost:${PORT}/api
  `);
});