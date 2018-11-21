const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const data = {
    hi: 'LinkedArt',
    list: ['Theatre', 'Musicals', 'Dance Auditions', 'Classes'],
    whatIsOn: 'What\'s on on the city '
    // {articles: 'Articles'}
  }
  res.render('./index', data)
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

router.get('/articles', (req, res) => {
  res.render('articles', {page: 'WHAT IS NEW'})
})

module.exports = router
