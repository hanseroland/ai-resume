import React, { useState } from 'react'
import { Box } from '@mui/material'
import PersonalDetailForm from '../forms/PersonalDetailForm'
import SummaryForm from '../forms/SummaryForm'
import ExperienceForm from '../forms/ExperienceForm'
import EducationForm from '../forms/EducationForm'
import SkillForm from '../forms/SkillForm'
import FormSectionHeader from '../ui/formsHead/FormSectionHeader'

function ResumeFormSection({resumeId}) {

   const [activeFormIndex, setActiveFormIndex] = useState(1)

   const [enableNext,setEnableNext] = useState(false)

  return (
    <Box>
        {/**Head */}
        <FormSectionHeader
          activeFormIndex={activeFormIndex}
          setActiveFormIndex={setActiveFormIndex}
          enableNext={enableNext}
      />
           
        {/**Infos personnelles */}
        {activeFormIndex == 1 ? <PersonalDetailForm resumeId={resumeId} enableNext={(v)=>setEnableNext(v)} /> : null }

        {/**Résumé */}
        {activeFormIndex == 2 ? <SummaryForm resumeId={resumeId} enableNext={(v)=>setEnableNext(v)} /> : null }

        {/**Compétences */}

        {activeFormIndex == 3 ? <SkillForm resumeId={resumeId} enableNext={(v)=>setEnableNext(v)} /> : null }

        {/**Experiences */}
        {activeFormIndex == 4 ? <ExperienceForm resumeId={resumeId} enableNext={(v)=>setEnableNext(v)} /> : null }
          
        {/**Education */}
        {activeFormIndex == 5 ? <EducationForm resumeId={resumeId} enableNext={(v)=>setEnableNext(v)} /> : null }




    </Box>
  )
}

export default ResumeFormSection