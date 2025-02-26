import { useState, useEffect, useContext } from "react";
import { Button, TextField, Box, Typography, IconButton } from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { ResumeInfoContext } from "../../context/ResumeInfoContext";
import Grid from "@mui/material/Grid2";
import RichTextEditor from "../RichTextEditor";
import { UpdateExperiences } from "../../api/resumes";
import { SetCurrentResume } from "../../redux/slices/resumeSlice";



const formField = {
  jobTitle: "",
  companyName: "",
  city: "",
  country: "",
  startDate: "",
  endDate: "",
  workSummary: ""
}

export default function ExperienceForm({enableNext, resumeId}) {

  const { resumeData, setResumeData } = useContext(ResumeInfoContext);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);


  const [experienceList, setExperienceList] = useState([
    formField
  ]);



  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toISOString().split("T")[0]; // Convertit en "YYYY-MM-DD"
  };

  // Fonction pour gérer la mise à jour en temps réel du contexte et du formulaire
  const handleChangeExperience = (index, e) => {
    const newEntries = experienceList.slice();
    const { name, value } = e.target;
    newEntries[index][name] = value;
    setExperienceList(newEntries)
  };

  const addNewExperience = () => {
    setExperienceList([...experienceList, formField])
  }

  const RemoveExperience = () => {
    setExperienceList(experienceList => experienceList.slice(0, -1))
  }

  const handleRichTextEditorChange = (e, name, index) => {
    const newEntries = experienceList.slice();
    newEntries[index][name] = e.target.value;
    setExperienceList(newEntries)

  }

   const handleSubmit = async () => {
          loading(true);
          const response = await UpdateExperiences(resumeId, experienceList);
  
          if (response.success) {
              dispatch(SetCurrentResume(response.data));
              enableNext(true);
          }
          setLoading(false);
          setTimeout(() => {
              alert("Détails enregistrés avec succès !");
          }, 1000);
      };

  

  useEffect(() => {
    if (resumeData?.experiences && resumeData?.experiences.length > 0) {
      setExperienceList(resumeData?.experiences);
    }
  }, []);

  useEffect(() => {
    setResumeData((prev) => ({
      ...prev,
      experiences: experienceList,
    }));
  }, [experienceList]);

 

  return (
    <Box p={3} bgcolor="white" boxShadow={3} borderRadius={2} maxWidth={600} mx="auto">
      <Typography variant="h6" fontWeight="bold" mb={2}>Gérer les expériences</Typography>

      <>
        {experienceList.map((item, index) => (
          <Grid container key={index} spacing={2}>

            <Grid size={{ xs: 12, sm: 6 }}>
              <span>Titre du poste</span>
              <TextField
                fullWidth
                //label="Titre du poste" 
                name="jobTitle"
                onChange={(e) => handleChangeExperience(index, e)}
                margin="dense"
              />

            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <span>Nom de l'entreprise</span>
              <TextField
                fullWidth
                //label="Titre du poste" 
                name="companyName"
                onChange={(e) => handleChangeExperience(index, e)}
                margin="dense"
              />

            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <span>Ville</span>
              <TextField
                fullWidth
                //label="Titre du poste" 
                name="city"
                onChange={(e) => handleChangeExperience(index, e)}
                margin="dense"
              />

            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <span>Pays</span>
              <TextField
                fullWidth
                //label="Titre du poste" 
                name="country"
                onChange={(e) => handleChangeExperience(index, e)}
                margin="dense"
              />

            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <span>Date de début</span>
              <TextField
                fullWidth
                //label="Titre du poste" 
                name="startDate"
                onChange={(e) => handleChangeExperience(index, e)}
                margin="dense"
                type="date"
              />

            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <span>Date de fin</span>
              <TextField
                fullWidth
                //label="Titre du poste" 
                name="enDate"
                onChange={(e) => handleChangeExperience(index, e)}
                margin="dense"
                type="date"
              />

            </Grid>
            <Grid size={{ xs: 12, sm: 12 }}>

              <RichTextEditor
                index={index}
                onRichTextEditorChange={(e) => handleRichTextEditorChange(e, 'workSummary', index)}
              />

            </Grid>
            <Box textAlign="right" >
              <IconButton
                color="error"
                onClick={RemoveExperience}
              >
                <Delete />
              </IconButton>
            </Box>


          </Grid>

        ))}


      </>

      <Box mt={3} display="flex" justifyContent="space-between" >
        <Button
          startIcon={<Add />}
          onClick={addNewExperience}
          variant="outlined"
          color="primary"
          sx={{ textTransform: 'none' }}
        >
          Ajouter une expérience
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}>
          {loading ? "Enregistrement..." : "Sauvegarder"}
        </Button>
      </Box>

    </Box>
  );
}

