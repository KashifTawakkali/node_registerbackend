const VisaStatus = require("../models/VisaStatus");

exports.addVisaStatus = async (req, res) => {
    const { visaRejectionStatus, gapInEducation } = req.body;

    try {
        const newVisaStatus = new VisaStatus({
            visaRejectionStatus,
            gapInEducation
        });

        await newVisaStatus.save();
        res.status(201).json({ message: "Visa status added successfully!", data: newVisaStatus });
    } catch (error) {
        res.status(500).json({ message: "Error adding visa status", error });
    }
};
