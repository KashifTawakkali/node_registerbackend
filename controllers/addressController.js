const AddressData = require('../models/AddressData');

// Controller to create address data
exports.createAddressData = async (req, res) => {
    try {
        const { nativeCountry, nativeState, nativeCity, postalCode, passportNo, passportExpiry } = req.body;

        // Validate required fields
        if (!nativeCountry || !nativeState || !nativeCity || !postalCode || !passportNo || !passportExpiry) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Create a new address data entry
        const addressData = new AddressData({
            nativeCountry,
            nativeState,
            nativeCity,
            postalCode,
            passportNo,
            passportExpiry
        });

        // Save to the database
        await addressData.save();

        return res.status(201).json({ message: "Address data created successfully", data: addressData });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};
