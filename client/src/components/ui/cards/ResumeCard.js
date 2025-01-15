import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, CardActions, CardContent, Typography } from '@mui/material';
import { Delete, Edit, Notes, Share } from '@mui/icons-material';
import ArticleIcon from '@mui/icons-material/Article';

export default function ResumeCard({ resume }) {


    return (

        <Card
            elevation={5}
            sx={{
                maxWidth:375,
                '&:hover': {
                    transform: "scale(1.05)",
                    transition: "0.3s ease",
                    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.3)",

                },
            }}>
            <CardHeader
                sx={{backgroundColor:'rgb(25 118 210)',color:'white'}}
                title={<Typography  fontWeight="bold" variant="body1" >{resume.title}</Typography>}
                subheader={<Typography color="textPrimary" variant="body2" >{resume.createdAt}</Typography>}

            />

            <CardContent
              sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
              }}
            >
                <ArticleIcon 
                    fontSize='large'
                    color="primary"
                 />
            </CardContent>

            <CardActions
              sx={{
                display:'flex',
                justifyContent:'flex-end',
               
              }}
              
            >
                <IconButton>
                 <Edit />
                </IconButton>
                <IconButton>
                  <Delete />
                </IconButton>
                <IconButton>
                  <Share />
                </IconButton>
            </CardActions>

        </Card>
    );
}
