const jwt = require('jsonwebtoken')

const securityConfig = require('../config/token-config.json')

const allowGroups = (...groups) => {

  return (req, res, next) => {
    const token = req.headers['authorization']

    let decoded = null
    try {
      decoded = jwt.verify(token, securityConfig.secret)
    } catch (err) {
      console.error('Could not decode token', token)
      return res.status(401)
        .json({ message: 'You have no correct access' })
    }

    const user = {
      username: decoded.username,
      groups: decoded.groups
    }

    if (!user.groups.find(g => groups.find(assigned => assigned === g))) {
      return res.status(403)
        .json({ message: 'Not enough permissions' })
    }

    req.user = user

    next()
  }

}

module.exports = { allowGroups }