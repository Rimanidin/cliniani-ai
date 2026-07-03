/**
 * -------------------------------------------------------
 * File: roleMiddleware.js
 * Module: Authorization
 * Project: CLINIANI AI
 * Purpose: Role Based Access Control (RBAC)
 * -------------------------------------------------------
 */

const roleMiddleware = (...allowedRoles) => {
  return (req, res, next) => {

    // req.user is populated by authMiddleware
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required."
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "Access denied. Insufficient permissions."
      });
    }

    next();
  };
};

module.exports = roleMiddleware;