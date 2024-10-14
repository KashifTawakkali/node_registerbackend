const express = require("express");
const dotenv = require("dotenv").config();  
const app = express();
const port = process.env.PORT;
require('./db')();

app.use(express.json());
app.use("/personal-data", require("./routes/personalDataRoutes")); // Personal data route
app.use("/address-data", require("./routes/addressRoutes")); // Address data route
app.use("/education-data", require("./routes/educationRoutes")); // Education data route
app.use("/previous-education", require("./routes/previousEducationRoutes")); // Previous education route
app.use("/visa-status", require("./routes/visaStatusRoutes")); // Visa status route
app.use("/uploads", require("./routes/uploadRoutes")); // File uploads route
app.use("/combined-data", require("./routes/combinedDataRoutes")); // Combined data route

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
