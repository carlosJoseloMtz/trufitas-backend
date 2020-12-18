const mongoose = require('mongoose')

const baseModel = require('./base-model.json')

const userSchema = new mongoose.Schema({
  ...baseModel,
  username: {
    type: String,
    unique: true,
    required: true
  },
  /**
   * TODO: encode and decode password for the login
  */
  password: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    enum: ['customer', 'admin'],
    default: 'customer'
  }
}, { timestamps: true })

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel
