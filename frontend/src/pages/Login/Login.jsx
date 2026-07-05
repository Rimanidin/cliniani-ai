/**
 * --------------------------------------------------------
 * File Name : Login.jsx
 * Project   : CLINIANI AI
 * Module    : Authentication
 * Purpose   : User Login Screen
 * --------------------------------------------------------
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
  Alert,
} from "@mui/material";

import authService from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      const response = await authService.login(email, password);

      login(response.user, response.accessToken);

localStorage.setItem("refreshToken", response.refreshToken);

      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message || "Invalid Email or Password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >

        <Card sx={{ width: "100%", p: 2 }}>

          <CardContent>

            <Typography
              variant="h4"
              align="center"
              gutterBottom
            >
              CLINIANI AI
            </Typography>

            <Typography
              align="center"
              color="text.secondary"
              mb={4}
            >
              Neurology EMR
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <form onSubmit={handleLogin}>

              <TextField
                fullWidth
                label="Email"
                margin="normal"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

              <TextField
                fullWidth
                type="password"
                label="Password"
                margin="normal"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{ mt: 3 }}
                type="submit"
                disabled={loading}
              >
                {loading ? "Signing In..." : "Login"}
              </Button>

            </form>

          </CardContent>

        </Card>

      </Box>

    </Container>
  );
}

export default Login;