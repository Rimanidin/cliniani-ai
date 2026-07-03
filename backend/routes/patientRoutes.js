const authMiddleware = require("../middleware/authMiddleware");
const express = require("express");

const router = express.Router();

const validatePatient = require("../middleware/validatePatient");
const roleMiddleware = require("../middleware/roleMiddleware");

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

router.get(
    "/",
    authMiddleware,
    roleMiddleware("Admin", "Doctor", "Receptionist"),
    getPatients
);

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

router.post(
    "/",
    authMiddleware,
    roleMiddleware("Admin", "Doctor", "Receptionist"),
    validatePatient,
    createPatient
);

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
router.get(
    "/:id",
    authMiddleware,
    roleMiddleware("Admin", "Doctor", "Receptionist"),
    getPatientById
);

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
router.put(
    "/:id",
    authMiddleware,
    roleMiddleware("Admin", "Doctor"),
    validatePatient,
    updatePatient
);

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
router.delete(
    "/:id",
    authMiddleware,
    roleMiddleware("Admin"),
    deletePatient
);

module.exports = router;