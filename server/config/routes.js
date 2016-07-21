console.log('routes')


const users = require('./../controllers/users.js')

module.exports = (app) => {
  app.post('/users', users.create)
  app.post('/login', users.login)
  app.get('/session', users.session)
}
