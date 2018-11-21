const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const data = {
    hi: 'LinkedArt',
    list: [{name: 'Theatres', link: '/theatres'}],
    whatIsOn: 'What\'s on on the city ',
    articles: 'Articles'
  }
  res.render('./index', data)
})

router.get('/theatres', (req, res) => {
  const data = {
    page: 'THEATRES',
    theatreList: ['1', '2', '3']
  }
  res.render('theatres', data)
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
