import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import Bg from '../Images/programmer-191101.jpg'
const About = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(${Bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '50px 20px',
      }}
    >
      <Container maxWidth="lg" sx={{backgroundColor:'white',padding:'20px',borderRadius:'20px',opacity:0.8}}>
        <Typography variant="h3" fontWeight={800} sx={{color:'black'}} gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" sx={{  mb: 3 }}>
          The ICTAZ NIPA Chapter is dedicated to fostering innovation and technological growth 
          among students. Our mission is to provide learning opportunities, networking events, 
          and industry collaborations that help students excel in the tech field.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body2">
              To bridge the gap between students and the tech industry by providing hands-on 
              experiences, mentorship programs, and cutting-edge resources.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="body2">
              To create a thriving community of tech enthusiasts who drive innovation and 
              contribute meaningfully to the digital transformation in Zambia and beyond.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
