// models/PreviousEducation.js
const mongoose = require('mongoose');

const previousEducationSchema = new mongoose.Schema({
    qualification: { type: String, required: true },
    institution: { type: String, required: true },
    percentage: { type: Number, required: true },
    passingYear: { type: Number, required: true },
    country: { type: String, required: true }
});

const PreviousEducation = mongoose.model('PreviousEducation', previousEducationSchema);

module.exports = PreviousEducation;
