const mongoose = require('mongoose')

const baseModel = require('./base-model.json')

const addressSchema = new mongoose.Schema({
  ...baseModel,
  streetname: {
    type: String,
    required: true
  },
  postalCode: {
    type: String,
    required: true
  },
  /**
   * TODO: in the future, all these following items will might be
   *  in separate collections: suburb, city, state
   */
  suburb: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  }
}, { timestamps: true })

const AddressModel = mongoose.model('Address', addressSchema)

module.exports = AddressModel
