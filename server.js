require('dotenv').config()

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT = process.env.PORT || 8000

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, './client')))
app.use(express.static(path.join(__dirname, './bower_components')))

// require('')


const server = app.listen(port, () => {
    console.log('server start on #', port)
})