"use client";

import React, { useState } from "react";

import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  IconButton,
  InputAdornment,
  Alert,
  AlertTitle,
  Grid2,
  ButtonGroup,
  Divider,
} from "@mui/material";

import {
  Visibility,
  VisibilityOff,
  Telegram,
  Facebook,
  Google,
  Instagram,
} from "@mui/icons-material";
import { BeatLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";

import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const { data } = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleCloseError = () => {
    setError("");
  };
  const handleCloseSuccess = () => {
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // simulate phone validation
    if (email === "" || password === "") {
      setError("Pleace fill the all reuired fields");
      setTimeout(() => {
        setError("");
      }, 5000);
      return;
    }

    try {
      setLoading(true);

      const response = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (response?.error) {
        setError(response?.err);
        setLoading(false);
      } else {
        setSuccess("Login Successful");
        setLoading(false);

        setEmail("");
        setPassword("");

        if (!data) {
          return;
        }
        router.push(`/dashboard/${data?.user?.role}`);
      }
    } catch (error) {
      console.log(error);
      setError("An Error Occured during login");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((showPass) => !showPass);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
      mb={10}
    >
      <Container maxWidth="sm">
        <Box p={4} bgcolor="rgba(142, 142, 142, 0.2)" borderRadius={1}>
          <Typography variant="h4" component="h2" gutterBottom align="center">
            Admin Login
          </Typography>
          {error && (
            <Alert
              severity="error"
              onClose={handleCloseError}
              sx={{
                mb: 2,
                width: "100%",
              }}
            >
              <AlertTitle>Error</AlertTitle>
              {error}
            </Alert>
          )}
          {success && (
            <Alert
              severity="success"
              onClose={handleCloseSuccess}
              sx={{
                mb: 2,
                width: "100%",
              }}
            >
              <AlertTitle>Success</AlertTitle>
              {success}
            </Alert>
          )}
        

          <form onSubmit={handleSubmit}>
            <Grid2 container spacing={2}>
              <TextField
                type="email"
                label="Email"
                name="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <TextField
                type={showPassword ? "text" : "password"}
                label="Password"
                name="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end" onClick={toggleShowPassword}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "darkblue",
                  },
                }}
              >
                {isLoading ? (
                  <BeatLoader
                    loading={isLoading}
                    color="#fff"
                    size={15}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                ) : (
                  "Login"
                )}
              </Button>
            </Grid2>
          </form>

        </Box>
      </Container>
    </Box>
  );
}
