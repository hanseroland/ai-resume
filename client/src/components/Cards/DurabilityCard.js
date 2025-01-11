import React from "react";
import { Box, Typography } from "@mui/material";
import BuildCircleIcon from "@mui/icons-material/BuildCircle"; // Icône personnalisable
import { motion } from "framer-motion";

const DurabilityCard = ({mode}) => {

   // Variants pour les animations
   const iconVariant = {
    bounce: {
      y: [0, -10, 0], // Simule un rebond vertical
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        repeat: Infinity, // Rebond répétitif
        repeatDelay: 1, // Pause avant le prochain rebond
      },
    },
  };


  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "transparent", // Fond noir par défaut
        padding: "20px",
        
      }}
    >
      {/* Icône avec contour stylisé */}
      <Box
       component={motion.div}
       initial="hidden"
       animate="visible"
       whileHover="bounce" // Active l'effet de rebond au survol
       variants={iconVariant}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid", // Contour de l'icône
          borderRadius: "12px",
          width: "150px",
          height: "60px",
          marginRight: "20px",
          backgroundColor: mode === "light" ? "#fff" : "#000", // Fond central pour masquer la bordure
          borderImage:"linear-gradient(to right, #1388d5, #80b1d0)",
          borderImageSlice: "1", 
        }}
      >
        <BuildCircleIcon sx={{ color: "primary.main", fontSize: "40px" }} />
      </Box>

      {/* Texte à côté de l'icône */}
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "text.primary", // Couleur dynamique du texte
            marginBottom: "5px",
          }}
        >
          Durabilité
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary", // Texte secondaire
          }}
        >
          Carte de visite NFC fabriquée avec des matériaux de haute qualité et
          recyclables.
        </Typography>
      </Box>
    </Box>
  );
};

export default DurabilityCard;
