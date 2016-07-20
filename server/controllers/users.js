console.log('userController')


const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = ( () => {
  return {
    create: (req, res) => {
      console.log('userController#create')
    }, // end create





  }
} )()
