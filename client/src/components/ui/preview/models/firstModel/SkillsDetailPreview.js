import React from "react";
import { Box, Typography, Chip, } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Grid from '@mui/material/Grid2';


const SkillsDetailPreview = ({ resumeData }) => {
  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        p:3,
      }}
    >
      {/* Titre de la section */}
      <Typography
        variant="h5"
        fontWeight="bold"
        color="textPrimary"
        gutterBottom
        sx={{
          borderBottom: "2px solid #000",
          display: "inline-block",
          mb: 3,
        }}
      >
        Compétences
      </Typography>

      {/* Liste des compétences */}
      <Grid container spacing={2}>
        {resumeData?.skills && resumeData?.skills.length > 0 ? (
          resumeData?.skills.map((skill, index) => (
            <Grid item key={index}>
              <Chip
                label={skill}
                icon={<StarIcon />}
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  //backgroundColor: "#000",
                  color: "#000",
                  "& .MuiChip-icon": {
                    color: "#FFD700",
                  },
                }}
              />
            </Grid>
          ))
        ) : (
          <Typography variant="body1" color="textSecondary">
            Aucune compétence renseignée. Ajoutez vos compétences pour les mettre en avant.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default SkillsDetailPreview;
