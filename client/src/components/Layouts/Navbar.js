import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom"; // Importer useNavigate pour la redirection


const Navbar = ({ mode, toggleTheme }) => {

  const navigate = useNavigate(); // Initialiser useNavigate
  const [anchorElNav, setAnchorElNav] = useState(null);
  const pages = ["Accueil", "Fonctionnalité", "Avantages", "Offres", "Contact"];

  // Gestion de l'ouverture/fermeture du menu mobile
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCreateCardClick = () => {
    navigate("/connexion"); // Redirige vers la page de connexion
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "background.default",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        {/* Logo */}
        <Link
          to="accueil"
          smooth
          duration={500}
          style={{
            textDecoration: "none",
            color: mode === "light" ? "#1388d5" : "#1388d5",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize:'20px'
          }}
        >
          <span>ELYKA</span>
        </Link>

        {/* Menu Mobile */}
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="menu"
            color="primary.main"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Link
                  to={page.toLowerCase()}
                  smooth
                  duration={500}
                  style={{
                    textDecoration: "none",
                    color: mode === "light" ? "#000" : "#fff",
                  }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Menu Desktop */}
        <Box sx={{ display: { xs: "none", md: "flex",justifyContent:'center' }, gap: 4 }}>
          {pages.map((page) => (
            <Link
              key={page}
              to={page.toLowerCase()}
              smooth
              duration={500}
              style={{
                textDecoration: "none",
                color: mode === "light" ? "#000" : "#fff",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              {page}
            </Link>
          ))}
        </Box>
        {/**Numéro de téléphone */}
        <Box
          sx={{
            overflow: "hidden", // Masque le contenu qui dépasse
            width: "138px", // Largeur visible
            whiteSpace: "nowrap", // Évite le retour à la ligne
            position: "relative",
          }}
        >
          <Box
            component="span"
            sx={{
              fontSize:{xs:'10px',md:'16px',sm:'16px'},
              color: mode === "light" ? "#000" : "#fff",
            }}
          >
            +221 6 12 34 56 78
          </Box>
        </Box>
        {/* Boutons */}
         <Box sx={{ display: "flex", alignItems: "center",  }}>
          {/* Bouton pour changer de thème */}
          <IconButton onClick={toggleTheme} sx={{ color: "text.primary" }}>
            {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>

          {/* Bouton principal */}
          <Button
            sx={{
              background: "linear-gradient(to right, #1388d5, #80b1d0)", // Dégradé
              color: "text.primary",
              fontWeight: "bold",
              padding: { xs: "4px 8px", md: "4px 8px", sm: "4px 8px" },
              borderRadius: "8px",
              textTransform: "none",
              width:{xs:'100px',md:'150px',sm:'150px'},
              fontSize:{xs:'10px',md:'16px',sm:'16px'},
              "&:hover": {
                background: "linear-gradient(to left,#1388d5, #80b1d0)",
              },
            }}
            onClick={handleCreateCardClick}
          >
            Créez votre carte
          </Button>
        </Box>
      </Toolbar>
       {/* Définition de l'animation dans les styles globaux */}
       <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </AppBar>
  );
};

export default Navbar;
