import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import Grid from '@mui/material/Grid2';


const FeatureCard = ({ title, description, highlight, iconPath, reverse }) => {
  return (
    <Paper
          elevation={reverse ? 0 : 3} // Supprime l'élévation si reverse est actif
          sx={{
            padding: "10px",
            borderRadius: "16px",
            backgroundColor: reverse
              ? "transparent" // Pas de transparence si reverse
              : "rgba(0, 0, 0, 0.6)", // Fond semi-transparent avec flou
            backdropFilter: reverse ? "none" : "blur(10px)", // Blur uniquement si pas reverse
            border: reverse ? "none" : "1px solid", // Pas de bordure si reverse
            borderColor: reverse ? "transparent" : "primary.main", // Bordure dynamique
            boxShadow: reverse ? "none" : "0px 4px 6px rgba(0, 0, 0, 0.1)", // Supprime l'ombre si reverse
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "translateY(-5px)",
            },
            maxWidth: "100%", // Limite la largeur de chaque carte
            bottom:'10px',
            
          }}
    >
      <Grid
        container
        spacing={1}
        alignItems="center"
        flexDirection={reverse ? "row-reverse" : "row"}
      >
        {/* Zone Icône ou Image */}
        <Grid size={{xs:12,md:6}}>
          <Box
            sx={{
              height: {xs: "150px",md: "150px",sm: "120px"},
              backgroundColor: "background.default",
              borderRadius: "12px",
              border: "1px solid",
              borderColor: "secondary.main",
              display:{xs:'none',sm:'flex',md:'flex'}
            }}
          >
            {iconPath && (
              <Box
                component="img"
                src={iconPath}
                alt={title}
                sx={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            )}
          </Box>
        </Grid>

        {/* Texte */}
        <Grid size={{xs:12,md:6}}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#fff",
              marginBottom: "10px",
            }}
          >
            {highlight && (
              <Typography
                component="span"
                sx={{
                  color: "secondary.main",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontSize: "inherit",
                }}
              >
                {highlight}&nbsp;
              </Typography>
            )}
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#aaa",
              fontWeight:'bold'
            }}
          >
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FeatureCard;
