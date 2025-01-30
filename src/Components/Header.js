import { Computer, Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Box, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const navLinks = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Executives', path: '/executives' },
    { text: 'Registration', path: '/registration' },
    { text: 'Contact', path: '/contact' }
  ];

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    marginRight: '16px',
    fontSize: '1.1em',
    fontWeight: '500',
    transition: 'font-size 0.2s ease-in-out',
    '&:hover': { color:'orangered' }
  };

  return (
    <div>
      <AppBar sx={{ backgroundColor: '#000024' }}>
        <Toolbar>
          <Box sx={{ "& svg": { fontSize: '60px' }, mr: 2 }}>
            <Computer />
          </Box>
          <Typography sx={{ fontWeight: '600', fontSize: '20px', flexGrow: 1 }}>
            Ictaz Nipa Chapter
          </Typography>

          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <List sx={{ width: 250 }}>
                  {navLinks.map((link) => (
                    <ListItem key={link.text} disablePadding>
                      <ListItemButton component={Link} to={link.path} onClick={toggleDrawer(false)}>
                        <ListItemText primary={link.text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <Box>
              {navLinks.map((link) => (
                <Link key={link.text} to={link.path} style={linkStyle}>
                  {link.text}
                </Link>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
