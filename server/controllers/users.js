console.log('userController')


const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = {
  create: (req, res) => {
    console.log('userController#create')
    console.log('body', req.body)
    const user = new User(req.body)
    user.save((err, _user) => {
      if(err){
        console.log('err', err)
        res.json({status: false, errors: err})
      }else{
        console.log('created user', _user)
        res.json({status: true, user: _user})
      }
    })
  }, // end create
  login: (req, res) => {
    console.log('login')
    console.log('body', req.body)
    let query = User.findOne({name: req.body.name})
    query.exec(function(err, user) {
      console.log('findOne',err,user)
      if(err){
        console.log('error', err)
        res.json({status:false, errors:err})
      } else if(!user){
        // user not found
        console.log('user not found')
        let _user = new User(req.body)
        _user.save((err,_u) => {
          if(err){
            console.log('error', err)
            res.json({status:false, errors:err})
          } else {
            // new user created
            console.log('new user', _u)
            res.json({status:true, user: _u})
          }
        })
      }else {
        // found
        console.log('user found', user)
        res.json({status:true, user: user})
      }
    })
  }, // end login
}



