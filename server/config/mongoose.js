console.log('mongoose load')
require('dotenv').config()

const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')

const db_url = process.env.DB_URL || ''

// /.js/i
const regex = new RegExp('.js$','i')

// model load path
const modelsPath =  path.join(__dirname, './../models')

mongoose.connect(db_url)

// mongoodb connection
mongoose.connection.on('connected', () => {
  console.log('mongoose default connection opened', db_url)
})

mongoose.connection.on('error', (err) => {
  console.error('mongoose default connection error', err)
})

mongoose.connection.on('disconnect', () => {
  console.log('mongoose default connect disconnected')
})


// signal
process.on('SIGINT', () =>{
  console.log('process got SIGINT')
  mongoose.connection.close( () =>{
    console.log('mongoose default connecttion disconnected')
    process.exit(0)
  } )
})


// load models
fs.readdirSync(modelsPath).forEach( (file) => {
  if(regex.test(file)){
    require(`${modelsPath}/${file}`)
  }
} )


