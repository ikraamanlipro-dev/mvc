/**
 * Le fichier app.js est une application Express qui gère les routes de notre serveur web.
 */

// on importe le module express qui nous permettra de créer une application web
const express = require('express');

// on crée une application express en appelant la fonction express()
const app = express();

const mySql2 = require('mysql2'); // on importe le module mysql2 pour se connecter à la base de données

// import express-connection
const expressMyConnection = require('express-myconnection')

// ===== configuration de la base de données =====

// Configuration de la connexion à la base de données
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'Myroot33!',
    database: 'maygourmet',
    port: 3306
};


app.set('views', './views'); // on indique à express où se trouvent les vues
app.set('view engine', 'ejs'); // on indique à express que nous utilisons le moteur de template ejs

app.use(express.static('public')); // on indique à express où se trouvent les fichiers statiques (css, js, images)

app.use(express.json()); // extrait les données au format JSON
app.use(express.urlencoded({ extended: false })); // extrait les donnée saisies dans les formulaires

app.use(expressMyConnection(mySql2, dbConfig, 'pool'));

// ==== accueilRoute ====

// on importe la route pour la route d'accueil
const accueilRoute = require('./routes/accueilRoute');


// on utilise la route d'accueil pour la racine de notre site web
app.use('/', accueilRoute); // on utilise la route d'accueil pour la racine de notre site web

// ==== authentificationRoute ====
const authentificationRoute = require('./routes/authentificationRoute'); // on importe la route pour l'authentification

// on utilise la route pour l'authentification pour la racine de notre site web
app.use('/', authentificationRoute); // on utilise la route pour l'authentification pour la racine de notre site web



// on exporte notre application express pour pouvoir l'utiliser dans le fichier myserver.js
module.exports = app;