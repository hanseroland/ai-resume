import React from 'react'
import { Box, Typography } from '@mui/material'

function FormHead({title, description}) {


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
                    {title}
                </Typography>
                <Typography
                    variant="body1"
                    color="textSecondary"
                >
                    {description}
                </Typography>
           </Box>

    </Box>
  )
}

export default FormHead