import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import PersonalDetailForm from '../forms/PersonalDetailForm'
import {  Apps, ArrowLeft, ArrowRight } from '@mui/icons-material'
import SummaryForm from '../forms/SummaryForm'

function ResumeFormSection({resumeId}) {

   const [activeFormIndex, setActiveFormIndex] = useState(5)

   const [enableNext,setEnableNext] = useState(false)

  return (
    <Box>
        {/**Head */}
        <Box
            sx={{
                maxWidth: 800,
                mx: "auto",
                p:2,
                mb:2,
                borderTop: "4px solid rgb(86, 128, 236)",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#ffffff",
                display:'flex',
                justifyContent:'space-between'
              }}
           >
              <Button
                variant="outlined"
                startIcon={<Apps/>}
                 size="small"
                sx={{
                  textTransform:'none'
                }}
              >
                Thèmes
              </Button>  

             <Box
              sx={{
                display:'flex',
                justifyContent:'space-around',
                gap:1
              }}
             >
             {
              activeFormIndex > 1 && 
                <Button
                variant="contained"
                startIcon={<ArrowLeft/>}
                 size="small"
                sx={{
                  textTransform:'none'
                }}
                onClick={()=>setActiveFormIndex(activeFormIndex-1)}
              >
                  Retour
                </Button> 
              
             }
            
             
              <Button
                variant="contained"
                endIcon={<ArrowRight/>}
                size="small"
                sx={{
                  textTransform:'none'
                }}
                disabled={!enableNext}
                onClick={()=>setActiveFormIndex(activeFormIndex+1)}
              >
                Suivant
              </Button> 
             </Box>
              
           </Box>
        {/**Infos personnelles */}
       {activeFormIndex == 1 ? <PersonalDetailForm resumeId={resumeId} enableNext={(v)=>setEnableNext(v)} /> : null }
        {/**Résumé */}
        {activeFormIndex == 2 ? <SummaryForm resumeId={resumeId} enableNext={(v)=>setEnableNext(v)} /> : null }

        {/**Compétences */}

        {/**Experiences */}

        {/**Education */}



    </Box>
  )
}

export default ResumeFormSection