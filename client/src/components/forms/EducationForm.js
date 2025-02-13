import React, { useContext, useState } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import * as Yup from 'yup';
import { ResumeInfoContext } from '../../context/ResumeInfoContext';
import Grid from "@mui/material/Grid2";
import { Add, Delete } from '@mui/icons-material';
import FormHead from '../ui/formsHead/FormHead';
import { UpdateEducations } from '../../api/resumes';
import { SetCurrentResume } from '../../redux/slices/resumeSlice';
import { useDispatch } from 'react-redux';


const EducationForm = ({ enableNext, resumeId }) => {
    const { resumeData, setResumeData } = useContext(ResumeInfoContext);
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    

    // Valeurs initiales avec les expériences déjà présentes dans le contexte
    const initialValues = {
        educations: Array.isArray(resumeData?.educations) && resumeData.educations.length > 0
        ? resumeData.educations : [
            {
                degree: "",
                schoolName: "",
                city: "",
                country: "",
                startDate: "",
                endDate: "",
            }
        ]
    };

    // Schéma de validation avec Yup
    const validationSchema = Yup.object().shape({
        educations: Yup.array().of(
            Yup.object().shape({
                degree: Yup.string().required("Le titre du dipôme requis"),
                schoolName: Yup.string().required("Le nom de l'établissement est requis"),
                city: Yup.string().required("La ville est requise"),
                country: Yup.string().required("L'état/pays est requis"),
                startDate: Yup.date().required("La date de début est requise"),
                endDate: Yup.date().required("La date de fin est requise"),
              
            })
        )
    });

    // Fonction pour gérer la mise à jour en temps réel du contexte et du formulaire
    const handleChangeEducation = (e, index, setFieldValue) => {
        const { name, value } = e.target;
        const fieldName = `educations.${index}.${name}`;

        // Mise à jour Formik
        setFieldValue(fieldName, value);

        // Mise à jour immédiate du contexte `resumeData`
        setResumeData((prev) => {
            const updatedEducations = [...prev.educations];
            updatedEducations[index] = {
                ...updatedEducations[index],
                [name]: value
            };

            return { ...prev, educations: updatedEducations };
        });
    };

    const handleRemoveEducation = (index) => {
        setResumeData((prev) => {
            const updatedEducations = [...prev.educations];
            updatedEducations.splice(index, 1); // Supprime l'expérience à l'index donné
            return { ...prev, educations: updatedEducations };
        });
    };

     const handleSubmit = async (values, { setSubmitting }) => {
            setIsLoading(true);
            console.log("values edu",values)
            const response = await UpdateEducations(resumeId, values);
    
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
        <Box sx={{ maxWidth: 800, mx: 'auto', p: 2 }}>
             <Box mb={2}>
                <FormHead
                    title="Educations"
                    description="Ajouter votre parcours éductif"
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
                        <FieldArray name="educations">
                            {({ push, remove }) => {
                                const educations = values.educations;
                                const canAddNewEducation = 
                                !errors.educations ||
                                !errors.educations[educations.length - 1];

                                return (
                                    <div>
                                        {educations.map((education, index) => (
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
                                                <Typography variant="h6" gutterBottom>
                                                    Education {index + 1}
                                                </Typography>
                                                <Grid container spacing={2}>
                                                    <Grid size={{ xs: 12, sm: 6 }}>
                                                     <span>Diplôme obtenu</span>
                                                        <Field
                                                            as={TextField}
                                                            name={`experiences.${index}.degree`}
                                                            //label="Diplôme obtenu"
                                                            fullWidth
                                                            variant="outlined"
                                                            onChange={(e) => handleChangeEducation(e, index, setFieldValue)}
                                                        />
                                                    </Grid>
                                                    <Grid size={{ xs: 12, sm: 6 }}>
                                                    <span>Etablissement fréquenté</span>
                                                        <Field
                                                            as={TextField}                                                           
                                                            name={`experiences.${index}.schoolName`}
                                                            //label="Etablissement fréquenté"
                                                            fullWidth
                                                            variant="outlined"
                                                            onChange={(e) => handleChangeEducation(e, index, setFieldValue)}
                                                        />
                                                    </Grid>
                                                    <Grid size={{ xs: 12, sm: 6 }}>
                                                    <span>Ville</span>
                                                        <Field
                                                            as={TextField}
                                                            name={`experiences.${index}.city`}
                                                           // label="Ville"
                                                            fullWidth
                                                            variant="outlined"
                                                            onChange={(e) => handleChangeEducation(e, index, setFieldValue)}
                                                        />
                                                    </Grid>
                                                    <Grid size={{ xs: 12, sm: 6 }}>
                                                    <span>Pays</span>
                                                        <Field
                                                            as={TextField}
                                                            name={`experiences.${index}.country`}
                                                            //label="Pays"
                                                            fullWidth
                                                            variant="outlined"
                                                            onChange={(e) => handleChangeEducation(e, index, setFieldValue)}
                                                        />
                                                    </Grid>

                                                    <Grid size={{ xs: 12, sm: 6 }}>
                                                        <span>Date de début</span>
                                                        <Field
                                                            as={TextField}
                                                            fullWidth
                                                            id="startDate"
                                                            name={`experiences.${index}.startDate`}
                                                            type="date"
                                                            variant="outlined"
                                                            onChange={(e) => handleChangeEducation(e, index, setFieldValue)}
                                                        />
                                                    </Grid>
                                                    <Grid size={{ xs: 12, sm: 6 }}>
                                                        <span>Date de fin</span>
                                                        <Field
                                                            as={TextField}
                                                            fullWidth
                                                            id="endDate"
                                                            name={`experiences.${index}.endDate`}
                                                            type="date"
                                                            variant="outlined"
                                                            onChange={(e) => handleChangeEducation(e, index, setFieldValue)}
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
                                                                handleRemoveEducation(index);
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
                                                disabled={!canAddNewEducation}
                                                onClick={() => push(initialValues.educations[0])}
                                                sx={{
                                                    textTransform: 'none'
                                                }}
                                            >
                                                Ajouter une formation
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

export default EducationForm;
