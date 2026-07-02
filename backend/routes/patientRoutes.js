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

/**
 * @swagger
 * tags:
 *   name: Patients
 *   description: Patient Management APIs
 */

/**
 * @swagger
 * /api/patients:
 *   get:
 *     summary: Get all patients
 *     tags: [Patients]
 *     responses:
 *       200:
 *         description: List of patients
 */
router.get("/", getPatients);

/**
 * @swagger
 * /api/patients:
 *   post:
 *     summary: Create a patient
 *     tags: [Patients]
 *     responses:
 *       201:
 *         description: Patient created successfully
 */
router.post("/", validatePatient, createPatient);

/**
 * @swagger
 * /api/patients/{id}:
 *   get:
 *     summary: Get patient by ID
 *     tags: [Patients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Patient found
 */
router.get("/:id", getPatientById);

/**
 * @swagger
 * /api/patients/{id}:
 *   put:
 *     summary: Update patient
 *     tags: [Patients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Patient updated successfully
 */
router.put("/:id", validatePatient, updatePatient);

/**
 * @swagger
 * /api/patients/{id}:
 *   delete:
 *     summary: Delete patient
 *     tags: [Patients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Patient deleted successfully
 */
router.delete("/:id", deletePatient);

module.exports = router;