const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const data = {
    hi: 'LinkedArt',
    list: [{name: 'Theatres', link: '/theatres'}, {name: 'Musicals', link: '/musicals'}, {name: 'Auditions for dancers', link: '/dances'}, {name: 'Classes and workshops', link: '/classes'}],
    whatIsOn: {name: 'What\'s on in the city ', link: '/whatison'},
    articles: 'Articles'
  }
  res.render('./index', data)
})

router.get('/theatres', (req, res) => {
  const data = {
    page: 'THEATRES',
    listOfTheatres: [{link: '/theatres'}]}
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

router.get('/whatison', (req, res) => {
  res.render('whatison', {page: 'Audition for:'})
})
router.get('/articles', (req, res) => {
  res.render('articles')
})

module.exports = router
