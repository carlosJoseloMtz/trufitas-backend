const mongoose = require('mongoose')

const baseModel = require('./base-model.json')

const Schema = mongoose.Schema

const warehouseSchema = new mongoose.Schema({
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
  location: {
    type: Schema.Types.ObjectId,
    ref: 'Address'
  }
}, { timestamps: true })

const WarehouseModel = mongoose.model('Warehouse', warehouseSchema)

module.exports = WarehouseModel
