import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Box, Button, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';


const ResumeNameForm = ({setOpenDialog, setRefreshTrigger }) => {


  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Le nom est obligatoire').trim(),
  });


  // Soumission du formulaire
  const handleSubmit = async (values, { resetForm }) => {
    setOpenDialog(false)
    /*try {
      const newValues = {
        name: values.name,
      };
     
      const response = await CreateResume(newValues)
      if (response.success) {
          console.log("oui success")
          setRefreshTrigger(prev => !prev);
      }
      resetForm()
      setOpenDialog(false)
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
      alert('Une erreur est survenue.');
    }*/
  };



  return (
    <Box >
      <Formik
        initialValues={{
            name: '',
           
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={2}>
            
              <Grid item size={{ xs: 12, md: 12 }}>
                <Field
                  as={TextField}
                  fullWidth
                  label="Titre du CV"
                  name="name"
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
              </Grid>
             
             

            </Grid>
            <Box mt={3} display="flex" justifyContent="flex-end">
             <Button variant="outlined"  color="inherit" autoFocus onClick={()=>setOpenDialog(false)}>
                 Annuler
              </Button>
              <Button sx={{marginLeft:'5px'}} variant="contained" color="primary" type="submit">
                Créer
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ResumeNameForm;
