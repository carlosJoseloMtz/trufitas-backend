const WarehouseModel = require('../models/warehouse-model')
const AddressModel = require('../models/address-model')

const createWarehouse = async ({ code, name, location }) => {
  const address = { ...location }

  // TODO: validate the address in some way

  const newAddress = await AddressModel.create(address)

  const wh = {
    code,
    name,
    location: newAddress
  }

  return await WarehouseModel.create(wh)
}

const findAllWarehouses = (filters) => {
  return WarehouseModel.find({ ...filters })
}

const findWarehouse = (id) => {
  return WarehouseModel.findById(id)
}

module.exports = { createWarehouse, findAllWarehouses, findWarehouse }