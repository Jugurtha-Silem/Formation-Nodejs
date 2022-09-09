const express = require('express')

const app = express()
const port = 3000 

app.get('/',( req, res) => res.send('Hello, express agun 2 ! '))

app.get('/api/pokemons/:id',(req, res) => {
    const id = req.params.id 
    res.send(`Vous-avez demandé le pkemon n°${id}` )

})



app.listen(port, () => console.log(`Notre application Node demareé sur : http://localhost:${port}`))
