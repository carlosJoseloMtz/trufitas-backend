const UserModel = require('../models/user-model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const securityConfig = require('../config/token-config.json')


const login = async ({ username, password }) => {
  const user = await UserModel.findOne({ username, active: true })

  // check if user exists
  if (!user) {
    throw new Error(`Error ${username} not found`)
  }

  const isSamePassword = await bcrypt.compare(password, user.password)

  // check the password matches
  if (!isSamePassword) {
    throw new Error('Passwords do not match')
  }

  const payload = {
    username,
    groups: [user.userType]
  }

  const token = jwt.sign(payload,
    securityConfig.secret,
    { expiresIn: securityConfig.ttl })

  // create the response
  const response = {
    user, token
  }

  // remove the password
  response.user.password = null

  return response
}

const register = async ({ username, password }) => {

  const encodedPassword = await bcrypt.hash(password, securityConfig.salt)

  // directly use registration for admin users
  const user = { username, password: encodedPassword, userType: 'admin' }

  const newUser = await UserModel.create(user)

  return newUser
}

const showAll = () => {
  return UserModel.find({})
}

module.exports = { login, register, showAll }