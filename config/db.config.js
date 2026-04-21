module.exports = {  // Exporte un objet de configuration pour la base de données
    HOST: 'localhost',  // Définit l'adresse du serveur de base de données (ici, localhost pour un serveur local)
    USER: 'root',  // Nom d'utilisateur pour se connecter à la base de données MySQL
    PASSWORD: 'Myroot33!',  // Mot de passe associé à l'utilisateur pour l'authentification
    DB: 'maygourmet',  // Nom de la base de données à utiliser
    dialect: 'mysql',  // Spécifie le type de base de données (ici, MySQL)
    pool: {  // Configuration du pool de connexions pour gérer les connexions efficacement
        max: 5,  // Nombre maximum de connexions simultanées dans le pool
        min: 0,  // Nombre minimum de connexions maintenues dans le pool
        acquire: 30000,  // Temps maximum (en ms) pour acquérir une connexion avant d'échouer
        idle: 10000  // Temps (en ms) d'inactivité avant de fermer une connexion inutilisée
    }   
};

/**
 * Les paramètres HOST, USER, PASSWORD, DB et dialect sont utilisés pour configurer la connexion à la base de données MySQL.
 * Les paramètres pool sont utilisés pour configurer la gestion des connexions à la base de données, notamment le nombre maximum et minimum de connexions, le temps d'acquisition et le temps d'inactivité avant de fermer une connexion.
 * Le module exporte un objet de configuration qui peut être utilisé dans d'autres parties de l'application pour établir une connexion à la base de données MySQL.
 * 
 */