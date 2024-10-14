// routes/combinedDataRoutes.js
const express = require('express');
const router = express.Router();
const PersonalData = require('../models/PersonalData');
const AddressData = require('../models/AddressData');
const EducationData = require('../models/EducationData');
const PreviousEducationData = require('../models/PreviousEducationData');
const VisaStatusData = require('../models/VisaStatus');
const UploadData = require('../models/Upload');

router.get('/', async (req, res) => {
    try {
        // Fetch all data from the respective models
        const personalData = await PersonalData.find({});
        const addressData = await AddressData.find({});
        const educationData = await EducationData.find({});
        const previousEducationData = await PreviousEducationData.find({});
        const visaStatusData = await VisaStatusData.find({});
        const uploadData = await UploadData.find({});

        // Aggregate all data into a single response object
        const allData = {
            personalData,
            addressData,
            educationData,
            previousEducationData,
            visaStatusData,
            uploadData
        };

        // Send the aggregated data as response
        res.status(200).json(allData);
    } catch (error) {
        console.error("Error fetching combined data:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
