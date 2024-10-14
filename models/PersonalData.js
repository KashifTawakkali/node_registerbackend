const mongoose = require('mongoose');

const personalDataSchema = new mongoose.Schema({
    title: {
        type: String,
        enum: ['Mr.', 'Mrs.', 'Ms.'], // Add other titles as needed
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    middleName: String,
    lastName: {
        type: String,
        required: true
    },
    mobileNo: {
        type: String,
        required: true
    },
    emergencyContactNo: String,
    studentEmailId: {
        type: String,
        required: true,
        unique: true
    },
    maritalStatus: {
        type: String,
        enum: ['Single', 'Married'], // Add other statuses as needed
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'], // Add other options as needed
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('PersonalData', personalDataSchema);
