import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import Grid from '@mui/material/Grid2';


const PersonalDetailPreview = ({resumeData}) => {
  if (!resumeData) return null;

  return (
    <Card elevation={0} sx={{maxWidth: 600, mx: "auto" }}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          {/* User Details */}
          <Grid item xs>
            <Typography variant="h5" component="div" fontWeight="bold">
              {resumeData.personalInfo?.fullName}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {resumeData.personalInfo?.jobTitle}
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={1} mt={1}>
          {/* Address */}
          <Grid  size={{xs:6}} display="flex" alignItems="center">
            <LocationOn fontSize="small" color="action" sx={{ mr: 1 }} />
            <Typography variant="body2" color="text.secondary">
              {resumeData.personalInfo?.address}
            </Typography>
          </Grid>

          {/* Phone */}
          <Grid size={{xs:6}}  display="flex" alignItems="center">
            <Phone fontSize="small" color="action" sx={{ mr: 1 }} />
            <Typography variant="body2" color="text.secondary">
              {resumeData.personalInfo?.phone}
            </Typography>
          </Grid>

          {/* Email */}
          <Grid size={{xs:12}} display="flex" alignItems="center">
            <Email fontSize="small" color="action" sx={{ mr: 1 }} />
            <Typography variant="body2" color="text.secondary">
              {resumeData.personalInfo?.email}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PersonalDetailPreview;

