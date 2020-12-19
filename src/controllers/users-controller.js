const { login, register, showAll } = require('../services/user-service')

const loginAdmin = (req, res) => {
  const { username, password } = req.body

  login({ username, password })
    .then(loginRes => {
      res.cookie('token', `Bearer ${loginRes.token}`, { httpOnly: true })
      loginRes.token = 'fake'
      res.json(loginRes)
    })
    .catch(err => {
      console.error('Error while trying to login', err)
      res.status(500)
        .json({ message: 'Username or password do not match' })
    })
}

const registerAdmin = (req, res) => {
  const { username, password, repeatedPassword } = req.body

  // TODO: validate all information is populated with proper formats

  if (password !== repeatedPassword) {
    return res.status(400)
      .json({ message: 'Passwords do not match' })
  }

  register({ username, password })
    .then(() => res.json({ message: 'Successfully registered user' }))
    .catch(err => {
      console.error('Unable to register user', username, err)
      res.status(500)
        .json({ message: 'Unable to register user' })
    })
}

const showAllUsers = (req, res) => {
  showAll()
    .then(results => res.json({ data: results }))
    .catch(err => {
      console.error('Unable to fetch all users', err)
      res.status(500)
        .json({ message: 'Unable to fetch users' })
    })
}

module.exports = { loginAdmin, registerAdmin, showAllUsers }
