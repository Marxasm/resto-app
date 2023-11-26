import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { mdiMenu } from '@mdi/js';
import weblogo from './images/bangpop-thai-restaurant-melbourne-logo.webp';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [drawerOpen, setDrawerOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setDrawerOpen(true);
    };
  
    const handleDrawerClose = () => {
      setDrawerOpen(false);
    };

  
    return (
   <div>
        <AppBar position="fixed" sx={{ backgroundColor: 'black',
        borderBottom: '2px solid black', 
        opacity: 0.9, zIndex: 1000 }}>
  <Toolbar>
    <img
      src={weblogo} // replace with the actual path to your logo image
      alt="Logo"
      style={{
        height: '50px',
        marginRight: '10px',
        filter: 'brightness(1.2)', 
      }} 
    />
    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: '1px', color: '#ffffff', fontSize: '1.0em'  }}>
    </Typography>
    {!isMobile && (
      <>
        <StyledButton component={Link} to="/" color="inherit">Home</StyledButton>
        <StyledButton component={Link} to="/about" color="inherit">About</StyledButton>
        <StyledButton component={Link} to="/menu" color="inherit">Menu</StyledButton>
      </>
    )}
    {isMobile && (
      <IconButton
        size="large"
        edge="end"
        color="inherit"
        aria-label="menu"
        sx={{ ml: 2 }}
        onClick={handleDrawerOpen}
      >
        <MenuIcon path={mdiMenu} size={1} color="#ffffff" />
      </IconButton>
    )}
  </Toolbar>
</AppBar>
<Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
  <List>
    {['Home', 'About', 'Contact'].map((text, index) => (
      <ListItem button key={text} onClick={handleDrawerClose}>
        <ListItemText primary={text} />
      </ListItem>
    ))}
  </List>
</Drawer>
      </div>
    );
};

// Create a styled component for the hover effect
const StyledButton = ({ children, ...props }) => {
    return (
      <Button
        sx={{
          fontFamily: 'Impact, cursive',
          '&:hover': {
            backgroundColor: '#81b1ce', // Change the background color on hover
            color: '#ffffff', // Change the text color on hover
          },
        }}
        {...props}
      >
        {children}
      </Button>
    );
  };
export default Navbar;