import React from "react";
import { Box, Typography, Card, CardContent, CardMedia, Grid, IconButton } from "@mui/material";
import { Person } from "@mui/icons-material";
import Bg from '../Images/mm.jpeg'

const executives = [
  {
    name: "Gift K Mphakati",
    position: "President",
    image: <Person/>,
  },
  {
    name: "Oneva Soka",
    position: "Vice President",
    image: <Person/>
  },
  {
    name: "Jr Eli Silomba",
    position: "Secretary General",
    image: <Person/>
  },
  {
    name: "Venus Ramazani",
    position: "Academic Secretary",
    image: <Person/>
  },{
    name: "Kalevi ",
    position: "Treasurer General",
    image: <Person/>
  },{
    name: "Promise Ndhlovu",
    position: "Research and consultancy",
    image: <Person/>
  },{
    name: "Vladmir W",
    position: "Project coordinator",
    image: <Person/>
  },{
    name: "Anna Mulenga",
    position: "Information Publicity Secretary",
    image: <Person/>
  },{
    name: "Lucia james",
    position: "Committee Member",
    image: <Person/>
  },{
    name: "Majid Jawad",
    position: "Committee Member",
    image: <Person/>
  },
  {
    name: "Dignity Kabungo",
    position: "Committee Member",
    image: <Person/>
  },
];

const Executives = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
       backgroundImage:`url(${Bg})`,
       backgroundSize:'cover',
       backgroundPosition:'center',
        color: "#000024",
        textAlign: "center",
        padding: "50px 20px",
        marginTop:'60px'
      }}
    >
      <Typography variant="h4" fontWeight={800} gutterBottom>
        Meet Our Executive Team
      </Typography>
      <Typography variant="body1" sx={{ opacity: 0.8, mb: 3 }}>
        The leaders behind ICTAZ NIPA Chapter.
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {executives.map((exec, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: "#1A1A1A", color: "white", borderRadius: 3 }}>
              
              <CardContent>
                <IconButton sx={{"& svg":{fontSize:'60px',color:'white'}}}>
                    {exec.image}
                </IconButton>
                <Typography variant="h6" fontWeight={700}>
                  {exec.name}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.7 }}>
                  {exec.position}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Executives;
