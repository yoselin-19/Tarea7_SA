const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('<h1>Tarea 7</h1>'))
app.get('/vista1', (req, res) => res.send('<h1>Vista1</h1>'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))