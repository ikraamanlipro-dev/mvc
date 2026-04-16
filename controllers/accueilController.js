/**
 * Ce fichier contient le contrôleur pour la page d'accueil
 * Il gère la logique de la page d'accueil 
 */

// on exporte un objet qui contient une méthode accueilView qui rend la vue accueil.ejs
module.exports = {
    accueilView:(req, res) => {
        res.render('accueil'); // rend la vue accueil.ejs
    }
}