const mongoose = require("mongoose");

const UploadSchema = new mongoose.Schema({
    tenthMarksheet: {
        type: String, // URL or path to the uploaded file
        required: true
    },
    twelfthMarksheet: {
        type: String,
        required: true
    },
    passport: {
        type: String,
        required: true
    },
    englishProficiencyCertificate: {
        type: String,
        required: true
    },
    sop: {
        type: String,
        required: true
    },
    cv: {
        type: String,
        required: true
    },
    experience: {
        type: String // Optional, for experience files
    },
    bachelorsDegree: {
        type: String // Optional, for Master’s applicants
    }
});

module.exports = mongoose.model("Upload", UploadSchema);
