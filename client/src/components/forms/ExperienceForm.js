import { useState, useEffect, useContext } from "react";
import { Button, TextField, Box, Typography, IconButton, CircularProgress } from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { ResumeInfoContext } from "../../context/ResumeInfoContext";
import Grid from "@mui/material/Grid2";
import RichTextEditor from "../RichTextEditor";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { GenerateExperienceList } from "../../api/resumes";
import SelectionDialog from "../ui/dialogs/SelectionDialog";
import DescriptionList from "../ui/list/DesciptionList";



const formField = {
  jobTitle: "",
  companyName: "",
  city: "",
  country: "",
  startDate: "",
  endDate: "",
  workSummary: ""
}

export default function ExperienceForm() {

  const { resumeData, setResumeData } = useContext(ResumeInfoContext);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const [loading, setLoading] = useState(false);

  const [generatedExpList, setGeneratedExpList] = useState('');

  const [openDialog, setOpenDialog] = useState(false);

  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(null);



  const [experienceList, setExperienceList] = useState([
    formField
  ]);



  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toISOString().split("T")[0]; // Convertit en "YYYY-MM-DD"
  };



  const handleSubmit = async (values) => {
    setLoading(true);
    try {

      alert("Expériences mises à jour avec succès");
    } catch (error) {
      alert("Erreur lors de la mise à jour");
    }
    setLoading(false);
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


  const handleGenerateExpList = async (index) => {

    setIsLoading(true)

    /*const prompt1 = `Génère des résumés de profil professionnel de 300 caractères,`+ 
    `clair et concis pour un CV, dont le titre est ${resumeData?.title || resumeData?.personalInfo?.jobTitle}.`;*/

    const prompt2 = `Titre du CV : ${resumeData?.title}, génère une description sous forme de liste <ul> ayant entre ` +
      ` 4-5 points pour l'expérience en tant que ${experienceList[index]?.jobTitle} dans la société ${experienceList[index]?.companyName}`

    const response = await GenerateExperienceList(prompt2)

    if (response.data) {
      setGeneratedExpList(response.data);
      setOpenDialog(true);
      setSelectedExperienceIndex(index); // Stocke l'index de l'expérience concernée

    }
    setIsLoading(false)

  };

  const handleSelectGeneratedExp = (exp) => {
    if (selectedExperienceIndex !== null) {
      const newEntries = [...experienceList];
      newEntries[selectedExperienceIndex].workSummary = exp; // Insère le texte généré
      setExperienceList(newEntries);
      setOpenDialog(false); // Ferme la boîte de dialogue
    }
  };

  

  useEffect(() => {
    setResumeData({
      ...resumeData,
      experiences: experienceList
    })
    console.log("exp", resumeData)
  }, [experienceList])


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

              <Box mt={1} mb={1} display="flex" justifyContent="space-between">
                <span>Description</span>
                <Button
                  variant="contained"
                  color="secondary"
                  disabled={isLoading}
                  startIcon={<AutoFixHighIcon />}
                  sx={{ textTransform: 'none' }}
                  //onClick={() => handleGenerateSummary(setFieldValue)}
                  onClick={()=>handleGenerateExpList(index)}
                >
                  {isLoading ? <CircularProgress size={20} sx={{ color: 'white' }} /> : "Générer IA"}
                </Button>
              </Box>
              <RichTextEditor
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
     
      <SelectionDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      >
        <DescriptionList
          textes={generatedExpList}
          onSelect={(exp) => {
            if (selectedExperienceIndex !== null) {
              handleRichTextEditorChange(
                { target: { value: exp } }, 
                "workSummary", 
                selectedExperienceIndex
              );
              setOpenDialog(false); // Fermer la boîte de dialogue après sélection
            }
          }}
        
        />
      </SelectionDialog>

    </Box>
  );
}

