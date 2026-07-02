const express = require("express");

const router = express.Router();

const validatePatient = require("../middleware/validatePatient");

const {
  createPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient,
} = require("../controllers/patientController");

// =============================
// CREATE PATIENT
// =============================
router.post("/", validatePatient, createPatient);

// =============================
// GET ALL PATIENTS
// =============================
router.get("/", getPatients);

// =============================
// GET PATIENT BY ID
// =============================
router.get("/:id", getPatientById);

// =============================
// UPDATE PATIENT
// =============================
router.put("/:id", validatePatient, updatePatient);

// =============================
// DELETE PATIENT
// =============================
router.delete("/:id", deletePatient);

module.exports = router;