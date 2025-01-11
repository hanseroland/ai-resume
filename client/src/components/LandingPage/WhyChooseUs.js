import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const WhyChooseUs = ({mode}) => {

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
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "background.default",
        padding: { xs: "20px", md: "50px" },
        color: "white",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      {/* Section Image */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: "10px", md: "30px" },
        }}
      >
        <Box
          component={motion.img}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }} // Animation uniquement au premier scroll
          variants={fadeUpVariant}
          src={`${process.env.PUBLIC_URL}/images/shopping-with-ecommer-utc.webp`} // Remplacez par le chemin de l'image
          alt="Personne souriante"
          sx={{
            width: "100%",
            maxWidth: "400px",
            borderRadius: "12px",
          }}
        />
      </Box>

      {/* Section Texte */}
      <Box
        sx={{
          flex: 1,
          padding: { xs: "10px", md: "30px" },
          color: mode === "light" ? "#000" : "#fff",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: "20px",
            fontSize:{md:'45px',xs:'35px'} ,
            textAlign:{md:'left',xs:'center'}
          }}
        >
          Pourquoi choisir{" "}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: "20px",
            color: mode === "light" ? "#000" : "#fff",
            textAlign:{md:'left',xs:'center'}
          }}
        >
         <Typography
            component="span"
            sx={{
              fontSize:"30px",  
              color: "primary.main", 
              fontWeight: "bold",
              textAlign:{md:'left',xs:'center'}
            }}
          >
            Identity
          </Typography>{" "}
           ?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: "20px",
            lineHeight: 1.8,
            fontSize:"13px",
            textAlign:{md:'left',xs:'justify'}
          }}
        >
          <strong>Moderne et sans contact :</strong> Partagez vos informations
          instantanément grâce à la technologie NFC. <br />
          <strong>Écologique :</strong> Une carte réutilisable, zéro gaspillage.
          <br />
          <strong>Personnalisable :</strong> Adaptez le design à votre image.
          <br />
          <strong>Pratique :</strong> Coordonnées, réseaux sociaux, et
          portfolio accessibles en un clic. <br />
          <strong>Professionnel :</strong> Impressionnez vos contacts et
          simplifiez vos échanges.
        </Typography>
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(to right, #1388d5, #80b1d0)", // Dégradé
            color: "#fff",
            fontWeight: "bold",
            padding: "8px 16px",
            borderRadius: "8px",
            textTransform: "none",
            "&:hover": {
              background: "linear-gradient(to left, #1388d5, #80b1d0)",
            },
          }}
        >
          Personnalisez votre carte
        </Button>
      </Box>
    </Box>
  );
};

export default WhyChooseUs;
