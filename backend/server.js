const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const connectDB = require("./config/db");

const patientRoutes = require("./routes/patientRoutes");

const errorHandler = require("./middleware/errorHandler");

const app = express();

// ======================================
// Database
// ======================================

connectDB();

// ======================================
// Middleware
// ======================================

app.use(cors());

// HTTP Request Logger
app.use(morgan("dev"));

app.use(express.json());

// ======================================
// Routes
// ======================================

app.get("/", (req, res) => {
    res.send("CLINIANI AI Backend Running...");
});

app.use("/api/patients", patientRoutes);

// ======================================
// Global Error Handler
// ======================================

app.use(errorHandler);

// ======================================
// Server
// ======================================

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});