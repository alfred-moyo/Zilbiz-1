const express = require('express');
const router = express.Router();
const { getAllBusinesses } = require('../controllers/businessAuthController');

router.get('/api/businesses', getAllBusinesses);

module.exports = router;