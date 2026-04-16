/**
 * Le fichier authentificationController.js est un module qui gère la logique de l'authentification des utilisateurs
 */

// on exporte un objet qui contient une méthode loginView qui rend la vue login.ejs
module.exports = {
    registerView:(req, res) => {
        res.render('registre'); // rend la vue registre.ejs
    }
}