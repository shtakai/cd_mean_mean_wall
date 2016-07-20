require('dotenv').config()

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT = process.env.PORT || 8000

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, './client')))
app.use(express.static(path.join(__dirname, './bower_components')))

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

/**
 * just use many users
 */

//const mongoose = require('mongoose')
//const _ = require('lodash')
////console.log(chance)
//const faker = require('faker')
//const User = mongoose.model('User')
//_(100).times(() => {
  //let u = new User({name: faker.commerce.productName()})
  //u.save()
//})

const server = app.listen(port, () => {
    console.log('server start on #', port)
})
