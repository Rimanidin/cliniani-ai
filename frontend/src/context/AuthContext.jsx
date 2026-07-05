/**
 * --------------------------------------------------------
 * File Name : AuthContext.jsx
 * Project   : CLINIANI AI
 * Module    : Authentication
 * Purpose   : Global Authentication Context
 * --------------------------------------------------------
 */

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
  JSON.parse(localStorage.getItem("user")) || null
);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const login = (userData, jwtToken) => {
    setUser(userData);
localStorage.setItem("user", JSON.stringify(userData));
    setToken(jwtToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    const logout = () => {
  setUser(null);
  setToken(null);

  localStorage.removeItem("user");
  localStorage.removeItem("refreshToken");
};
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}