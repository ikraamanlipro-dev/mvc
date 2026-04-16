/**
 * Le fichier accueilRoute.js est un module qui définit les routes pqui mène à la page d'accueil 
 */


// on importe le module express qui nous permettra de créer une application web
const express = require('express');

// on crée un routeur express en appelant la fonction express.Router()
const router = express.Router();


const accueilController = require('../controllers/accueilController');

// route pour la page d'accueil ex:localhost:3009
router.get('/', accueilController.accueilView); // racine de notre site web

module.exports = router;