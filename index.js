//Modules and Globals
require('dotenv').config()
let express = require('express')
let app = express()
let methodOverride = require('method-override')

//Express Settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
// Controllers and Routes

app.use('/places',require('./controllers/places.js'))
//default route
app.get('/', (req, res) => {
    res.render('home')
})

//404 route
app.get('*',(req, res)=>{
    res.status(404).render('error404')
})

//places index page
app.get('/places', (req,res) => {
    res.render('index')
})

//create new place
// app.post('/places', (req, res) =>{
//     res.send('Create a new place')
// })

// //form page for creating a new place
// app.get('/places/new', (req, res) => {
//     res.send('Form page, plew places')
// })

// //details about a particular place
// app.get('/places/:id', (req, res) => {
//     res.send('place info')
// })

// //update a particular place
// app.put('/places/:id', (req, res) => {
//     res.send('update')
// })

// //form to edit a place
// app.get('/places/:id/edit', (req, res) => {
//     res.send('form page, update place')
// })

// //delete a place
// app.delete('/places/:id', (req, res) => {
//     res.send('delete place')
// })

//create a rant about a particular place
app.post('/places/:id/rant', (req, res) => {
    res.send('create rant')
})

//delete a rant
app.delete('/places/:id/rant/rantId', (req, res) => {
    res.send('delete rant')
})

app.listen(process.env.PORT)