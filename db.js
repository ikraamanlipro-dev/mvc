/**
 * Permert a sequelize de se connecter à la base de données
 */

const Sequelize = require('sequelize');

// Configuration de la connexion à la base de données
const sequelize = new Sequelize(
    'maygourmet', // nom de la base de données
    'root', // nom d'utilisateur
    'Myroot33!', // mot de passe
    {
        host: 'localhost', // adresse du serveur de base de données 
        dialect: 'mysql', // type de base de données
    }
);

module.exports = sequelize;