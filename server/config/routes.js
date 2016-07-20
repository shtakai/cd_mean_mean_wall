console.log('routes')


const users = require('./../controllers/users.js')

module.exports = (app) => {
  app.post('/users', users.create)
}
