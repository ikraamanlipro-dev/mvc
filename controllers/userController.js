// Importe le module 'db' depuis le dossier parent 'models'
const db = require('../models');

// Récupère le modèle 'user' depuis l'objet 'db'
const User = db.user;

// Récupère l'opérateur Sequelize pour les requêtes avancées
const Op = db.Sequelize.Op;

// Exporte la fonction 'create' pour créer un nouvel utilisateur
exports.create = (req, res) => {
    // Récupère l'email de l'utilisateur depuis la requête HTTP
    const emailUser = req.body.email;
    // Récupère le mot de passe de l'utilisateur depuis la requête HTTP
    const passwordUser = req.body.password;

    // Crée un objet utilisateur avec l'email et le mot de passe
    const user = {
        email: emailUser,
        password: passwordUser
    };

    // Utilise le modèle User pour créer un nouvel utilisateur dans la base de données
    User.create(user).then(data => {
        // Envoie la réponse avec les données de l'utilisateur créé
        res.send(data);
    }).catch(err => {
        // En cas d'erreur, envoie une réponse d'erreur 500 avec un message
        res.status(500).send({
            message: err.message || "Une erreur est survenue lors de la création de l'utilisateur."
        });
    });
}