const express = require("express");
const router = express.Router();
const visaStatusController = require("../controllers/VisaStatusController");

router.post("/", visaStatusController.addVisaStatus);

module.exports = router;
