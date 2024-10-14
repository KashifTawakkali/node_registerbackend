const mongoose = require('mongoose');

const educationDataSchema = new mongoose.Schema({
    interestedCountry: {
        type: String,
        enum: ['Canada', 'Australia', 'USA'], // Add other countries as needed
        required: true
    },
    englishProficiencyTest: {
        type: String,
        enum: ['IELTS', 'TOEFL', 'None'], // Add other tests as needed
        required: true
    },
    testScore: {
        type: Number,
        required: function() {
            return this.englishProficiencyTest !== 'None'; // Only required if test is selected
        }
    },
    additionalEducationBoard: {
        type: String,
        required: function() {
            return this.englishProficiencyTest === 'None'; // Only required if "None" is selected
        }
    }
});

module.exports = mongoose.model('EducationData', educationDataSchema);
