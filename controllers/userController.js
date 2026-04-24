// Importe le module 'db' depuis le dossier parent 'models'
const db = require('../models');

// Récupère le modèle 'user' depuis l'objet 'db'
const User = db.user;

// Récupère l'opérateur Sequelize pour les requêtes avancées
const Op = db.Sequelize.Op;

// Exporte la fonction 'create' pour créer un nouvel utilisateur
exports.create = (req, res) => {
    
    /**
     * je m'assure que le mail et le mot de passe ne sont pas vides
     * 2 conditions a vérifier :
     * 1. si l'email et le mot de passe sont vides ou null
     * j'arrête l'exécution de la fonction 
     */
    
    
    
    
    // Récupère l'email de l'utilisateur depuis le front-end (formulaire) 
    const emailUser = req.body.email;
    // Récupère le mot de passe de l'utilisateur depuis le front-end (formulaire)
    const passwordUser = req.body.password;

    // Vérifie si l'email ou le mot de passe
    if(!emailUser || !passwordUser){
        res.status(400).send({
            message: "Compléter les champs ."
        });
        
        return;
    }

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

// Méthode pour récupérer un utilisateur par son ID
exports.findOne = (req, res) => {
    const idUser = req.params.id; // Récupère l'ID de l'utilisateur à partir des paramètres de la requête

    // on cherche un utilisateur dans la base de données 
    User.findByPk(idUser)
        .then(data => {
            if (data){ // Si l'utilisateur est trouvé
                res.send(data); // Alors l'utilisateur est envoyé dans la réponse 
            }else{ // Sinon l'utilisateur n'existe pas
                res.status(404).send({
                    message: `Utilisateur avec l'id ${idUser} n'existe pas.`
                });
            }
        }).catch(err => {
            res.status(500).send({
                message: `Erreur lors de la recherche de l'utilisateur avec l'id ${idUser}.`
            });
        });
};

// Méthode pour récupérer tous les utilisateurs
exports.findAll = (req, res) => {
    User.findAll()
        .then(data => {
            res.send(data); // Envoie la liste de tous les utilisateurs dans la réponse
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur est survenue lors de la récupération des utilisateurs."
            });
        });
}

// Méthode pour supprimer un utilisateur par son ID
exports.delete = (req, res) => {
    const idUser = req.params.id; // Récupère l'ID de l'utilisateur à partir des paramètres de la requête

    // on supprime un utilisateur dans la base de données
    User.destroy({ // Utilise la méthode destroy du modèle User pour supprimer l'utilisateur avec l'ID spécifié
        where: { id: idUser } // Condition pour trouver l'utilisateur à supprimer
        }).then(num => {
            if (num == 1){ // Si num est égal à 1, cela signifie que l'utilisateur a été supprimé avec succès
                res.send({
                    message: "Utilisateur supprimé avec succès."
                });
            }else{ // Sinon, cela signifie que l'utilisateur n'a pas été trouvé ou n'a pas pu être supprimé
                res.send({
                    message: `Impossible de supprimer l'utilisateur dont l'id est ${idUser}. Peut-être que l'utilisateur n'existe pas.`
                });

            }
        }).catch(err => {
            res.status(500).send({
                message: `Impossible de supprimer l'utilisateur avec l'id ${idUser}.`
            });

    })
};

exports.deleteAll = (req, res) => {
    User.destroy({
        where: {}, // Condition pour supprimer tous les utilisateurs
        truncate: false // Ne pas tronquer la table, mais supprimer les enregistrements
    }).then(nums => {
        res.send({ message: `${nums} Tous les utilisateurs ont été supprimés avec succès.` });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Une erreur est survenue lors de la suppression de tous les utilisateurs."
        });
    });
};

// Méthode pour mettre à jour un utilisateur par son ID
exports.update = (req, res) => {
    const idUser = req.params.id; // Récupère l'ID de l'utilisateur à partir des paramètres de la requête

    User.update(req.body, { // Utilise la méthode update du modèle User pour mettre à jour l'utilisateur avec l'ID spécifié
        where: { id: idUser } // Condition pour trouver l'utilisateur à mettre à jour
        }).then(num => {
            if (num[0] == 1){ // Si num[0] est égal à 1, cela signifie que l'utilisateur a été mis à jour avec succès
                res.send({
                    message : ' Mise à jour réussie.'
                });
            }else{ // Sinon, cela signifie que l'utilisateur n'a pas été trouvé ou n'a pas pu être mis à jour
                res.send({
                    message: 'Echec de la mise à jour. '
                });
            }
        }).catch(err => {
            res.status(500).send({
                message: `Erreur lors de la mise à jour de l'utilisateur avec l'id ${idUser}.`
            });
        });
};