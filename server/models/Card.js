const mongoose = require('mongoose');

// Définir le schéma pour la carte utilisateur
const cardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    position: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String, 
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/\S+@\S+\.\S+/, 'Veuillez fournir une adresse e-mail valide.'],
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    avatar: {
      type: String,
      default: 'https://example.com/default-avatar.png', // URL par défaut pour les photos de profil
    },
    portfolio: {
        type: String,
        trim: true, // 
    },
    website: {
        type: String,
        trim: true, // 
    },
    socialLinks: {
      linkedIn: {
        type: String,
        trim: true,
      },
      github: {
        type: String,
        trim: true,
      },
      instagram: {
        type: String,
        trim: true,
      },
      telegram: { 
        type: String,
        trim: true,
      },
      twitter: {
        type: String,
        trim: true,
      },
      whatsapp: {
        type: String,
        trim: true, 
      },
    },
    nfcId: {
      type: String,
      required: true,
      unique: true, // ID unique pour la carte NFC
    },
    activated:{
     type:Boolean,
     default:false
    },
  
  },
  {
    timestamps: true, // Ajoute createdAt et updatedAt automatiquement
  }
);

// Exporter le modèle
module.exports = mongoose.model('Card', cardSchema);
