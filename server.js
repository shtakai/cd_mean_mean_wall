require('dotenv').config()

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const faker = require('faker')

const app = express()
const port = process.env.PORT ? process.env.PORT : 8000
const sessionSecret = process.env.SESSION_SECRET ? process.env.SESSION_SECRET : faker.random.uuid()
console.log('sessionSecret', sessionSecret)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, './client')))
app.use(express.static(path.join(__dirname, './bower_components')))
app.use(session({
  secret: sessionSecret,
  resave: false,
  saveUninitialized: true,
}))

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

/**
 * just use many users
 */

//const mongoose = require('mongoose')
//const _ = require('lodash')
////console.log(chance)
//const User = mongoose.model('User')
//_(100).times(() => {
  //let u = new User({name: faker.commerce.productName()})
  //u.save()
//})

const server = app.listen(port, () => {
    console.log('server start on #', port)
})
