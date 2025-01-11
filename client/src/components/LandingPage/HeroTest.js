import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import Grid from '@mui/material/Grid2';


const HeroTest = () => {
  return (
    <Box>
      {/* Gradient Bar */}
      <Box
        sx={{
          width: "100%",
          height: "100px",
          
          mb: 2,
        }}
      />

      {/* Hero Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          py: 8,
          px: 4,
        }}
      >
        {/* Logo */}
        <Box
          component="img"
          src="/path/to/logo.png" // Remplacez par le chemin de votre logo
          alt="Logo"
          sx={{
            width: 50,
            height: 50,
            borderRadius: 2,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            mb: 2,
          }}
        />

        {/* Title */}
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Beautifully crafted open source & premium 3D icons
        </Typography>

        {/* Subtitle */}
        <Typography variant="body1" color="textSecondary" mb={4}>
          Use with any design tool
        </Typography>

        {/* Design Tools Icons */}
        <Grid container spacing={2} justifyContent="center" mb={4}>
          {["/path/to/sketch.png", "/path/to/xd.png", "/path/to/figma.png", "/path/to/blender.png", "/path/to/photoshop.png"].map((icon, index) => (
            <Grid item key={index}>
              <Box
                component="img"
                src={icon}
                alt={`icon-${index}`}
                sx={{
                  width: 40,
                  height: 40,
                }}
              />
            </Grid>
          ))}
        </Grid>

        {/* Call to Action Buttons */}
        <Box display="flex" gap={2} mb={4}>
          <Button
            component={motion.button}
            whileHover={{ scale: 1.1 }}
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "20px",
              px: 4,
              py: 1,
              textTransform: "capitalize",
            }}
          >
            Download all
          </Button>
          <Button
            component={motion.button}
            whileHover={{ scale: 1.1 }}
            variant="outlined"
            sx={{
              borderColor: "black",
              color: "black",
              borderRadius: "20px",
              px: 4,
              py: 1,
              textTransform: "capitalize",
            }}
          >
            Donate & support
          </Button>
        </Box>

        {/* Icon Carousel */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            overflowX: "auto",
            mt: 4,
            py: 2,
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {["/path/to/icon1.png", "/path/to/icon2.png", "/path/to/icon3.png", "/path/to/icon4.png", "/path/to/icon5.png", "/path/to/icon6.png"].map((icon, index) => (
            <Box
              key={index}
              component="img"
              src={icon}
              alt={`3D-icon-${index}`}
              sx={{
                width: 60,
                height: 60,
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HeroTest;
