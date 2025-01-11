import React from "react";
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Grid from '@mui/material/Grid2';
import { motion } from "framer-motion";


const AvantagesSection = ({mode}) => {

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 100 }, // Commence en bas, invisible
    visible: {
      opacity: 1,
      y: 0, // Se déplace vers le haut
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const avantages = [
    { label: "Partage Sans Contact", color: "primary.main" },
    { label: "Design Personnalisé", color: "secondary.main" },
    { label: "Sécurisée", color: "primary.main" },
  ];

  return (
    <Box
      component={motion.section}
      id="avantages"
      initial="hidden"
        whileInView="visible"
        viewport={{ once: false }} // Animation uniquement au premier scroll
        variants={fadeUpVariant}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "background.default", // Couleur dynamique selon le thème
        padding: "40px",
        position: "relative",
        
      }}
      
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
        sx={{
          
          margin: "0 auto",
          backgroundColor: "#333333", // Couleur grise foncée comme dans l'image
          padding: "40px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          height: "100%",
        }}
      >
        <Grid size={{xs:12}}>
         <Box>
            <Typography
              variant="h6"
              sx={{
                color: "primary.main",
                textTransform: "uppercase",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Avantages
            </Typography>
          
          </Box>
        </Grid>
      
        {/* Texte principal */}
        <Grid size={{xs:12,md:6}}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "text.primary",
              marginBottom: "20px",
              color: mode === "light" ? "#fff" : "#fff",
              textAlign:{xs:'center',md:'left'},
              fontSize:{md:'45px',xs:'35px'} ,
            }}
          >
            Boostez votre business avec votre carte de visite multifonction
          </Typography>
        </Grid>

        {/* Liste des avantages */}
        <Grid size={{xs:12,md:4}}>
          <Box
            sx={{
              border: "1px solid #1388d5", // Bordure dorée
              borderRadius: "12px",
              padding: "20px",
              //borderImage:"linear-gradient(208deg, #1388d5 0%, #80b1d0 50%)",
              borderImageSlice: "1", 
            }}
          >
            <List>
              {avantages.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 0",
                    
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {/* Indicateur coloré */}
                    <ListItemIcon
                      sx={{
                        minWidth: "auto",
                        marginRight: "10px",
                      }}
                    >
                      <Box
                        sx={{
                          width: "12px",
                          height: "12px",
                          backgroundColor: item.color,
                        }}
                      />
                    </ListItemIcon>
                    {/* Texte */}
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        variant: "body1",
                        color: mode === "light" ? "#fff" : "#fff",
                        fontWeight: "bold",
                      }}
                    />
                  </Box>
                  {/* Flèche */}
                  <ArrowForwardIosIcon
                    sx={{
                      color: mode === "light" ? "#fff" : "#fff",
                      fontSize: "14px",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AvantagesSection;
