app.get('/:name', (req, res) => {
   const name = req.params.name;
   const lang = req.query.lang || 'fr';

   try {
       switch(lang.toLowerCase()) {
           case 'en':
               res.send(`Hello ${name}!`);
               break;
           case 'fr':
               res.send(`Bonjour ${name}!`);
               break;
           case 'es':
               res.send(`¡Hola ${name}!`);
               break;
           default:
               res.status(400).send(`Language '${lang}' non supporté.`);
       }
   } catch(err) {
       res.status(500).send("Unexpected error");
       console.error(err);
   }
});


// Route pour afficher bonjour en fonction du nom et de la langue en param