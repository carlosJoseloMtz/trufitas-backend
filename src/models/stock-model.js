const mongoose = require('mongoose')

const baseModel = require('./base-model.json')

const Schema = mongoose.Schema

const stockSchema = new mongoose.Schema({
  ...baseModel,
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  },
  warehouse: {
    type: Schema.Types.ObjectId,
    ref: 'Warehouse'
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  }
}, { timestamps: true })

const StockModel = mongoose.model('Stock', stockSchema)

module.exports = StockModel
