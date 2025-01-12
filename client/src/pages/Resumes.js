import React from 'react'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
import AddResumeBtn from '../components/ui/AddResumeBtn';


function Resumes() {
  return (
    <Box py={2}>
      
           <Box >
            <Typography fontWeight="bold" component="h2" variant="h4" >Mes CV</Typography>
            <Typography variant="body1">
              Débuter la création de votre CV avec l'IA
            </Typography>
           </Box>
          <Grid py={2}  container spacing={2}>
                <Grid size={{lg:3,md:4,sm:4,xs:6}}>
                  <AddResumeBtn/>
                </Grid>
          </Grid>
     
    </Box>
  )
}

export default Resumes