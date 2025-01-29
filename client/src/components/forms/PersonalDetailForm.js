import React, { useContext } from 'react'
import { ResumeInfoContext } from '../../context/ResumeInfoContext'
import { Box, Card, Typography } from '@mui/material'

function PersonalDetailForm() {

    const {resumeData,setResumeData} = useContext(ResumeInfoContext)
  return (
    <Box>
           <Box
            sx={{
                maxWidth: 800,
                mx: "auto",
                p:2,
                border: "1px solid #e0e0e0",
                borderRadius: 4,
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#ffffff",
                
              }}
           >
                {/* Titre du formulaire */}
                <Typography
                    variant="h6"
                    fontWeight="bold"
                    color="textPrimary"
                    gutterBottom
                >
                    Détails Personnels
                </Typography>
                <Typography
                    variant="body1"
                    color="textSecondary"
                >
                   Commencez avec vos informations basiques
                </Typography>
           </Box>

    </Box>
  )
}

export default PersonalDetailForm