const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')
const server = express()

const routes = require('./routes')

const hbsConfig = {
  defaultLayout: 'main',
  extname: 'hbs'}

server.engine('hbs', hbs(hbsConfig))
server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, 'views'))
server.use(express.urlencoded({extended: true}))
server.use(express.static(path.join(__dirname, 'public')))
server.use('/', routes)

module.exports = server
