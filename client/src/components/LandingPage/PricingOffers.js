import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import HeroButton from "../buttons/HeroButton";
import OffreCard from "../Cards/OffreCard";


const offers = [
  {
    id: 1,
    title: "Formule Basic",
    description: [
      "Personnalisation de la carte.",
      "Intégration de vos coordonnées personnelles.",
      "Intégration de 2 liens (site internet et réseaux sociaux).",
      "Bouton pour enregistrer le contact en un clic.",
      "Espace compte pour gérer vos données.",
      "Paiement unique, sans abonnement.",
      "Compatible avec tous les smartphones, tablettes et ordinateurs.",
    ],
    price: "25 000 Fcfa",
  },
  {
    id: 2,
    title: "Formule Pro",
    description: [
      "Personnalisation de la carte.",
      "Intégration de vos coordonnées personnelles.",
      "Intégration de 6 liens (site internet et réseaux sociaux).",
      "Bouton pour enregistrer le contact en un clic.",
      "Espace compte pour gérer vos données.",
      "Paiement unique, sans abonnement.",
      "Compatible avec tous les smartphones, tablettes et ordinateurs.",
      "Ajout d’un listing de services.",
      "Accès aux statistiques (nombre de vues, enregistrements).",
    ],
    price: "30 000 Fcfa",
  },
  {
    id: 3,
    title: "Pack Entreprise",
    description: [
      "Accès total.",
      "Gestion de plusieurs cartes.",
      "Outils statistiques détaillés.",
      "Sauvegarde des données.",
      "Accompagnement personnalisé.",
      "Gestion des profils collaborateurs.",
    ],
    price: "Sur devis",
  },
];

const PricingOffers = ({mode}) => {
  return (
    <Box 
     id="offres"
    sx={{ 
        backgroundColor: mode === "light" ? "#fff" : "#000",
        color:mode === "light" ? "#000" : "#fff",
         padding: "4rem 2rem", 
         textAlign: "center",
         minHeight: "100vh", // S'assure que le conteneur prend toute la hauteur de l'écran
        display: "flex", // Utilisation de flexbox pour centrer verticalement
        flexDirection: "column",
        justifyContent: "center", // Centre verticalement
        
        }}
    >
      <Typography variant="h2" sx={{ marginBottom: "2rem", fontWeight: "bold", fontSize:{md:'45px',xs:'35px'} }}>
        Nos offres
      </Typography>

     {/* <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}>
        <HeroButton title="Particulier"/>
      </Box>*/}

      <Grid 
        container 
        spacing={4}
        sx={{
          maxWidth: "1200px", // Largeur maximale pour limiter la taille sur les écrans larges
          margin: "0 auto", // Centre horizontalement le bloc
          justifyContent: "center", // Centre les colonnes dans le conteneur
        }}
        
      >

        {offers.map((offer) => (
          <Grid key={offer.id} size={{xs:12,md:3,sm:6}}>
            
                <OffreCard
                 id={offer.id}
                 title={offer.title}
                 description={offer.description}
                 price={offer.price}
                 mode={mode}
                />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PricingOffers;
