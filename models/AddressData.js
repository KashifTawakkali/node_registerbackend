const mongoose = require('mongoose');

const addressDataSchema = new mongoose.Schema({
    nativeCountry: {
        type: String,
        enum: ['USA', 'Canada', 'India'], // Add other countries as needed
        required: true
    },
    nativeState: {
        type: String,
        required: true
    },
    nativeCity: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    passportNo: {
        type: String,
        required: true
    },
    passportExpiry: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('AddressData', addressDataSchema);
