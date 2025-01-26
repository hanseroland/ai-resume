import React from 'react';
import { Card, CardHeader, CardContent, CardActions, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { Delete, Share, Article, Edit } from '@mui/icons-material';

export default function ResumeCard({ resume }) {
  return (
    <Card
      elevation={8}
      sx={{
        maxWidth:375,
        borderRadius: 3,
        overflow: 'hidden',
        background: 'linear-gradient(to bottom right, #f5f5f5, #ffffff)',
        '&:hover': {
          transform: 'scale(1.05)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      {/* Header Section */}
      <CardHeader
        title={
          <Typography fontSize={15} variant="h6" fontWeight="bold" noWrap>
            {resume.title}
          </Typography>
        }
        subheader={
          <Typography variant="body2" color="textSecondary">
            Créé le : {new Date(resume.createdAt).toLocaleDateString('fr-FR')}
          </Typography>
        }
        action={
          <IconButton
             onClick={() => alert('Supprimer le CV non encore implémenté')}
          >
             <Delete color="error" />
          </IconButton>
         
        }
        sx={{
          backgroundColor: '#f0f0f0',
          borderBottom: '1px solid #e0e0e0',
        }}
      />

      {/* Content Section */}
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          py: 4,
        }}
      >
        <Article color="disabled" sx={{ fontSize:64}} />
       
      </CardContent>

      {/* Actions Section */}
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          px: 2,
          py: 1.5,
          backgroundColor: '#fafafa',
          borderTop: '1px solid #e0e0e0',
        }}
      >
        {/* Edit Button */}
        <Button
          component={Link}
          to={`/resumes/${resume._id}/edit`}
          variant="outlined"
          color="inherit"
          startIcon={<Edit />}
          sx={{
            textTransform: 'none',
            fontWeight: 'bold',
          }}
        >
          Modifier
        </Button>

        {/* Share Button */}
        <IconButton
          color="secondary"
          sx={{
            textTransform: 'none',
            fontWeight: 'bold',
          }}
          onClick={() => alert('Partage non encore implémenté')}
         >
           <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}
