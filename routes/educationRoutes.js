const express = require('express');
const router = express.Router();
const { createEducationData } = require('../controllers/educationController');

router.post('/', createEducationData);

module.exports = router;
