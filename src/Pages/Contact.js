import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import Bg from '../Images/call.jpg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message Sent:", formData);
    // Add logic to handle form submission (e.g., send to API)
  };

  return (
    <Box
      sx={{
        minHeight: "80vh",
      backgroundImage:`url(${Bg})`,
             backgroundSize:'cover',
             backgroundPosition:'center',
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "50px 20px",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h4" fontWeight={800} gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.8, mb: 3 }}>
          Have any questions or inquiries? Reach out to us, and we'll get back to you as soon as possible.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                required
                sx={{ backgroundColor: "white", borderRadius: "5px" }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Email"
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
                label="Your Message"
                name="message"
                multiline
                rows={4}
                variant="outlined"
                value={formData.message}
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
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
