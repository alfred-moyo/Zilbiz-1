const jwt = require('jsonwebtoken');
const { getDb } = require('../config/db');

const authenticate = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const db = getDb();

    // Check user type and fetch from appropriate collection
    let user;
    if (decoded.role === 'business') {
      user = await db.collection('businesses').findOne({ _id: new ObjectId(decoded.id) });
    } else if (decoded.role === 'customer') {
      user = await db.collection('customers').findOne({ _id: new ObjectId(decoded.id) });
    } else if (decoded.role === 'admin') {
      user = await db.collection('admins').findOne({ _id: new ObjectId(decoded.id) });
    }

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid authentication' });
  }
};

const authorize = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Unauthorized access' });
    }
    next();
  };
};

module.exports = { authenticate, authorize };