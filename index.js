require('dotenv').config()
let express = require('express')
let app = express()

app.use('/places',require('./controllers/places.js'))
//default route
app.get('/', (req, res) => {
    res.send('Hello World!')
})
//404 route
app.get('*',(req, res)=>{
    res.status(404).send(`<h1>404 Page<h1>`)
})

app.listen(process.env.PORT)