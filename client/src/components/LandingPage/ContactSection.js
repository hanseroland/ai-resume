import React from "react";
import { Box, Typography, TextField, Button, } from "@mui/material";
import { motion } from "framer-motion";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Grid from '@mui/material/Grid2';


const ContactSection = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Veuillez entrer votre nom"),
    email: Yup.string().email("Email invalide").required("Veuillez entrer votre email"),
    subject: Yup.string().required("Veuillez entrer le sujet"),
    message: Yup.string().required("Veuillez entrer votre message"),
  });

  return (
    <Box id="contact"
      sx={{
        py: 8, 
        px: 4,
        background: "backgroound.default", // Dégradé bleu à violet
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Box
        component={motion.div}
        sx={{
          display: "flex", // Utilisation de flexbox pour centrer verticalement
          flexDirection: "column",
          justifyContent: "center", // Centre verticalement
          maxWidth: "800px",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
       
       <Typography variant="h2" 
        sx={{ 
          marginBottom: "2rem", 
          fontWeight: "bold", 
          fontSize:{md:'45px',xs:'35px'},
          textAlign:'center'
         }}
        >
        Formulaire de Contact
      </Typography>
        <Grid container spacing={1}>
         
          <Grid size={{ xs: 12, md: 12 }}>
            {/* Contact Form */}
            <Box sx={{ p:2, flexGrow: 1 }}>
              <Formik
                initialValues={{ name: "", email: "", subject: "", message: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                  console.log(values);
                  resetForm();
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Grid container spacing={2}>
                      <Grid
                        size={{ xs: 12, md: 6 }}
                      >
                        <Field
                          as={TextField}
                          fullWidth
                          label="Votre Nom"
                          name="name"
                          variant="outlined"
                          error={touched.name && Boolean(errors.name)}
                          helperText={touched.name && errors.name}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Field
                          as={TextField}
                          fullWidth
                          label="Votre Email"
                          name="email"
                          variant="outlined"
                          error={touched.email && Boolean(errors.email)}
                          helperText={touched.email && errors.email}
                        />
                      </Grid>
                      <Grid item size={{ xs: 12 }}>
                        <Field
                          as={TextField}
                          fullWidth
                          label="Sujet"
                          name="subject"
                          variant="outlined"
                          error={touched.subject && Boolean(errors.subject)}
                          helperText={touched.subject && errors.subject}
                        />
                      </Grid>
                      <Grid item size={{ xs: 12 }}>
                        <Field
                          as={TextField}
                          fullWidth
                          label="Message"
                          name="message"
                          variant="outlined"
                          multiline
                          rows={4}
                          error={touched.message && Boolean(errors.message)}
                          helperText={touched.message && errors.message}
                        />
                      </Grid>
                    </Grid>
                    <Box mt={3} textAlign="right">
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        component={motion.button}
                        whileHover={{ scale: 1.05 }}
                        sx={{
                          background: "linear-gradient(to right, #1388d5, #80b1d0)", // Dégradé
                          color: "text.primary",
                          fontWeight: "bold",
                          padding: { xs: "4px 8px", md: "4px 8px", sm: "4px 8px" },
                          borderRadius: "8px",
                          textTransform: "none",
                          fontSize:{xs:'12px',md:'16px',sm:'16px'},
                          "&:hover": {
                            background: "linear-gradient(to left,  #1388d5, #80b1d0)",
                          },
                        }}
                      >
                        Envoyer le Message
                      </Button>
                    </Box> 
                  </Form>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactSection;
