const Patient = require("../models/Patient");

// ======================================
// CREATE PATIENT
// POST /api/patients
// ======================================

const createPatient = async (req, res) => {
  try {
    const patient = await Patient.create(req.body);

    res.status(201).json({
      success: true,
      message: "Patient created successfully",
      data: patient,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ======================================
// GET ALL PATIENTS
// GET /api/patients
// ======================================

const getPatients = async (req, res) => {

  try {

    const patients = await Patient.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: patients.length,
      data: patients,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// ======================================
// GET SINGLE PATIENT
// GET /api/patients/:id
// ======================================

const getPatientById = async (req, res) => {

  try {

    const patient = await Patient.findById(req.params.id);

    if (!patient) {

      return res.status(404).json({
        success: false,
        message: "Patient not found",
      });

    }

    res.status(200).json({
      success: true,
      data: patient,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// ======================================
// UPDATE PATIENT
// PUT /api/patients/:id
// ======================================

const updatePatient = async (req, res) => {

  try {

    const patient = await Patient.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!patient) {

      return res.status(404).json({
        success: false,
        message: "Patient not found",
      });

    }

    res.status(200).json({
      success: true,
      message: "Patient updated successfully",
      data: patient,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// ======================================
// DELETE PATIENT
// DELETE /api/patients/:id
// ======================================

const deletePatient = async (req, res) => {

  try {

    const patient = await Patient.findByIdAndDelete(req.params.id);

    if (!patient) {

      return res.status(404).json({
        success: false,
        message: "Patient not found",
      });

    }

    res.status(200).json({
      success: true,
      message: "Patient deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

module.exports = {
  createPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient,
};