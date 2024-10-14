const express = require('express');
const router = express.Router();
const { createAddressData } = require('../controllers/addressController');

router.post('/', createAddressData);

module.exports = router;
    