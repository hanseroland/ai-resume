import React, { useContext, useEffect, useState } from 'react'
import { ResumeInfoContext } from '../../context/ResumeInfoContext'
import { Box, TextField, Button, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormHead from '../ui/formsHead/FormHead'
import Grid from "@mui/material/Grid2";
import { UpdateSummaryInfo } from '../../api/resumes';
import { useDispatch } from 'react-redux';
import { SetCurrentResume } from '../../redux/slices/resumeSlice';
import { Cached } from '@mui/icons-material';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';


function SummaryForm({enableNext,resumeId}) {

  const {resumeData,setResumeData} = useContext(ResumeInfoContext)
  const [isLoading,setIsLoading] = useState(false)
  const dispatch = useDispatch();


    // Vérifier si resumeData.personalInfo est défini avant d'accéder aux valeurs
    const [initialValues, setInitialValues] = useState({
      summary: "",
    });

   // Schéma de validation avec Yup
   const validationSchema = Yup.object({
    summary: Yup.string().required("Résumé de votre profil"),
  });

   


    useEffect(() => {
      if (resumeData && resumeData.summary) {
        setInitialValues({
          summary: resumeData?.summary || "",
        });
      }
    }, [resumeData]);
  


     // Mise à jour du contexte dès qu'un champ change (sans attendre validation)
      const handleChange = (e, setFieldValue) => {
        enableNext(false)
        const { name, value } = e.target;
        setFieldValue(name, value);
        setResumeData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
        
    const handleSubmit = async (values, { setSubmitting }) => {
      //console.log("ResumeId :", resumeId);
      //console.log("Données soumises :", values);
      setIsLoading(true)
      
      const response = await UpdateSummaryInfo(resumeId,values)
      
       if (response.success) {
           dispatch(SetCurrentResume(response.data));
           enableNext(true)
       }
       setIsLoading(false)
      setTimeout(() => {
        alert("Détails enregistrés avec succès !");
        setSubmitting(false);
      }, 1000);
    };


  return (
    <Box>
      <FormHead
        title="Résumé"
        description="Ajouter un résumé de votre profil"
      />
          
 <Box
      sx={{
        maxWidth: 800,
        mx: "auto",
        p: 4,
        mt:2,
        border: "1px solid #e0e0e0",
        borderRadius: 4,
        
      }}
    >
     {resumeData ? (
      <Formik
        key={resumeData.summary} // Remontage forcé lorsque le résumé change
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting,setFieldValue }) => (
          <Form>
            <Grid container spacing={2}>
              {/* Nom complet */}
              <Grid size={{xs:12}}>
                <Field
                  as={TextField}
                  fullWidth
                  name="summary"
                  label="Résumé"
                  variant="outlined"
                  multiline      // Ajoute la prise en charge du texte multiligne
                  rows={7}       // Définit le nombre de lignes affichées (optionnel)
                  onChange={(e) => handleChange(e, setFieldValue)}
                  error={touched.summary && Boolean(errors.summary)}
                  helperText={touched.summary && errors.summary}
                />
              </Grid>

            </Grid>

            {/* Bouton de soumission */}
            <Box mt={3} display="flex" gap={1} justifyContent="flex-end" textAlign="right">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isLoading}
                sx={{textTransform:'none'}}
              >
                {isLoading ? <Cached/> :"Enregistrer"}
              </Button>
              <Button
                variant="contained"
                color="warning"
                disabled={isLoading}
                startIcon={<AutoFixHighIcon/>}
                sx={{textTransform:'none'}}
                
              >
                Généré avec IA
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
       ) : (
        <Typography variant="body1" color="textSecondary" textAlign="center">
          Chargement des données...
        </Typography>
      )}
    </Box>
    </Box>
  )
}

export default SummaryForm