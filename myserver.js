/**
 * le fichier myserver.js a pour mission de créer un serveur 
 */

// on importe le module http de node.js qui nous permettra de créer un serveur web
const http = require('http');

// on importe notre application express qui gère les routes de notre serveur web
const app = require('./app');

// on importe la base de données Sequelize
const db = require('./models');

// Fonction asynchrone pour démarrer le serveur
async function startServer() {
    try {
        // Synchronise les modèles avec la base de données (crée les tables si elles n'existent pas)
        await db.sequelize.sync();
        console.log('Base de données synchronisée.');

        // on crée un serveur en utilisant la méthode createServer du module http
        const server = http.createServer(app);

        const numPort = 3009;

        server.listen(numPort, () => {
            console.log("Serveur démarré sur le port " , numPort);
        });
    } catch (error) {
        console.error('Erreur lors de la synchronisation de la base de données:', error);
    }
}

// Démarre le serveur
startServer();
