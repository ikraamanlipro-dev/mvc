const dbConfig = require('../config/db.config');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB, // nom de la base de données
    dbConfig.USER, // nom d'utilisateur
    dbConfig.PASSWORD, // mot de passe
    {
        host: dbConfig.HOST, // adresse du serveur de base de données 
        dialect: dbConfig.dialect, // type de base de données
        operatorsAliases: false, // désactive les alias d'opérateurs pour des raisons de sécurité

        pool: {
            max: dbConfig.pool.max, // nombre maximum de connexions simultanées dans le pool
            min: dbConfig.pool.min, // nombre minimum de connexions maintenues dans le pool
            acquire: dbConfig.pool.acquire, // temps maximum (en ms) pour acquérir une connexion avant d'échouer
            idle: dbConfig.pool.idle // temps (en ms) d'inactivité avant de fermer une connexion inutilisée
        }
    }
);

/**
 * Les paramètres DB, USER, PASSWORD, HOST et dialect sont utilisés pour configurer la connexion à la base de données MySQL.
 * Les paramètres pool sont utilisés pour configurer la gestion des connexions à la base de données, notamment le nombre maximum et minimum de connexions, le temps d'acquisition et le temps d'inactivité avant de fermer une connexion.
 * Le module exporte une instance de Sequelize qui peut être utilisée dans d'autres parties de l'application pour interagir avec la base de données MySQL.
 */

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./User')(sequelize, Sequelize);

module.exports = db;