import { Facebook, Instagram, WhatsApp } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
 <Box sx={{bgcolor:'#000024'}}>

<Box sx={{color:'white',textAlign:'center',fontSize:'60px',"& svg":{fontSize:"60px",mr:2,cursor:'pointer'}}}>
    <Facebook/>
    <Instagram/>
    <WhatsApp/>
</Box>

<Typography variant='h5' sx={{textAlign:'center',color:'white'}}>All rights reserved &copy; ictaz nipa chapter </Typography>
 </Box>
    </div>
  )
}

export default Footer
