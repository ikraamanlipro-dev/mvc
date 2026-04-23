/**
 * Le fichier autentificationRoute.js est un module qui définit les routes pour l'authentification des utilisateurs
 */

// on importe le module express qui nous permettra de créer une application web
const express = require('express');

// on crée un routeur express en appelant la fonction express.Router()
const router = express.Router();

const authentificationController = require('../controllers/authentificationController');    

// route pour la page d'inscription ex:localhost:3009/register
router.get('/registre', authentificationController.registerView); // route pour la page d'inscription

// route pour enregistrer un nouvel utilisateur dans la base de données
router.post('/registre', authentificationController.registerUser); // route pour enregistrer un nouvel utilisateur dans la base de données

// ==== routes pour les utilisateurs ====

const userController = require('../controllers/userController'); // on importe le contrôleur pour les utilisateurs

// route pour récupérer un utilisateur par son ID
router.get('/user/:id', userController.findOne); // route pour récupérer un utilisateur par son ID

// route pour récupérer tous les utilisateurs
router.get('/user', userController.findAll); // route pour récupérer tous les utilisateurs

// route pour supprimer un utilisateur par son ID
router.delete('/user/:id', userController.delete); // route pour supprimer un utilisateur par son ID

module.exports = router;