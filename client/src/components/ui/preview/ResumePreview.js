import React, { useContext } from 'react'
import { ResumeInfoContext } from '../../../context/ResumeInfoContext'
import { Box } from '@mui/material'
import PersonnalDetailPreview from './models/firstModel/PersonnalDetailPreview'
import SummaryDetailPreview from './models/firstModel/SummaryDetailPreview'
import SkillsDetailPreview from './models/firstModel/SkillsDetailPreview'
import ExperienceDetailPreview from './models/firstModel/ExperienceDetailPreview'
import EducationDetailPreview from './models/firstModel/EducationDetailPreview'



function ResumePreview() {

const {resumeData,setResumeData} = useContext(ResumeInfoContext)

console.log("context",resumeData)
  return (
    <Box>
        {/**Infos personnelles */}
         <PersonnalDetailPreview  resumeData={resumeData} />
        {/**Résumé */}
          <SummaryDetailPreview resumeData={resumeData} />
        {/**Compétences */}
          <SkillsDetailPreview  resumeData={resumeData} />
        {/**Experiences */}
          <ExperienceDetailPreview resumeData={resumeData} />
        {/**Education */}
          <EducationDetailPreview resumeData={resumeData} />
      

    </Box>
  )
}

export default ResumePreview