const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('home', {hi: 'LinkedArt App'})
})

router.get('/theatres', (req, res) => {
  res.render('theatres', {page: 'THEATRES'})
})

router.get('/musicals', (req, res) => {
  res.render('musicals', {page: 'MUSICALS'})
})

router.get('/dances', (req, res) => {
  res.render('dances', {page: 'DANCE CLASSES'})
})

router.get('/workshops', (req, res) => {
  res.render('workshops', {page: 'CLASSES AND WORKSHOPS'})
})
module.exports = router
