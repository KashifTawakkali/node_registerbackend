const express = require('express');
const router = express.Router();
const personalDataController = require('../controllers/personalDataController');

// POST route for creating personal data
router.post('/', personalDataController.createPersonalData);

module.exports = router;
