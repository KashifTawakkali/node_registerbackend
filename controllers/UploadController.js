const multer = require("multer");
const Upload = require("../models/Upload");

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Specify the directory for file uploads
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname); // Append timestamp to avoid duplicates
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 2 * 1024 * 1024, // Limit file size to 2MB
    },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|pdf/; // Allowed file types
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(file.originalname.split('.').pop().toLowerCase());
        
        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb("Error: File type not supported!");
        }
    }
});

// Upload files and save metadata
exports.uploadFiles = async (req, res) => {
    const { tenthMarksheet, twelfthMarksheet, passport, englishProficiencyCertificate, sop, cv, experience, bachelorsDegree } = req.body;
    const newUpload = new Upload({
        tenthMarksheet: req.files[0]?.path,
        twelfthMarksheet: req.files[1]?.path,
        passport: req.files[2]?.path,
        englishProficiencyCertificate: req.files[3]?.path,
        sop: req.files[4]?.path,
        cv: req.files[5]?.path,
        experience: req.files[6]?.path,
        bachelorsDegree: req.files[7]?.path,
    });

    try {
        await newUpload.save();
        res.status(201).json({ message: "Files uploaded successfully!", data: newUpload });
    } catch (error) {
        res.status(500).json({ message: "Error uploading files", error });
    }
};

// Middleware for handling multipart/form-data
exports.uploadMiddleware = upload.fields([
    { name: "tenthMarksheet", maxCount: 1 },
    { name: "twelfthMarksheet", maxCount: 1 },
    { name: "passport", maxCount: 1 },
    { name: "englishProficiencyCertificate", maxCount: 1 },
    { name: "sop", maxCount: 1 },
    { name: "cv", maxCount: 1 },
    { name: "experience", maxCount: 1 },
    { name: "bachelorsDegree", maxCount: 1 },
]);
