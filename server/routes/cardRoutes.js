const express = require('express');
const router = express.Router();
const Card = require('../models/Card');
const User = require('../models/User');
const multer = require('multer');




const FILE_TYPE_MAP = {
    'image/png':'png',
    'image/jpeg':'jpeg',
    'image/jpg':'jpg',
}

const storage = multer.diskStorage({
    destination:function (req,file,cb){
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error('Image invalide');

        if(isValid){
            uploadError = null
        }
        cb(null,'./public/profile/')
    },
    filename:function(req,file,cb){

        const fileName = file.originalname.split(' ').join('-')
        const extension = FILE_TYPE_MAP[file.mimetype];
        cb(null,`${fileName}-${Date.now()}.${extension}`)
    }
})

const uploadOptions = multer({storage:storage});




// Afficher toutes les cartes
router.get('/', async (req, res) => {
    try {
      const cards = await Card.find();
      if (!cards) {
        res.status(404).send({
            success: false
        });
    }
      res.status(200).send({
        success: true,
        message: 'Cards fetched successfuly',
        data: cards
    });
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération des cartes.', error });
    }
  });

  //  Route pour compter les cartes NFC actives
router.get('/active-count', async (req, res) => {
  try {
    const activeCardsCount = await Card.countDocuments({ activated: true });
    res.status(200).json({ 
      success:true,
      message:"Compteur à jour",
      count: activeCardsCount 
    });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors du comptage des cartes NFC actives.' });
  }
});



  //  Route pour compter les cartes NFC actives
  router.get('/non-active-count', async (req, res) => {
    try {
      const activeCardsCount = await Card.countDocuments({ activated: false });
      res.status(200).json({ 
        success:true,
        message:"Compteur à jour",
        count: activeCardsCount 
      });
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors du comptage des cartes NFC actives.' });
    }
  });

  // Afficher les informations d'une seule carte
router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const card = await Card.findById(id);
      if (!card) {
        return res.status(404).json({ message: 'Carte non trouvée.' });
      }
      res.status(200).json(card);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération de la carte.', error });
    }
  });


  // Afficher les informations d'une carte par nfcId
router.get('/nfc/:nfcId', async (req, res) => {
    try {
      const { nfcId } = req.params;
      
      // Rechercher la carte avec le nfcId correspondant
      const card = await Card.findOne({ nfcId });
  
      if (!card) {
        return res.status(404).json({ message: 'Carte non trouvée pour cet ID NFC.' });
      }
  
      res.status(200).send({
        success:true,
        message:'Carte trouvée',
        data:card
      });
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération de la carte.', error });
    }
  });


// Afficher les cartes d'un utilisateur
router.get('/user/:userId', async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await User.findById(userId).populate('cards');
      if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé." });
      }
      res.status(200).json(user.cards);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la récupération des cartes de l'utilisateur.", error });
    }
 });




 // Créer une nouvelle carte
router.post('/', async (req, res) => {
  
    try {
    
      const userId = req.body.userId
      const nfcId = req.body.nfcId
  
      // Vérifier si une carte avec le même nfcId existe
      const existingCard = await Card.findOne({nfcId:nfcId});
     

      if (existingCard) {
        return res.status(400).json({ message: 'Une carte avec cet ID NFC existe déjà.' });
      }
   
      // Créer une nouvelle carte
     
      const newCard = new Card(req.body);
  
      // Enregistrer la carte dans la base de données
      const savedCard = await newCard.save();
  
      // Lier la carte à un utilisateur si userId est fourni
      if (userId) {
        const user = await User.findById(userId);
        if (user) {
          user.cards.push(savedCard._id);
          await user.save();
        }
      }
  
      res.status(201).send({
        success: true,
        message: 'Carte créée.',
        data: savedCard,
      });
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la création de la carte.', error });
    }
  });


//Mise à jour de l'avatar de la carte
router.put('/avatar/:id', uploadOptions.single('avatar'), async (req,res)=>{

    const id = req.params.id;

    console.log("avatar id",id)

    const card = await Card.findById(id); 
    

    if(!card) return res.send({succsess:false,message:'Carte invalide'});

    const file = req.file;
    let imagePath;

    if(file){
        const fileName = file.filename;
        const basePath =  `${req.protocol}://${req.get('host')}/public/profile/`
        imagePath = `${basePath}${fileName}`
    }else{
        imagePath= card.avatar
    }

    const updatedPicture = await Card.findByIdAndUpdate(
        id, 
        {
            avatar:imagePath, 
        },
        {new:true} 
    ); 

    if(!updatedPicture)
        return res.send({
            success:false,
            message:'Impossible de mettre à jour l\'image '
        });
   
    res.send({
        success:true,
        message:'Avatar enrégistrée',
        data:updatedPicture
    });
});

  // Modifier les informations d'une carte
router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;
  
      const updatedCard = await Card.findByIdAndUpdate(id, updates, { new: true });
      if (!updatedCard) {
        return res.status(404).json({ message: 'Carte non trouvée.' });
      }
      res.status(200).json(updatedCard);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la mise à jour de la carte.', error });
    }
  });

  // Supprimer une carte
router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedCard = await Card.findByIdAndDelete(id);
      if (!deletedCard) {
        return res.status(404).json({ message: 'Carte non trouvée.' });
      } 
  
      // Retirer la carte des références de l'utilisateur
      await User.updateMany({ cards: id }, { $pull: { cards: id } });
  
      res.status(200).json({ message: 'Carte supprimée avec succès.', deletedCard });
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la suppression de la carte.', error });
    }
  });


  // Activer ou désactiver une carte
router.patch('/:id/toggle', async (req, res) => {
    try {
      const { id } = req.params;
  
      const card = await Card.findById(id);
      if (!card) {
        return res.status(404).json({ message: 'Carte non trouvée.' });
      }
  
      card.activated = !card.activated;
      const updatedCard = await card.save();
  
      res.status(200).json({ message: `Carte ${card.activated ? 'activée' : 'désactivée'} avec succès.`, updatedCard });
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'état de la carte.', error });
    }
  });
  
  module.exports = router; 