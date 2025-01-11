const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  isAdmin: {
    type: Boolean,
    default:false,
  },
  profilePicture: {
    type: String, // URL de l'image de profil
    default: null,
  },
  phoneNumber: {
    type: String,
    default: null,
  },
  company: {
    type: String,
    trim: true,
    default: null,
  },
  jobTitle: {
    type: String,
    trim: true,
    default: null,
  },
  cards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Card', // Référence au modèle Card
    },
  ],
  
},
  {
    timestamps: true, // Ajoute createdAt et updatedAt automatiquement
  });

module.exports = mongoose.model('User', userSchema);