import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  // Options pour react-slick
  const settings = {
    dots: true, // Points de navigation
    infinite: true, // Boucle infinie
    speed: 500, // Vitesse de transition
    slidesToShow: 3, // Nombre d'images visibles
    slidesToScroll: 1, // Nombre d'images à faire défiler
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Images pour le carousel
  const images = [
    "images/shopping-with-ecommer-utc.webp",
    "images/Photo-2.webp",
    "images/PHOTO-3.webp",
  ];

  return (
    <Box
      component="section"
      sx={{
        position: "relative", // Pour que le contenu en absolute fonctionne
      
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url('${process.env.PUBLIC_URL}/images/card-are-promin.webp')`, // Fond de l'arrière-plan
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
        overflow: "hidden", // Empêche tout débordement
      }}
    >
      {/* Effet de blur */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Couleur noire semi-transparente
          backdropFilter: "blur(10px)", // Effet de flou
          zIndex: 1, // Au-dessus de l'arrière-plan
        }}
      />

      {/* Contenu principal */}
      <Box
        sx={{
          width: "80%", // Réduire la largeur du carousel pour l'adapter à l'écran
          maxWidth: "1200px", // Limiter la largeur maximale
          position: "relative", // Pour que le slider passe par-dessus le blur
          zIndex: 2, // Au-dessus de l'effet de blur
        }}
      >
        <Slider {...settings}>
          {images.map((image, index) => (
            <Box
              key={index}
              sx={{
                padding: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={`${process.env.PUBLIC_URL}/${image}`}
                alt={`carousel-${index}`}
                sx={{
                  width: "100%",
                  maxWidth: "300px",
                  height: "200px",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ImageCarousel;
