import React, { useContext, useEffect, useState } from 'react';
import { ResumeInfoContext } from '../../context/ResumeInfoContext';
import { Box, TextField, Button, Typography, CircularProgress } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormHead from '../ui/formsHead/FormHead';
import Grid from "@mui/material/Grid2";
import { GenerateText, UpdateSummaryInfo } from '../../api/resumes';
import { useDispatch } from 'react-redux';
import { SetCurrentResume } from '../../redux/slices/resumeSlice';
import { Cached } from '@mui/icons-material';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

function SummaryForm({ enableNext, resumeId }) {
    const { resumeData, setResumeData } = useContext(ResumeInfoContext);
    const [isLoading, setIsLoading] = useState(false);
    const [highlight, setHighlight] = useState(false);
    const dispatch = useDispatch();

    const [initialValues, setInitialValues] = useState({
        summary: "",
    });

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

    const handleChange = (e, setFieldValue) => {
        enableNext(false);
        const { name, value } = e.target;
        setFieldValue(name, value);
        setResumeData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        setIsLoading(true);
        const response = await UpdateSummaryInfo(resumeId, values);

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

    const handleGenerateSummary = async (setFieldValue) => {
        try {
            setIsLoading(true);
            const prompt = `Génère un résumé de profil professionnel de 300 caractères, clair et concis pour un CV, dont le titre est ${resumeData?.title || resumeData?.personalInfo?.jobTitle}.`;

            const response = await GenerateText(prompt);

            if (response.success) {
                const generatedSummary = response.data;
                setFieldValue("summary", generatedSummary);
                setResumeData((prev) => ({ ...prev, summary: generatedSummary }));

                // Effet de surbrillance 3 fois
                let flashCount = 0;
                const flashInterval = setInterval(() => {
                    setHighlight((prev) => !prev);
                    flashCount++;
                    if (flashCount >= 6) clearInterval(flashInterval); 
                }, 300);
            } else {
                alert("Erreur lors de la génération du texte par l'IA : " + response.message);
            }
        } catch (error) {
            console.error("Erreur lors de la génération du texte par l'IA :", error);
            alert("Erreur lors de la génération du texte par l'IA.");
        } finally {
            setIsLoading(false);
        }
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
                    mt: 2,
                    border: "1px solid #e0e0e0",
                    borderRadius: 4,
                }}
            >
                {resumeData ? (
                    <Formik
                        key={resumeData.summary}
                        enableReinitialize
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched, isSubmitting, setFieldValue }) => (
                            <Form>
                                <Box mb={2} display="flex" justifyContent="flex-end">
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        disabled={isLoading}
                                        startIcon={<AutoFixHighIcon />}
                                        sx={{ textTransform: 'none' }}
                                        onClick={() => handleGenerateSummary(setFieldValue)}
                                    >
                                        {isLoading ? <CircularProgress size={20} sx={{ color: 'white' }} /> : "Générer IA"}
                                    </Button>
                                </Box>
                                <Grid container spacing={2}>
                                    <Grid size={{ xs: 12 }}>
                                        <Field
                                            as={TextField}
                                            fullWidth
                                            name="summary"
                                            label="Résumé"
                                            variant="outlined"
                                            multiline
                                            rows={7}
                                            onChange={(e) => handleChange(e, setFieldValue)}
                                            error={touched.summary && Boolean(errors.summary)}
                                            helperText={touched.summary && errors.summary}
                                            sx={{
                                                transition: "background-color 0.3s ease",
                                                backgroundColor: highlight ? "#f0f8ff" : "white",
                                            }}
                                        />
                                    </Grid>
                                </Grid>

                                <Box mt={2} display="flex" gap={1} justifyContent="flex-end">
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
    );
}

export default SummaryForm;
