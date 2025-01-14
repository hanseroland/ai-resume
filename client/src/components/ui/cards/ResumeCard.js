import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Typography } from '@mui/material';



export default function ResumeCard({resume}) {


    return (

        <Card sx={{ 
            height:"300px",
            width:"250px"
         }}>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={<Typography fontWeight="bold" variant="body1" >{resume.title}</Typography>}
                subheader={<Typography color="textDisabled" variant="body2" >{resume.createdAt}</Typography>}
            />

            <CardMedia
                component="img"
                height="210px"
                width="200px"
                image={`${process.env.PUBLIC_URL}/images/cv_icon_129114.png`} 
                alt="cv"
            />

        </Card>
    );
}
