let router = require('express').Router()
let db = require('../models')
//index page
router.get('/',(req,res)=>{
    db.Place.find()
    .then((places) => {
      res.render('places/index', {places})
    })
    .catch(err => {
      console.log('ERROR : ', err)
      res.render('error404')
    })
})


//post to new
router.post('/', (req,res)=>{
  db.Place.create(req.body)
  .then(res.redirect('/places'))
  .catch(err=>{
    console.log('ERROR : ', err)
  })
})


//new  form route
router.get('/new',(req,res)=>{
 res.render('places/new')
})


//edit PUT route
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})


//edit form route
router.get('/:id/edit', (req, res) => {
  
})





//delete route
router.delete('/places/:id', (req,res)=>{
  res.send('DELETE /places/:id stub')
})

//show page
router.get('/:id', (req, res) => {
 db.Place.findById(req.params.id)
 .then(place =>{
   res.render('places/show', {place})
 })
 .catch((err)=>{
   console.log('ERROR : ', err)
   res.render('error404')
 })
})




module.exports = router