import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { motion } from "framer-motion";


const HighlightSection = ({mode}) => {

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 100 }, // Commence en bas, invisible
    visible: {
      opacity: 1,
      y: 0, // Se déplace vers le haut
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box
      component="section" 
        id="fonctionnalité"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: mode === "light" ? "#000" : "#D9D9D9", // Adapté au thème 
        padding: "40px",
        position: "relative",
        minHeight: "100vh",
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
        sx={{
          
          margin: "0 auto",
        }}
      >
        {/* Texte principal */}
        <Grid size={{xs:12,md:6}}>
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
              Fonctionnalités
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: mode === "light" ? "#fff" : "#000",
                marginBottom: "20px",
                fontSize:{md:'45px',xs:'35px'}
              }}
            >
              Faites un premier{" "}
              <span style={{ color: "#1388d5" }}>contact</span> qui laisse une
              impression générale
            </Typography>
          </Box>

          {/* Sous-titres */}
          <Box sx={{ display: "flex", gap: 4, marginTop: "30px" }}>
            {[
              { label: "Optimale", icon: "+" },
              { label: "Stories and Lore", icon: "+" },
              { label: "Art and Design", icon: "+" },
            ].map((feature, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "text.primary",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "primary.main",
                    marginBottom: "5px",
                  }}
                >
                  {feature.icon}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: mode === "light" ? "#fff" : "#000",
                    textAlign: "center",
                  }}
                >
                  {feature.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Image mobile */}
    <Grid size={{xs:12,md:6}} sx={{ position: "relative" }}>
      
      {/* Boîte grise */}
      <Box
        id="fond"
        component={motion.div}
        initial={{ backgroundColor: "#fff", opacity: 0 }}
        whileInView={{ backgroundColor: "#1388d5", opacity: 1 }}
        transition={{duration: 1.8, ease: "easeOut"}}
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: "linear-gradient(to right, #1388d5, #80b1d0)",
          backgroundColor: "rgb(69,69,82)", // Couleur grise
          borderRadius: {xs:'50px',md:'100px'},
          padding: "50px",
          marginTop:{xs:'80px',md:'0px'},
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          height: {xs:"200px",md:"400px"}, // Hauteur de la boîte grise
        }}
      >
      </Box>
      {/* Image au-dessus de la boîte */}
      <Box
        component={motion.img}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }} // Animation uniquement au premier scroll
        variants={fadeUpVariant}
        src={`${process.env.PUBLIC_URL}/images/oumardiop.png`} // Remplacez par le chemin réel de votre image
        alt="Phone Mockup"
        sx={{
          position: "absolute", // Position absolue pour être en dehors de la boîte
          top: {xs:'10px',md:'-100px'}, // Dépassement au-dessus de la boîte
          left: "25%", // Centrage horizontal
          transform: "translateX(50%)", // Ajustement pour centrer
          width:{xs:'140px',md:'365px'},
          //width: "120%", // Taille plus grande que la boîte
          maxWidth: "450px", // Taille maximale de l'image
          height: "auto", // Maintient les proportions de l'image
          
        }}
      />

    </Grid>
      </Grid>
    </Box>
  );
};

export default HighlightSection;
