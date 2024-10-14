const EducationData = require('../models/EducationData');

// Controller to create education data
exports.createEducationData = async (req, res) => {
    try {
        const { interestedCountry, englishProficiencyTest, testScore, additionalEducationBoard } = req.body;

        // Validate required fields
        if (!interestedCountry || !englishProficiencyTest) {
            return res.status(400).json({ message: "Interested country and English proficiency test are required." });
        }

        // Create a new education data entry
        const educationData = new EducationData({
            interestedCountry,
            englishProficiencyTest,
            testScore,
            additionalEducationBoard
        });

        // Save to the database
        await educationData.save();

        return res.status(201).json({ message: "Education data created successfully", data: educationData });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};
