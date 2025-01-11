import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { motion } from 'framer-motion';
import ImageCard from '../Cards/ImageCard';

const features = [
  { title: 'Partage instantané',color:'#051937', description: 'Partage de contact en un seul geste.', imagePath:'/images/credit-card-Photoroom.png' },
  { title: 'Sécurisé',color:'#008793', description: 'Vos informations restent privées et sécurisées.',imagePath:'/images/credit-card-Photoroom.png' },
  { title: 'Écologique',color:'#a8eb12', description: 'Pas besoin de cartes en papier.',imagePath:'/images/credit-card-Photoroom.png'},
];

const FeaturesSection = () => {
  return (
    <Box id="fonctionnalités" component={motion.div} initial="hidden" whileInView="visible" transition={{ staggerChildren: 0.2 }}>
      <Typography variant="h4" textAlign="center" mb={2} mt={2}>Fonctionnalités</Typography>
      <Grid 
        container 
        spacing={3}
        justifyContent="center"
        alignItems="center"
        >
        {features.map((feature, index) => (
          <Grid 
           key={index} 
           item
           xs={12} md={4} 
           component={motion.div} 
           variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            <ImageCard
                  title={feature.title}
                  description={feature.description}
                  image={feature.imagePath}
                  bgColor={feature.color}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
