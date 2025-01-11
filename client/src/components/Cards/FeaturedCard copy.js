import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const FeatureCard = ({ title, description, iconPath }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Black with 70% opacity
        backdropFilter: 'blur(10px)',          // Blur effect
        boxShadow: 'none',     
        border: "1px solid",
        borderColor: "primary.main",
        display:'flex',
        maxWidth:"400px"
      }}
    >
      {/* Icône */}
      <Box>
            <Box
                component="img"
                src={iconPath}
                alt={title}
                sx={{ height: "100px", marginBottom: "20px" }}
            />
      </Box>
      <Box>
           {/* Titre */}
            <Typography
                variant="h6"
                sx={{
                color: "text.primary",
                fontWeight: "bold",
                marginBottom: "10px",
                }}
            >
                {title}
            </Typography>

            {/* Description */}
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {description}
            </Typography>
      </Box>
     

     
    </Paper>
  );
};

export default FeatureCard;
