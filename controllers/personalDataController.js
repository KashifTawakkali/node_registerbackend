const PersonalData = require('../models/PersonalData');

// Controller to create personal data
exports.createPersonalData = async (req, res) => {
    try {
        const { title, firstName, middleName, lastName, mobileNo, emergencyContactNo, studentEmailId, maritalStatus, gender, dateOfBirth } = req.body;

        // Validate required fields
        if (!firstName || !lastName || !mobileNo || !studentEmailId || !maritalStatus || !gender || !dateOfBirth) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Create a new personal data entry
        const personalData = new PersonalData({
            title,
            firstName,
            middleName,
            lastName,
            mobileNo,
            emergencyContactNo,
            studentEmailId,
            maritalStatus,
            gender,
            dateOfBirth
        });

        // Save to the database
        await personalData.save();

        return res.status(201).json({ message: "Personal data created successfully", data: personalData });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};
