import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import Grid from '@mui/material/Grid2';
import BuildCircleIcon from "@mui/icons-material/BuildCircle"; // Exemple d'icône
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DurabilityCard from "../Cards/DurabilityCard";

const PossibilitiesSection = ({mode}) => {
  const features = [
    {
      title: "Durabilité",
      description:
        "Carte de visite NFC fabriquée avec des matériaux de haute qualité et recyclables.",
      icon: <BuildCircleIcon sx={{ color: "primary.main", fontSize: 40 }} />,
    },
    {
      title: "Personnalisation",
      description:
        "Personnalisez vos cartes NFC avec des designs, couleurs et informations spécifiques.",
      icon: <DesignServicesIcon sx={{ color: "primary.main", fontSize: 40 }} />,
    },
    {
      title: "Prix attractifs",
      description: "Prix accessible pour tous.",
      icon: <AttachMoneyIcon sx={{ color: "primary.main", fontSize: 40 }} />,
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "background.default", // Couleur dynamique selon le thème
        padding: "60px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
       
      {/* Texte principal */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "text.primary",
          marginBottom: "10px",
          fontSize:{md:'45px',xs:'35px'} ,
        }}
      >
        Une{" "}
        <span style={{ color: "#1388d5" }}>carte,</span> 
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "text.primary",
          marginBottom: "10px",
          fontSize:{md:'45px',xs:'35px'} ,
        }}
      >
        des possibilités infinies
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          marginBottom: "40px",
        }}
      >
        Partagez vos informations professionnelles en un contact
      </Typography>

      {/* Grille des fonctionnalités */}
      <Grid
        container
        spacing={4}
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {features.map((feature, index) => (
          <Grid size={{xs:12,md:4}} key={index}>
           <DurabilityCard mode={mode} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PossibilitiesSection;
