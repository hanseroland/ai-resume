import React from "react";
import { Box, Typography, Card, CardMedia } from "@mui/material";
import { motion } from "framer-motion";

const ImageCard = ({title,description,image,bgColor}) => {
  return (
    <Card
      component={motion.div}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      sx={{
        width: 350,
        height:300,
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)", 
        position: "relative",
        backgroundImage: 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)', // Dégradé bleu à violet

      }}
    >
     {/* <CardMedia
        component="img"
        image={image}
        alt="Image illustrative"
        sx={{ height: 450, objectFit:"cover" }}
      />*/}
     <Box
        sx={{
          position: "absolute",
          top: 50,
          left: 20,
          color: "white",
        }}
        component={motion.div}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Typography variant="body2" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="h6" fontSize="30px" fontWeight="bold" mt={1}>
          {description}
        </Typography>
      </Box>
    </Card>
  );
};

export default ImageCard;
