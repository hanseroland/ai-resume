import React from 'react';
import { Box, Stepper, Step, StepLabel } from '@mui/material';
import { useFormSections } from '../../../context/FormSectionsProvider';

const FormStepper = ({ activeFormIndex }) => {
  const { sections } = useFormSections();

  // Fonction pour retirer le suffixe "Form" des labels
  const getLabel = (section) => section.replace('Form', '');

  return (
    <Box
      sx={{
        width: '100%',
        mb: 2,
        '@media (max-width: 600px)': {
          flexDirection: 'column',
          alignItems: 'flex-start',
        },
      }}
    >
      <Stepper activeStep={activeFormIndex - 1} alternativeLabel>
        {sections.map((section, index) => (
          <Step key={index}>
            <StepLabel>{getLabel(section)}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default FormStepper;