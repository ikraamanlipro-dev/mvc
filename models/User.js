/**
 * Le modèle User est utilisé pour créer des instances d'utilisateurs dans la base de données.
 * Le modele User est de : id,email et password
 */

// on importe le module sequelize qui nous permettra de définir notre modèle d'utilisateur
const Datatypes = require('sequelize');

// on importe la connexion à la base de données
const sequelize = require('../db');

module.exports = sequelize.define(
    'user', // nom de la table dans la base de données
    {
        id: {
            type: Datatypes.INTEGER, // type de données pour l'id
            primaryKey: true, // clé primaire
            autoIncrement: true // incrémentation automatique
        },
        email: {
            type: Datatypes.STRING, // type de données pour l'email
            unique: true // l'email doit être unique
        },
        password: {
            type: Datatypes.STRING // type de données pour le mot de passe
        }
    }
);