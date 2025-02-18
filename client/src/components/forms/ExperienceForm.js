import { useState, useEffect, useContext } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { Button, TextField, Box, Typography, IconButton } from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { ResumeInfoContext } from "../../context/ResumeInfoContext";
import Grid from "@mui/material/Grid2";
import RichTextEditor from "../RichTextEditor";


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

    const [experienceList, setExperienceList] = useState([
      formField
    ]);


  console.log(resumeData)

  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toISOString().split("T")[0]; // Convertit en "YYYY-MM-DD"
};

const initialValues = {
    experiences: resumeData?.experiences?.length > 0
        ? resumeData.experiences.map(exp => ({
            ...exp,
            startDate: formatDate(exp.startDate),
            endDate: formatDate(exp.endDate),
        }))
        : [
            {
                jobTitle: "",
                companyName: "",
                city: "",
                country: "",
                startDate: "",
                endDate: "",
                workSummary: ""
            }
        ]
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
        const { name, value } = e.target;
        const fieldName = `experiences.${index}.${name}`;
    
       // setFieldValue(fieldName, value); 
    
        setResumeData((prev) => {
            const updatedExperiences = [...prev.experiences];
            updatedExperiences[index] = {
                ...updatedExperiences[index],
                [name]: value
            };
            return { ...prev, experiences: updatedExperiences };
        });
    };
    

  return (
    <Box p={3} bgcolor="white" boxShadow={3} borderRadius={2} maxWidth={600} mx="auto">
      <Typography variant="h6" fontWeight="bold" mb={2}>Gérer les expériences</Typography>
     
     
        
                <>
                  {experienceList.map((item, index) => (
                    <Grid container spacing={2}>
                       
                         <Grid size={{ xs: 12, sm: 6 }}>
                           <span>Titre du poste</span> 
                           <TextField 
                                fullWidth 
                                //label="Titre du poste" 
                               
                                onChange={(e) => handleChangeExperience(index, e)} 
                                margin="dense" 
                           />

                         </Grid>
                         <Grid size={{ xs: 12, sm: 6 }}>
                           <span>Nom de l'entreprise</span> 
                           <TextField 
                                fullWidth 
                                //label="Titre du poste" 
                              
                                onChange={(e) => handleChangeExperience(index, e)} 
                                margin="dense" 
                           />

                         </Grid>
                         <Grid size={{ xs: 12, sm: 6 }}>
                           <span>Date de début</span> 
                           <TextField 
                                fullWidth 
                                //label="Titre du poste" 
                               
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
                                
                                onChange={(e) => handleChangeExperience(index, e)} 
                                margin="dense" 
                                type="date"
                           />

                         </Grid>
                         <Grid size={{ xs: 12, sm: 12 }}>
                           <span>Description</span> 
                           <RichTextEditor/>

                         </Grid>
                         <Box  textAlign="right" >
                              <IconButton  color="error"><Delete /></IconButton>
                         </Box>
                            
                      
                    </Grid>
                   
                  ))}

               
                </>
            
            <Box mt={3}  display="flex" justifyContent="space-between" >
                <Button 
                  startIcon={<Add />} 
                 // onClick={() => push({ jobTitle: "", companyName: "", startDate: "", enDate: "", description: "" })} 
                  variant="outlined" 
                  color="primary"
                  sx={{textTransform:'none'}}
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

