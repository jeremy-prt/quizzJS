// ROUTE AVEC EMAIL
router.get('/user', (req, res) => {
    const email = req.query.email;
    
    if (!email) {
        return res.status(400).json({ error: 'Email requis' });
    }

    const query = 'SELECT * FROM users WHERE email = ?';
    
    db.query(query, [email], (err, results) => {
        if (err) {
            console.error('Erreur, verifier votre requete:', err);
            return res.status(500).json({error: 'probleme lors de la requete sql'});
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'Utilisateur n'exsite pas dans la db' });
        }

        res.json(results[0]);
    });
});

//Configuration DB
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'exercice_api'
});
 
db.connect(err => {
    if (err) {
        console.error('Problème de connexion à la DB:', err);
        return;
    }
});
