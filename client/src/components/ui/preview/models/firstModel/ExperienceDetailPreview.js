import React, { memo } from "react";
import { Box, Typography, Divider, Stack } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import Grid from '@mui/material/Grid2';


const ExperienceDetailPreview = memo(({ resumeData }) => {
  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        p: 3,
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
          mb: 3,
        }}
      >
        Expériences Professionnelles
      </Typography>

      <Divider sx={{ my: 2 }} />

      {/* Liste des expériences */}
      {resumeData?.experiences && resumeData?.experiences.length > 0 ? (
        resumeData?.experiences.map((experience, index) => (
          <Box key={index} mb={2}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={10}>
                <Stack spacing={1}>
                 
                    <Typography variant="h6" fontWeight="bold">
                      {/* Icône ou Date */}
                      <span>
                        <WorkIcon
                          sx={{
                            fontSize:20,
                            color: "#000",
                          }}
                        />
                      </span>
                      {"  "}
                      {experience?.jobTitle || "Titre du poste"}
                    </Typography>
                
                 
                  <Typography variant="body1" color="textSecondary">
                    {experience?.companyName || "Nom de l'entreprise"} |{" "}
                    {experience?.city && experience?.country
                      ? `${experience?.city}, ${experience?.country}`
                      : "Lieu non spécifié"}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {`De ${new Date(experience?.startDate).toLocaleDateString(
                      "fr-FR"
                    )} à ${
                      experience?.endDate
                        ? new Date(experience?.endDate).toLocaleDateString("fr-FR")
                        : "Aujourd'hui"
                    }`}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, textAlign: "justify" }}>
                    {experience?.workSummary ||
                      "Aucune description fournie pour cette expérience."}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        ))
      ) : (
        <Typography variant="body1" color="textSecondary">
          Aucune expérience professionnelle renseignée. Ajoutez vos expériences pour les afficher ici.
        </Typography>
      )}
    </Box>
  );
});

export default ExperienceDetailPreview;
