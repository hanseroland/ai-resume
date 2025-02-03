import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import ResumeFormSection from "../components/sections/ResumeFormSection";
import ResumePreview from "../components/ui/preview/ResumePreview";
import { ResumeInfoContext } from "../context/ResumeInfoContext";
import { fakeResume } from "../data/fakeResume";
import { GetOneResume } from "../api/resumes";

function EditResume() {


  const params = useParams();

  
  const [resumeData, setResumeData] = useState();

  const [loading, setLoading] = useState(true); // Indique si les données sont en cours de chargement


  // Fonction pour récupérer le CV
    const fetchCurrentResume = async () => {
      try {
  
        const response = await GetOneResume(params?.resumeId);
        setResumeData(response.data || {}); 
      } catch (err) {
        console.error('Erreur lors de la récupération du CV :', err);
      } finally {
        setLoading(false); // Indique que le chargement est terminé
      }
    };
  
    // useEffect pour récupérer le CV au montage du composant
    useEffect(() => {
      if (params?.resumeId) {
        fetchCurrentResume();
      } else {
        setLoading(false);
      }
    }, []); // Relance la récupération du CV
  
  
  /*useEffect(() => {
    setResumeData(fakeResume);
  }, []);*/





  return (
    <ResumeInfoContext.Provider value={{ resumeData,setResumeData }}>
      <Box py={2}>
        <Grid container spacing={2}>
          {/* Formulaire */}
          <Grid size={{ md: 6, xs: 12 }}>
            <ResumeFormSection 
              resumeId={params?.resumeId}
            />
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
