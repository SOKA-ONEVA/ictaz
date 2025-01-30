import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import Bg from '../Images/reg.jpg'

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add logic for form validation and API submission here
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:`url(${Bg})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        color: "white",
        display: "flex",
        alignItems: "center",
       
        textAlign: "center",
        padding: "50px 20px",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h4" fontWeight={800} gutterBottom>
          Register here
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.8, mb: 3 }}>
          Join ICTAZ NIPA Chapter and start your journey in tech innovation.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                variant="outlined"
                value={formData.fullName}
                onChange={handleChange}
                required
                sx={{ backgroundColor: "white", borderRadius: "5px" }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                required
                sx={{ backgroundColor: "white", borderRadius: "5px" }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Programe of study"
                name="programe"
                
                variant="outlined"
                value={formData.password}
                onChange={handleChange}
                required
                sx={{ backgroundColor: "white", borderRadius: "5px" }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="YOS"
                name="year of study"
                type="number"
                variant="outlined"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                sx={{ backgroundColor: "white", borderRadius: "5px" }}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2, py: 1.5 }}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Registration;
