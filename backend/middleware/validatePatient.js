const validatePatient = (req, res, next) => {
  const {
    firstName,
    lastName,
    dateOfBirth,
    gender,
    phone,
    email,
  } = req.body;

  // First Name
  if (!firstName || firstName.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "First Name is required",
    });
  }

  // Last Name
  if (!lastName || lastName.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Last Name is required",
    });
  }

  // Date of Birth
  if (!dateOfBirth) {
    return res.status(400).json({
      success: false,
      message: "Date of Birth is required",
    });
  }

  // Gender
  const validGenders = ["Male", "Female", "Other"];

  if (!validGenders.includes(gender)) {
    return res.status(400).json({
      success: false,
      message: "Gender must be Male, Female or Other",
    });
  }

  // Phone Number
  const phoneRegex = /^[0-9]{10}$/;

  if (!phoneRegex.test(phone)) {
    return res.status(400).json({
      success: false,
      message: "Phone number must contain exactly 10 digits",
    });
  }

  // Email (Optional)
  if (email && email !== "") {
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address",
      });
    }
  }

  next();
};

module.exports = validatePatient;