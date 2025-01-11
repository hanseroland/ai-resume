import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Menu, MenuItem, Button } from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';

const Header = ({ onToggleTheme }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const pages = ['Accueil', 'Fonctionnalités', 'Avantages', 'Témoignages', 'Contact'];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => { 
    setAnchorElNav(null);
  };

  return (
    <AppBar  
        position="fixed"
        sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.1)', // Black with 70% opacity
            backdropFilter: 'blur(10px)',          // Blur effect
            boxShadow: 'none',     
            top:0,
            zIndex:10                // Remove default shadow
          }}
    
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          NFC Contact
        </Typography>

        {/* Icône Menu pour mobile */}
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton size="large" aria-label="menu" color="inherit" onClick={handleOpenNavMenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Link to={page.toLowerCase()} smooth duration={500}>
                  <Typography textAlign="center">{page}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Menu desktop */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
          {pages.map((page) => (
            <Button key={page} sx={{ color: 'white', textTransform:'none',fontWeight:'bold' }}>
              <Link to={page.toLowerCase()} smooth duration={500}>
                {page}
              </Link>
            </Button>
          ))}
        </Box>

        {/* Bouton thème */}
        <IconButton onClick={onToggleTheme} color="inherit">
          <Brightness7Icon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
