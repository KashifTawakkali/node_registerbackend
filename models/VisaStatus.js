const mongoose = require("mongoose");

const VisaStatusSchema = new mongoose.Schema({
    visaRejectionStatus: {
        type: String,
        required: true,
        enum: ["Yes", "No"]
    },
    gapInEducation: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("VisaStatus", VisaStatusSchema);
