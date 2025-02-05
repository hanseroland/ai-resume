const Resume = require('../models/Resume')
const User = require('../models/User')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Joi = require('joi');
const dotenv = require('dotenv');


dotenv.config();
const secret = process.env.PASS_SEC




// Afficher les informations d'un seul CV par son id
router.get('/:id', async (req, res) => {
    try {
        const resume = await Resume.findById(req.params.id);
        if (!resume) {
            return res.status(404).json({ success: false, message: 'CV introuvable.' });
        }
        res.status(200).json({ success: true, data: resume });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// récupérer les CV d'un utilisateur donné en fonction de son ID
router.get('/user/:userId',async(req,res)=>{

  try {
    const userId = req.params.userId

    const findUser = await User.findById(userId)
 
    if(!findUser){
       return res.status(404).send(
         {
           success:false,
           message:'Aucun utilisateur trouvé'
         }
       )
    }
 
    const findResume = await Resume.find({userId:userId})
    if (!findResume) {
     return res.status(404).json({ success: false, message: 'Aucun CV trouvé(s).' });
    }
 
    res.status(200).send({ 
      success: true, 
      messages:'CV recupérés avec succès',
      data: findResume 
    });
  } catch (error) {
       res.status(500).json({ success: false, error: error.message });
  }
 
})

//Route pour créer un nouveau CV
router.post('/create', async (req, res) => {

    const { userId, title } = req.body;
  
    try {
      // Vérifier si l'utilisateur existe
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'Utilisateur introuvable.' });
      }
  
      // Créer un nouveau CV
      const newResume = new Resume({
        userId: userId,
        title: title,
        personalInfo: {
          fullName: "",
          jobTitle: "",
          address: "",
          phone: "",
          email: user.email // Par défaut, utiliser l'email de l'utilisateur
        },
        summary: "",
        experiences: [],
        skills: [],
        education: [],
        hobbies: [],
        certifications: [],
        projects: []
      });
  
      // Sauvegarder le CV
      const savedResume = await newResume.save();
  
      // Ajouter l'ID du CV dans le modèle User
      user.resumes.push(savedResume._id);
      await user.save();
  
      // Répondre avec les détails du CV créé
      res.status(201).json({
        success:true,
        message: 'CV créé avec succès.',
        data: savedResume
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Une erreur est survenue lors de la création du CV.' });
    }
  });

// Route pour mettre à jour les détails personnels d'un CV
router.put('/update-personal-info/:resumeId', async (req, res) => {
  
  const { resumeId } = req.params;
  const { fullName, jobTitle, address, phone, email } = req.body;

  try {
      // Vérifier si le CV existe
      const resume = await Resume.findById(resumeId);
      if (!resume) {
          return res.status(404).json({ success: false, error: 'CV introuvable.' });
      }

      // Mise à jour des détails personnels avec l'opérateur `$set`
      const updatedResume = await Resume.findByIdAndUpdate(
          resumeId,
          {
              $set: {
                  "personalInfo.fullName": fullName,
                  "personalInfo.jobTitle": jobTitle,
                  "personalInfo.address": address,
                  "personalInfo.phone": phone,
                  "personalInfo.email": email
              }
          },
          { new: true } // Retourner le document mis à jour
      );

      res.status(200).json({
          success: true,
          message: "Informations personnelles mises à jour avec succès.",
          data: updatedResume
      });

  } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Une erreur est survenue lors de la mise à jour du CV." });
  }
});

// Route pour mettre à jour les détails personnels d'un CV
router.put('/update-summary-info/:resumeId', async (req, res) => {
  
  const { resumeId } = req.params;
  const { summary } = req.body;

  try {
      // Vérifier si le CV existe
      const resume = await Resume.findById(resumeId);
      if (!resume) {
          return res.status(404).json({ success: false, error: 'CV introuvable.' });
      }

      // Mise à jour des détails personnels avec l'opérateur `$set`
      const updatedResume = await Resume.findByIdAndUpdate(
          resumeId,
          {$set: {summary : summary}},
          { new: true } // Retourner le document mis à jour
      );

      res.status(200).json({
          success: true,
          message: "Résumé profil mis à jour avec succès.",
          data: updatedResume
      });

  } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Une erreur est survenue lors de la mise à jour du CV." });
  }
});




  
module.exports = router;