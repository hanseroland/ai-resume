import React from "react";
import { Box, Typography, Avatar, IconButton, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import Grid from '@mui/material/Grid2';

const testimonials = [
  {
    name: "Pierre Martin",
    username: "@pierrem",
    feedback: "Les cartes de visite NFC de Contact NFC sont incroyablement pratiques ! Elles permettent de partager mes informations de contact en un seul geste. Mes clients adorent !",
    avatar: "/path/to/avatar1.jpg",
  },
  {
    name: "Sophie Dupont",
    username: "@sophie_tech",
    feedback: "Avec Contact NFC, j’ai pu moderniser mon réseau professionnel. Les cartes NFC sont simples à utiliser et rendent l'échange de contacts bien plus efficace.",
    avatar: "/path/to/avatar2.jpg",
  },
  {
    name: "Ahmed Benali",
    username: "@ahmedben",
    feedback: "Les cartes de visite NFC de Contact NFC ont transformé ma façon de faire du networking. Un simple tap suffit pour partager mes informations de manière professionnelle.",
    avatar: "/path/to/avatar3.jpg",
  },
  {
    name: "Claire Fournier",
    username: "@clairef",
    feedback: "Grâce à Contact NFC, je n'ai plus besoin de stocker des piles de cartes de visite papier. Le format NFC est écologique et innovant, mes interlocuteurs sont toujours impressionnés !",
    avatar: "/path/to/avatar4.jpg",
  },
  {
    name: "Jean-Luc Leblanc",
    username: "@jeanluc_lb",
    feedback: "Les cartes NFC sont une vraie révolution pour mon entreprise. La technologie est fiable, et Contact NFC offre un service client impeccable.",
    avatar: "/path/to/avatar5.jpg",
  },
  {
    name: "Nadia Bensaid",
    username: "@nadia_b",
    feedback: "Contact NFC m'a permis de personnaliser mes cartes de visite avec un design élégant. Partager mes informations n'a jamais été aussi simple et efficace !",
    avatar: "/path/to/avatar6.jpg",
  },
];

const Testimonials = () => {
  return (
    <Box id="témoignages" sx={{ py:8, px:1, textAlign: "center"}}>
      <Typography sx={{textTransform:'none',fontSize:"20px"}} variant="overline" component="p">
        📣 Témoignages
      </Typography>
      <Typography variant="h4" fontWeight="bold" mt={1}>
        Retour d'expérience sur Contact NFC
      </Typography>
      <Typography variant="body1" color="textSecondary" mt={1} mb={4}>
        Découvrez comment nos utilisateurs profitent des cartes de visite NFC !
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid 
             size={{ xs:12,sm:6,md:4}}
             key={index}
            >
            <Card
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              sx={{
                p: 2,
                borderRadius: 3,
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                position: "relative",
                maxWidth: "400px",
                backgroundImage: 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)', // Dégradé bleu à violet

              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center",color:'white', mb: 2 }}>
                  <Avatar src={testimonial.avatar} alt={testimonial.name} sx={{ width: 48, height: 48, mr: 2 }} />
                  <Box>
                    <Typography sx={{color:'white',}} variant="subtitle1" fontWeight="bold">
                      {testimonial.name}
                    </Typography>
                    <Typography  sx={{color:'white',}} variant="body2" color="textSecondary">
                      {testimonial.username}
                    </Typography>
                  </Box>
                  <IconButton
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      color: "grey.500",
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
                <Typography  variant="body2" color="textPrimary">
                  {testimonial.feedback}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
