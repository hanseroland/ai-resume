import React, { useContext, useEffect, useState } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import * as Yup from 'yup';
import { ResumeInfoContext } from '../../context/ResumeInfoContext';
import Grid from "@mui/material/Grid2";
import { Add, Delete } from '@mui/icons-material';
import FormHead from '../ui/formsHead/FormHead';
import { UpdateExperiences } from '../../api/resumes';
import { SetCurrentResume } from '../../redux/slices/resumeSlice';
import { useDispatch } from 'react-redux';


const ExperienceForm = ({ enableNext, resumeId }) => {
    const { resumeData, setResumeData } = useContext(ResumeInfoContext);
    const dispatch = useDispatch();

    console.log("resumeData Exerience",resumeData)
    const [isLoading, setIsLoading] = useState(false);
    

    // Valeurs initiales avec les expériences déjà présentes dans le contexte
   /* const initialValues = {
        experiences: Array.isArray(resumeData?.experiences) && resumeData.experiences.length > 0
        ? resumeData.experiences : [
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
    };*/

    const [initialValues, setInitialValues] = useState({
        experiences: [
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
    });

    useEffect(() => {
        if (Array.isArray(resumeData?.experiences) && resumeData.experiences.length > 0) {
            setInitialValues({ experiences: resumeData.experiences });
        }
    }, [resumeData?.experiences]);

    // Schéma de validation avec Yup
    const validationSchema = Yup.object().shape({
        experiences: Yup.array().of(
            Yup.object().shape({
                jobTitle: Yup.string().required("Le titre est requis"),
                companyName: Yup.string().required("Le nom de l'entreprise est requis"),
                city: Yup.string().required("La ville est requise"),
                country: Yup.string().required("L'état/région est requis"),
                startDate: Yup.date().required("La date de début est requise"),
                endDate: Yup.date().required("La date de fin est requise"),
                workSummary: Yup.string().required("Le résumé du travail est requis")
            })
        )
    });

    // Fonction pour gérer la mise à jour en temps réel du contexte et du formulaire
    const handleChangeExperience = (e, index, setFieldValue) => {
        const { name, value } = e.target;
        const fieldName = `experiences.${index}.${name}`;

        // Mise à jour Formik
        setFieldValue(fieldName, value);

        // Mise à jour immédiate du contexte `resumeData`
        setResumeData((prev) => {
            const updatedExperiences = [...prev.experiences];
            updatedExperiences[index] = {
                ...updatedExperiences[index],
                [name]: value
            };

            return { ...prev, experiences: updatedExperiences };
        });
    };

    const handleRemoveExperience = (index) => {
        setResumeData((prev) => {
            const updatedExperiences = [...prev.experiences];
            updatedExperiences.splice(index, 1); // Supprime l'expérience à l'index donné
            return { ...prev, experiences: updatedExperiences };
        });
    };


       const handleSubmit = async (values, { setSubmitting }) => {
            setIsLoading(true);
            const response = await UpdateExperiences(resumeId, values);
    
            if (response.success) {
                dispatch(SetCurrentResume(response.data));
                enableNext(true);
            }
            setIsLoading(false);
            setTimeout(() => {
                alert("Détails enregistrés avec succès !");
                setSubmitting(false);
            }, 1000);
      };

    return (
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            <Box mb={2}>
                <FormHead
                    title="Expériences Professionnelles"
                    description="Ajouter des expériences"
                />
            </Box>
           

            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, errors, touched, setFieldValue }) => (
                    <Form>
                        <FieldArray name="experiences">
                            {({ push, remove }) => {
                                const experiences = values.experiences;
                                //const lastExperience = experiences[experiences.length - 1];
                                const canAddNewExperience = 
                                !errors.experiences ||
                                !errors.experiences[experiences.length - 1];

                                return (
                                    <div>
                                        {experiences.map((experience, index) => (
                                            <Box
                                                key={index}
                                                sx={{
                                                    border: '1px solid #ccc',
                                                    borderRadius: 2,
                                                    p: 2,
                                                    mb: 2,
                                                    backgroundColor: '#fafafa'
                                                }}
                                            >
                                                
                                                <Grid container spacing={2}>
                                                    <Grid size={{ xs: 12, sm: 6 }}>
                                                        <Field
                                                            as={TextField}
                                                            name="jobTitle"
                                                            label="Titre du poste"
                                                            fullWidth
                                                            variant="outlined"
                                                            onChange={(e) => handleChangeExperience(e, index, setFieldValue)}
                                                        />
                                                    </Grid>
                                                    <Grid size={{ xs: 12, sm: 6 }}>
                                                        <Field
                                                            as={TextField}
                                                            name="companyName"
                                                            label="Nom de l'entreprise"
                                                            fullWidth
                                                            variant="outlined"
                                                            onChange={(e) => handleChangeExperience(e, index, setFieldValue)}
                                                        />
                                                    </Grid>
                                                    <Grid size={{ xs: 12, sm: 6 }}>
                                                        <Field
                                                            as={TextField}
                                                            name="city"
                                                            label="Ville"
                                                            fullWidth
                                                            variant="outlined"
                                                            onChange={(e) => handleChangeExperience(e, index, setFieldValue)}
                                                        />
                                                    </Grid>
                                                    <Grid size={{ xs: 12, sm: 6 }}>
                                                        <Field
                                                            as={TextField}
                                                            name="country"
                                                            label="Pays"
                                                            fullWidth
                                                            variant="outlined"
                                                            onChange={(e) => handleChangeExperience(e, index, setFieldValue)}
                                                        />
                                                    </Grid>

                                                    <Grid size={{ xs: 12, sm: 6 }}>
                                                        <span>Date de début</span>
                                                        <Field
                                                            as={TextField}
                                                            fullWidth
                                                            id="startDate"
                                                            name="startDate"
                                                            type="date"
                                                            variant="outlined"
                                                            onChange={(e) => handleChangeExperience(e, index, setFieldValue)}
                                                        />
                                                    </Grid>
                                                    <Grid size={{ xs: 12, sm: 6 }}>
                                                        <span>Date de fin</span>
                                                        <Field
                                                            as={TextField}
                                                            fullWidth
                                                            id="endDate"
                                                            name="endDate"
                                                            type="date"
                                                            variant="outlined"
                                                            onChange={(e) => handleChangeExperience(e, index, setFieldValue)}
                                                        />
                                                    </Grid>
                                                    <Grid size={{ xs: 12, sm: 12 }}>
                                                        <Field
                                                            as={TextField}
                                                            fullWidth
                                                            id="workSummary"
                                                            name="workSummary"
                                                            label="Descriptiion de l'expérience"
                                                            variant="outlined"
                                                            multiline
                                                            onChange={(e) => handleChangeExperience(e, index, setFieldValue)}
                                                        />
                                                    </Grid>

                                                </Grid>
                                                {index > 0 && (
                                                    <Box mt={2} textAlign="right">
                                                        <Button
                                                            variant="outlined"
                                                            color="error"
                                                            onClick={() => {
                                                                remove(index);
                                                                handleRemoveExperience(index);
                                                            }}
                                                            startIcon={<Delete />}
                                                            sx={{
                                                                textTransform: 'none'
                                                            }}
                                                        >
                                                            Supprimer
                                                        </Button>
                                                    </Box>
                                                )}
                                            </Box>
                                        ))}
                                

                                        <Box mt={2} display="flex" gap={1} justifyContent="space-between">
                                        <Button
                                                variant="contained"
                                                color="primary"
                                                startIcon={<Add />}
                                                disabled={!canAddNewExperience}
                                                onClick={() => push(initialValues.experiences[0])}
                                                sx={{
                                                    textTransform: 'none'
                                                }}
                                            >
                                                Ajouter une expérience
                                            </Button>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                disabled={isLoading}
                                                sx={{ textTransform: 'none' }}
                                            >
                                                {isLoading ? <CircularProgress size={20} sx={{ color: 'white' }} /> : "Enregistrer"}
                                            </Button>
                                        </Box>
                                    </div>
                                );
                            }}
                        </FieldArray>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

export default ExperienceForm;
