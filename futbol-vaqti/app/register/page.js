"use client";

import React, { useState } from "react";

import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Alert,
  AlertTitle,
  Grid2,
  colors,
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
import Link from "next/link";

export default function RegisterPage() {

  const router = useRouter()

  const [register, setRegister] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister((prevRegister) => ({ ...prevRegister, [name]: value }));
  };

  const handleCloseError = () => {
    setError("");
  };
  const handleCloseSuccess = () => {
    setSuccess("");
  };

  const checkPasswordMatchHandler = () => {
    if (register.password !== register.password2) {
      setError("Password does not match");
      return 1;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // simulate phone validation
    if (
      register.name === "" ||
      register.email === "" ||
      register.password === ""
    ) {
      setError("Pleace fill the all reuired fields");
      setTimeout(() => {
        setError("");
      }, 5000);
      return;
    }

    if (checkPasswordMatchHandler() == 1) {
      return;
    }

    try {
      setLoading(true);

      const { name, email, phone, password, password2 } = register;

      const response = await fetch(`${process.env.API}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          password,
        }),
      });

      const data = await response.json();

      console.log(data);

      if (data) {
        if (!data.msg) {
          setError(data?.err);
          setLoading(false);
        } else {
          setSuccess(data.msg);
          setRegister({
            name: "",
            email: "",
            phone: "",
            password: "",
            password2: "",
          });
          router.push("/login")
        }
      }
    } catch (error) {
      console.log(error);
      setError("An Error Occured during registration");
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
            Register
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
          <Divider sx={{marginBottom: "20px"}}>
            <Link href="/login">already have an account</Link>
          </Divider>
            <Grid2 container spacing={2}>
              <TextField
                label="Name"
                name="name"
                fullWidth
                value={register.name}
                onChange={handleChange}
                // required
              />
              <TextField
                type="email"
                label="Email"
                name="email"
                fullWidth
                value={register.email}
                onChange={handleChange}
                required
              />
              <TextField
                label="Phone"
                name="phone"
                fullWidth
                value={register.phone}
                onChange={handleChange}
                required
              />
              <TextField
                type={showPassword ? "text" : "password"}
                label="Password"
                name="password"
                fullWidth
                value={register.password}
                onChange={handleChange}
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
              <TextField
                type={showPassword ? "text" : "password"}
                label="Retype Password"
                name="password2"
                fullWidth
                value={register.password2}
                onChange={handleChange}
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
                  "Register"
                )}
              </Button>
            </Grid2>
          </form>

          <Divider>
            <ButtonGroup
              sx={{
                mt: "10px",
                gap: 1,
                justifyContent: "center",
              }}
            >
              <IconButton
                sx={{
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#0088cc",
                  },
                }}
              >
                <Telegram />
              </IconButton>
              <IconButton
                sx={{
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#0866ff",
                  },
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                sx={{
                  "&:hover": {
                    color: "white",
                    background:
                      "linear-gradient(-120deg, #4285f4, #34a853, #fbbc05, #ea4335);",
                  },
                }}
              >
                <Google />
              </IconButton>
              <IconButton
                sx={{
                  "&:hover": {
                    color: "white",
                    background:
                      "linear-gradient(115deg, #f9ce34, #ee2a7b, #6228d7)",
                  },
                }}
              >
                <Instagram />
              </IconButton>
            </ButtonGroup>
          </Divider>
          
        </Box>
      </Container>
    </Box>
  );
}
