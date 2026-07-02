const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

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

app.use(morgan("dev"));

app.use(express.json());

// ======================================
// Home Route
// ======================================

app.get("/", (req, res) => {
    res.send("CLINIANI AI Backend Running...");
});

// ======================================
// Swagger Documentation
// ======================================

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);

// ======================================
// API Routes
// ======================================

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