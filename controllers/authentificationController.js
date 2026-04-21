/**
 * Le fichier authentificationController.js est un module qui gère la logique de l'authentification des utilisateurs
 */

// on exporte un objet qui contient une méthode loginView qui rend la vue login.ejs
module.exports = {
    registerView:(req, res) => {
        res.render('registre'); // rend la vue registre.ejs
    },
    
    // Crée une méthode asynchrone (async) pour enregistrer un nouvel utilisateur dans la base de données
    registerUser: async (req, res) => {
        console.log('### Controller registerUser');
        console.log('### req.body : ', req.body);

        const emailUser = req.body.email; // Récupère l'email de l'utilisateur à partir du corps de la requête
        const passwordUser = req.body.motdepasse; // Récupère le mot de passe de l'utilisateur à partir du corps de la requête

        console.log('### emailUser : ', emailUser);
        console.log('### passwordUser : ', passwordUser);

        // je m'assure que le mail et le mot de passe ne sont pas vides
        if (!emailUser || !passwordUser) {
            return res.render('registre', { error: 'Veuillez remplir tous les champs' }); // Si l'email ou le mot de passe est vide, rend la vue registre.ejs avec un message d'erreur

        };

        let requeteSQL = 'INSERT INTO user (id,email, password) VALUES (?, ?, ?)'; // Requête SQL pour insérer un nouvel utilisateur dans la table users

        let ordreDonnee = [null , emailUser, passwordUser]; // Tableau des données à insérer dans la table users (id est null car il est auto-incrémenté)

        req.getConnection((err, connection) => { // Obtient une connexion à la base de données
            if (err) {
                console.error('### Erreur de connexion à la base de données : ', err);
            } else {
                connection.query(requeteSQL, ordreDonnee, (err, nouvelUtilisateur) => { // Exécute la requête SQL pour insérer un nouvel utilisateur dans la table users
                    if (err) {
                        console.error('### Erreur lors de l\'insertion de l\'utilisateur : ', err);
                    } else {
                        console.log('### Nouvel utilisateur inséré : ', nouvelUtilisateur);
                        res.redirect('/'); // Redirige l'utilisateur vers la page de connexion après l'inscription
                    }
                });
            }
        });
    }
    



}