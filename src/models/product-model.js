const mongoose = require('mongoose')

const baseModel = require('./base-model.json')

const productSchema = new mongoose.Schema({
  ...baseModel,
  code: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  /**
   * TODO: in the future, this might be as a separate collection
   */
  price: {
    type: Number,
    min: 1.0,
    required: true
  }
}, { timestamps: true })

const ProductModel = mongoose.model('Product', productSchema)

module.exports = ProductModel
