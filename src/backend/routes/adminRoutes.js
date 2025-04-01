const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

// Public route (initial setup)
router.post('/api/admin/init', adminController.initializeAdmin);

// Protected routes
router.post('/api/admin/login', adminController.login);
router.get('/api/admin', authenticate, authorize(['admin']), adminController.getAllAdmins);

module.exports = router;