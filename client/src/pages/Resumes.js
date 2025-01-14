import React, { useEffect, Suspense } from 'react'
import { Alert, Box, CircularProgress, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
import AddResumeBtn from '../components/ui/AddResumeBtn';
import { useSelector } from 'react-redux';
import { GetUserResumes } from '../api/resumes';
import ResumeCard from '../components/ui/cards/ResumeCard';


function Resumes() {

  const { currentUser } = useSelector(state => state.users); //récupérer les infos de l'utilisateur dans l'état redux

  const [resumeCreated, setResumeCreated] = React.useState(false)// afficher la notification de CV créé

  const [userResumes, setUserResumes] = React.useState([]); // Stocke les CV de l'utilisateur
  const [loading, setLoading] = React.useState(true); // Indique si les données sont en cours de chargement
  const [error, setError] = React.useState(null); // Stocke les erreurs éventuelles

  // Fonction pour récupérer les CV
  const fetchResumes = async () => {
    try {

      const response = await GetUserResumes(currentUser._id);
      setUserResumes(response.data || []); // Met à jour les CV
    } catch (err) {
      console.error('Erreur lors de la récupération des CV :', err);
      setError('Une erreur est survenue lors de la récupération des CV.');
    } finally {
      setLoading(false); // Indique que le chargement est terminé
    }
  };

  // useEffect pour récupérer les CV au montage du composant
  useEffect(() => {
    fetchResumes();
  }, [resumeCreated]); // Relance la récupération des CV lorsqu'un nouveau CV est créé



  return (
    <Box py={2}>

      <Box >
        <Typography fontWeight="bold" component="h2" variant="h4"> Mes CV </Typography>
        <Typography variant="body1">
          Débuter la création de votre CV avec l'IA
        </Typography>
      </Box>
      {
        resumeCreated && (
          <Box py={1} >
            <Alert
              severity="success"
              onClose={() => { setResumeCreated(false) }}
            >
              CV créé
            </Alert>
          </Box>

        )
      }


      <Grid py={2} container spacing={2}>
        <Grid size={{ lg: 3, md: 4, sm: 4, xs: 6 }}>
          <AddResumeBtn
            setResumeCreated={setResumeCreated}
            resumeCreated={resumeCreated}
          />
        </Grid>
        <Suspense
          fallback={
            <Box display="flex" justifyContent="center" py={4}>
              <CircularProgress />
            </Box>
          }
        >

          {loading ? (
            <Box display="flex" justifyContent="center" py={4}>
              <CircularProgress />
            </Box>
          ) : error ? (
            <Alert sx={{height:"40px"}} severity="error">{error}</Alert>
          ) : (
            <>
              {userResumes.map((resume) => (
                <Grid key={resume._id} item lg={3} md={4} sm={6} xs={12}>
                   <ResumeCard resume={resume} />
                </Grid>
              ))}
            </>
          )
          }
        </Suspense>

      </Grid>

    </Box>
  )
}

export default Resumes