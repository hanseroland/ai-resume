import React from "react";
import { Box, Typography, List, ListItem, Button } from "@mui/material";

const OffreCard = ({ id, title, description, price }) => {
    return (
        <Box
            sx={{
                backgroundColor: "black", // Fond noir
                color: "white", // Texte blanc
                padding: "20px",
                borderRadius: "10px",
                width: "100%",
                position: "relative",
                border: "1px solid #1388d5", // Bordure bleue
            }}
        >
            {/* Title */}
            <Typography
                sx={{
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
            
                }}
            >
                <Box
                    component="span"
                    sx={{
                        fontSize: "30px",
                        fontWeight: "bold",
                        marginLeft: "10px",
                        color: "#1388d5", // Couleur du titre
                         textAlign:"center"
                    }}
                >
                    {title}
                </Box>
                
          
            </Typography>
             {/* Price */}
            <Typography
                sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#fff", // Couleur dorée pour le prix
                    marginTop: "10px",
                    textAlign:"center"
                }}
            >
                {price}
            </Typography>

            {/* Description sous forme de liste */}
            <ul>
                {description.map((item, index) => (
                    <li
                        key={index}
                        style={{
                            fontSize: "14px",
                            color: "white", // Texte des éléments toujours blanc
                            paddingLeft: 0,
                            textAlign:'left'
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>

           

            {/* Button Commander */}
            <Button
                variant="contained"
                sx={{
                    backgroundColor: "#1388d5",
                    color: "white",
                    fontWeight: "bold",
                    marginTop: "15px",
                    textTransform:'none',
                    ":hover": {
                        backgroundColor: "#0f6fb0", // Couleur de survol
                    },
                }}
            >
                Commander
            </Button>
        </Box>
    );
};

export default OffreCard;
