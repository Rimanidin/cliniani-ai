console.log("******** MY SERVER.JS IS RUNNING ********");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const patientRoutes = require("./routes/patientRoutes");

const app = express();
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/patients", patientRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("CLINIANI AI Backend Running...");
});

// Server
const PORT = process.env.PORT || 5000;
app.get("/test", (req, res) => {
  res.json({
    message: "TEST ROUTE WORKING"
  });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});