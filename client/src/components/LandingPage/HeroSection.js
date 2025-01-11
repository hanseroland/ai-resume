import React from "react";
import { Box, Typography, Button } from "@mui/material";
import FeatureCard from "../Cards/FeaturedCard";
import { Link } from "react-scroll";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const HeroSection = () => {
  return (
    <Box
      component="section"
      id="accueil"
      sx={{
        minHeight: "100vh", 
        backgroundImage: `url('${process.env.PUBLIC_URL}/images/1-carte-visite.webp')`, // Chemin relatif au dossier public
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "A0px",
      }}
    >
      {/* Titre Principal */}
      <Box
        mb={10}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "30px",
            fontSize: { xs: '30px', md: '40px' },
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" // Ombre du texte
          }}
        >
        <Typography 
          sx={{
            color:"primary.main",
            fontSize: { xs: '30px', md: '35px' },
            fontWeight:'bold'
          }} 
          component="span" 
         >
          ELYKA  
         </Typography> 
          {" "} la carte de visite numérique sans contact
        </Typography>
      </Box>
     
      <Box>
          <Link
          to="offres" // Section cible
          smooth={true}
          duration={500}
          offset={-70}
          >
            <Button
              variant="text"
              color="primary"
              endIcon={<NavigateNextIcon/>}
              sx={{
                backgroundColor: "primary.main", // Couleur de fond
                color: "#fff", // Couleur du texte
                fontWeight: "bold",
                padding: "10px 20px",
                borderRadius: "50px",
                textTransform: "none",
                fontSize: "16px",
                "&:hover": {
                  backgroundColor: "secondary.main", // Couleur au survol
                },
              }}
              
            >
              Commencer maintenant
            </Button>
          </Link>
      </Box>

      {/* Section des Features */}
     {/* <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 30,
          right: 30,
          maxWidth: "1200px", // Largeur maximale pour limiter la taille sur les écrans larges
          margin: "0 auto", // Centre horizontalement le bloc
          justifyContent: "center", // Centre les colonnes dans le conteneur
         
         
        }}
        
      >
        <Grid size={{xs:12,sm:6,md:6}} >
          <FeatureCard
            title="Une experience repensée pour une utilisation optimale"
            description="Simplifiez vos échanges professionnels avec BlackIdentity"
            iconPath={`${process.env.PUBLIC_URL}/images/card-are-promin.webp`} 
          />
        </Grid>
        <Grid size={{xs:12,sm:6,md:6}}>
          <FeatureCard
            title="Accès Universel"
            description="Compatible avec tous les smartphones dotés de NFC ou avec un QR code intégré"
            iconPath={`${process.env.PUBLIC_URL}/images/card-are-promin.webp`} 
            reverse 
          />
        </Grid>
      </Grid>*/}
    </Box>
  );
};

export default HeroSection;
