const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')
const data = require('./views')

const routes = require('./routes')

const server = express()
// configuration
server.engine('hbs', hbs())
server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, 'views'))
server.use(express.urlencoded({extended: true}))
server.use('/', routes)

// routes
server.get('/', (req, res) => {
  console.log('/route hit')
  const data = {
    list: [
      'Theatre',
      'Musicals',
      'Dance Auditions',
      'Classes'
    ]
  }
  res.render('index', data)
})
module.exports = server
