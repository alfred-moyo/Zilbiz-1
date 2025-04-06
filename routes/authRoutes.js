const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { validate } = require('../middleware/validationMiddleware');
const { authLimiter } = require('../middleware/rateLimitMiddleware');

// Authentication routes
router.post('/register', 
  validate('register'), 
  authLimiter, 
  authController.register
);

router.post('/login', 
  validate('login'), 
  authLimiter, 
  authController.login
);

router.post('/refresh-token', 
  authController.refreshToken
);

router.post('/logout', 
  authController.logout
);

// Password management
router.post('/forgot-password', 
  validate('email'), 
  authController.forgotPassword
);

router.patch('/reset-password/:token', 
  validate('resetPassword'), 
  authController.resetPassword
);

// Email verification
router.get('/verify-email/:token', 
  authController.verifyEmail
);

// Account management
router.patch('/update-password', 
  validate('updatePassword'), 
  authController.updatePassword
);

module.exports = router;