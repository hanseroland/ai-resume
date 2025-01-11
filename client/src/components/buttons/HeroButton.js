import React from "react";
import { Box, Typography } from "@mui/material";

const HeroButton = ({title}) => {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        backgroundColor: "#D9D9D9", // Couleur gris clair
        borderRadius: "5px",
        padding: "5px 15px",
        position: "relative",
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        overflow: "hidden",
        width:"200px",
        height:"50px",
        "&:hover": {
          transform: "scale(1.05)",
          transition: "0.3s ease",
          boxShadow: "0 6px 10px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      {/* Texte */}
      <Typography
        variant="body1"
        sx={{
          color: "primary.main", // Couleur orange du texte
          fontWeight: "bold",
          zIndex: 1,
          textAlign:'center',
          fontSize:'20px'
        }}
      >
        {title}
      </Typography>

      {/* Zone orange */}
      <Box
        sx={{
          width: "40px",
          height: "100%",
          backgroundColor: "primary.main", // Couleur orange
          position: "absolute",
          right: 0,
          top: 0,
          borderTopRightRadius: "5px",
          borderBottomRightRadius: "5px",
          zIndex: 0,
        }}
      ></Box>
    </Box>
  );
};

export default HeroButton;
