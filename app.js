/**
 * Le fichier app.js est une application Express qui gère les routes de notre serveur web.
 */

// on importe le module express qui nous permettra de créer une application web
const express = require('express');

// on importe la route pour la route d'accueil
const accueilRoute = require('./routes/accueilRoute');

// on crée une application express en appelant la fonction express()
const app = express();

app.set('views', './views'); // on indique à express où se trouvent les vues
app.set('view engine', 'ejs'); // on indique à express que nous utilisons le moteur de template ejs


// on utilise la route d'accueil pour la racine de notre site web
app.use('/', accueilRoute); // on utilise la route d'accueil pour la racine de notre site web

// on exporte notre application express pour pouvoir l'utiliser dans le fichier myserver.js
module.exports = app;