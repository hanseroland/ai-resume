import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import ResumeFormSection from "../components/sections/ResumeFormSection";
import ResumePreview from "../components/ui/preview/ResumePreview";
import { ResumeInfoContext } from "../context/ResumeInfoContext";
import { fakeResume } from "../data/fakeResume";

function EditResume() {
  const params = useParams();
  const [resumeData, setResumeData] = useState();

  useEffect(() => {
    setResumeData(fakeResume);
  }, []);

  return (
    <ResumeInfoContext.Provider value={{ resumeData }}>
      <Box py={2}>
        <Grid container spacing={2}>
          {/* Formulaire */}
          <Grid size={{ md: 6, xs: 12 }}>
            <ResumeFormSection />
          </Grid>

          {/* Aperçu avec barre de défilement */}
          <Grid size={{ md: 6, xs: 12 }}>
            <Box
              sx={{
                maxHeight: "calc(100vh - 64px)", // Ajuste la hauteur maximale à la taille de la fenêtre
                overflowY: "auto", // Barre de défilement verticale si le contenu dépasse
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                p: 2, // Padding interne pour éviter que le contenu touche les bords
                backgroundColor: "#ffffff",
              }}
            >
              <ResumePreview />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ResumeInfoContext.Provider>
  );
}

export default EditResume;
