const PreviousEducation = require('../models/PreviousEducationData');

// Controller to create previous education details
exports.createPreviousEducation = async (req, res) => {
    try {
        const { qualifications } = req.body;

        // Validate required fields
        if (!qualifications || !Array.isArray(qualifications) || qualifications.length === 0) {
            return res.status(400).json({ message: "At least one qualification is required." });
        }

        // Create a new previous education entry
        const previousEducation = new PreviousEducation({ qualifications });

        // Save to the database
        await previousEducation.save();

        return res.status(201).json({ message: "Previous education details created successfully", data: previousEducation });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};
