/**
 * --------------------------------------------------------
 * File Name : Dashboard.jsx
 * Project   : CLINIANI AI
 * Module    : Dashboard
 * Purpose   : Landing Page After Login
 * --------------------------------------------------------
 */
import authService from "../../services/authService";
import { Button, Container, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import React from "react";

function Dashboard() {
  const navigate = useNavigate();

  const { logout, user } = useAuth();

  const handleLogout = async () => {
  try {
    await authService.logout();
  } catch (error) {
    console.error("Logout failed", error);
  } finally {
    logout();
    navigate("/login");
  }
};

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 5 }}>

        <Typography variant="h3" gutterBottom>
          Dashboard
        </Typography>

        <Typography variant="h6" sx={{ mb: 4 }}>
          Welcome {user?.firstName || "User"}
        </Typography>

        <Button
          variant="contained"
          color="error"
          onClick={handleLogout}
        >
          Logout
        </Button>

      </Paper>
    </Container>
  );
}

export default Dashboard;