const express = require('express');
const router = express.Router();
const { createPreviousEducation } = require('../controllers/previousEducationController');

router.post('/', createPreviousEducation);

module.exports = router;
