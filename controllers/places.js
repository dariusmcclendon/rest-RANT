let router = require('express').Router()
let places = require('../models/places.js')

//index page
router.get('/',(req,res)=>{
    
    res.render('places/index', {places})
})


//post to new
router.post('/', (req,res)=>{
  // debug
  // console.log(req.body)
  if (!req.body.pic){
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city){
    // Default city if one is not provided
    req.body.city = 'Anytown'
  }
  if (!req.body.state){
    req.body.state = 'USA'
  }
  places.push(req.body)  
  res.redirect('/places')
})
//new  form route
router.get('/new',(req,res)=>{
  
  res.render('places/new')
})
//edit PUT route
router.put('/:id', (req, res) => {
  console.log(req.params.id)
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
      console.log(id, ' not a number')
  }
  else if (!places[id]) {
    console.log('undefined or no place with that ID')  
    res.render('error404')

  }
  else {
    if (!req.body.pic){
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city){
      // Default city if one is not provided
      req.body.city = 'Anytown'
    }
    if (!req.body.state){
      req.body.state = 'USA'
    }
    places[id]=req.body
    res.redirect(`/places/${id}`)
  }
})
//edit form route
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/edit', { place: places[id], id })
  }
})





//delete route
router.delete('/places/:id', (req,res)=>{
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    //res.send('STUB DELETE places/:id')
    res.redirect('/places')
  }
})

//show page
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id })
  }
})




module.exports = router