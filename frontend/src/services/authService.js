/**
 * --------------------------------------------------------
 * File Name : authService.js
 * Project   : CLINIANI AI
 * Module    : Authentication Service
 * --------------------------------------------------------
 */

import api from "../api/axios";

const login = async (email, password) => {
  const response = await api.post("/auth/login", {
    email,
    password,
  });

  return response.data;
};

const logout = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  const response = await api.post("/auth/logout", {
    refreshToken,
  });

  return response.data;
};

const authService = {
  login,
  logout,
};

export default authService;