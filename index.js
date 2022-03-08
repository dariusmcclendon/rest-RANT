//Modules and Globals
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

//create a rant about a particular place
app.post('/places/:id/rant', (req, res) => {
    res.send('create rant')
})

//delete a rant
app.delete('/places/:id/rant/rantId', (req, res) => {
    res.send('delete rant')
})

app.listen(process.env.PORT)