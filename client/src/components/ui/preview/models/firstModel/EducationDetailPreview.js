import React from "react";
import { Box, Typography, Divider, Stack, } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import Grid from '@mui/material/Grid2';


const EducationDetailPreview = ({ resumeData }) => {
  return (
    <Box
      sx={{
        maxWidth: 800,
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
          pb: 0.5,
          mb:2,
        }}
      >
        Parcours Éducatif
      </Typography>

      <Divider sx={{ my: 2 }} />

      {/* Liste des parcours éducatifs */}
      {resumeData?.education && resumeData?.education.length > 0 ? (
        resumeData?.education.map((edu, index) => (
          <Box key={index} mb={4}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={2}>
                {/* Icône ou logo */}
                <SchoolIcon
                  sx={{
                    fontSize: 20,
                    color: "#000",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={10}>
                <Stack spacing={1}>
                  <Typography variant="h6" fontWeight="bold">
                    {edu.degree || "Diplôme non spécifié"}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {edu.schoolName || "Établissement non spécifié"} |{" "}
                    {edu.city && edu.country
                      ? `${edu.city}, ${edu.country}`
                      : "Lieu non spécifié"}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {`De ${new Date(edu.startDate).toLocaleDateString(
                      "fr-FR"
                    )} à ${
                      edu.endDate
                        ? new Date(edu.endDate).toLocaleDateString("fr-FR")
                        : "Aujourd'hui"
                    }`}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        ))
      ) : (
        <Typography variant="body1" color="textSecondary">
          Aucun parcours éducatif renseigné. Ajoutez vos diplômes et établissements pour les afficher ici.
        </Typography>
      )}
    </Box>
  );
};

export default EducationDetailPreview;
