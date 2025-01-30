import { Box, Typography, Button, Grid, Container } from '@mui/material';
import React from 'react';
import SampleImage from '../Images/ict.jpg'; // Replace with an actual image from your assets
import { useNavigate } from 'react-router-dom';
import Bg from '../Images/ictaz.JPG'
const Home = () => {

  const navigate = useNavigate();

  const handleClick =()=>{
    navigate('/registration')
  }
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage:`url(${Bg})`,
        backgroundSize:'cover',
        backgroundPosition:'center', 
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '50px 20px',
      }}
    >
      <Container maxWidth="xl" maxHeight="900px" sx={{backgroundColor:'white',padding:'20px',borderRadius:'20px',opacity:0.8}}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Side - Text Content */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" color={"#000024"} fontWeight={800} gutterBottom>
          ICTAZ NIPA CHAPTER
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.8, mb: 3 }}>
            We are a Nipa student association which is under the information and communication technology Association of zambia(ICTAZ) 
            which aims at registering ict professionals and regulate their conduct in the interest of the information and technology sector.
            </Typography>
            <Button onClick={handleClick} variant="contained" sx={{backgroundColor:'#000024',width:'400px',height:'60px',borderRadius:'20px',fontSize:'20px'}}
             size="large">
              REGISTER NOW
            </Button>
          </Grid>

          {/* Right Side - Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={SampleImage} // Replace with your actual image
              alt="AI Assistance"
              sx={{
                width: '100%',
                maxWidth: '500px',
                borderRadius: '10px',
                boxShadow: '0px 4px 20px rgba(255, 255, 255, 0.1)',
              }}
            />
          </Grid>
        </Grid>

       
      </Container>
    </Box>
  );
};

export default Home;
