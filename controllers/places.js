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
  console.log('update : ' + req.body)
  
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(place=>{
    res.render(`places/show`, {place})
  })
  .catch((err)=>{
    console.log('ERROR : ', err)
    res.render('error404')
  })
})


//edit form route
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place =>{
    res.render('places/edit', {place})
  })
  .catch((err)=>{
    console.log('ERROR : ', err)
    res.render('error404')
  })
  
  
})
//add comment route
router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  req.body.rant = req.body.rant ? true : false
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
        console.log('ERROR : ', err)
          res.render('error404')
          
      })
  })
  .catch(err => {
    console.log('ERROR : ', err)
      res.render('error404')
  })
})
//delete comment route
router.delete('/places/:id/comment/:commentId'), (req,res)=>{
  res.send('delete comment route')
}
//delete route
router.delete('/places/:id', (req,res)=>{
  db.Place.findByIdAndDelete(req.params.id)
  .then(res.redirect('/places'))
})

//show page
router.get('/:id', (req, res) => {
 db.Place.findById(req.params.id)
 .populate('comments')
 .then(place =>{
   //console.log(place.comments)
   res.render('places/show', {place})
 })
 .catch((err)=>{
   console.log('ERROR : ', err)
   res.render('error404')
 })
})






module.exports = router