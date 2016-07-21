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

const mongoose = require('mongoose')
const _ = require('lodash')
//console.log(chance)
const User = mongoose.model('User')
const Message = mongoose.model('Message')
const Comment = mongoose.model('Comment')
mongoose.Promise = global.Promise;
let user
User.findOne({_id: '57903038153d251742d51cde'})
  .populate('messages')
  .populate('comments')
  .exec((err, _user) => {
    //let m = new Message({content: faker.lorem.sentence(), _user:_user})
    //let c = new Comment({content: faker.lorem.sentence(), _user:_user, _message: m})
    //c.save()
    //m.comments.push(c)
    //m.save()
    //_user.messages.push(m)
    //_user.comments.push(c)
    //_user.save()
    console.log('user', _user._id)
    _.each(_user.messages, (m) => {
      console.log('  m  ', m._id)
      _.each(m.comments, (c) => {
        console.log('    c ',c)
      })
    })
    //console.log('m', m)
    //console.log('c', c)
  }).then((_u) => {

    //console.log('sssss')
    //console.log('---user',_u)
  })

const server = app.listen(port, () => {
    console.log('server start on #', port)
})
