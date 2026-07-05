/**
 * --------------------------------------------------------
 * File Name : server.js
 * Project   : CLINIANI AI
 * Purpose   : Express Server Entry Point
 * --------------------------------------------------------
 */

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const connectDB = require("./config/db");

const patientRoutes = require("./routes/patientRoutes");
const authRoutes = require("./routes/authRoutes");

const errorHandler = require("./middleware/errorHandler");

const app = express();

// ======================================
// Database
// ======================================

connectDB();

// ======================================
// CORS Configuration
// ======================================

const allowedOrigins = [
  "http://localhost:5174",
  "http://127.0.0.1:5174",
];

app.use(
  cors({
    origin(origin, callback) {
      // Allow requests with no origin (Postman, server-to-server)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);
// ======================================
// Middleware
// ======================================

app.use(morgan("dev"));

app.use(express.json());

// ======================================
// Home Route
// ======================================

app.get("/", (req, res) => {
    res.send("CLINIANI AI Backend Running...");
});

// ======================================
// Swagger
// ======================================

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);

// ======================================
// API Routes
// ======================================

app.use("/api/auth", authRoutes);
app.use("/api/patients", patientRoutes);

// ======================================
// Error Handler
// ======================================

app.use(errorHandler);

// ======================================
// Server
// ======================================

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`🚀 CLINIANI AI Backend running on port ${PORT}`);
});