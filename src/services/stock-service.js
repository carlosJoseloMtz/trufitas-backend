const StockModel = require('../models/stock-model')
const WarehouseModel = require('../models/warehouse-model')
const ProductModel = require('../models/product-model')


const findProductAndWarehouseByCodes = async ({ productCode, warehouseCode }) => {

  const product = await ProductModel.findOne({ code: productCode })

  if (!product) {
    throw new Error(`Product with code [${productCode}] was not found`)
  }

  const warehouse = await WarehouseModel.findOne({ code: warehouseCode })

  if (!warehouse) {
    throw new Error(`Warehouse with code [${warehouseCode}] was not found`)
  }

  return { product, warehouse }
}

const createStockLevel = async ({ productCode, warehouseCode, quantity = 0 }) => {

  const { product, warehouse } =
    await findProductAndWarehouseByCodes({ productCode, warehouseCode })

  const newStock = {
    product,
    warehouse,
    quantity
  }

  return StockModel.create(newStock)
}

const modifyWarehouse = async ({ productCode, warehouseCode, newContent }) => {
  const { product, warehouse } =
    await findProductAndWarehouseByCodes({ productCode, warehouseCode })

  return await StockModel.updateOne({ product, warehouse }, { ...newContent })
}

const findAllStocks = (filters) => {
  return StockModel.find({ ...filters })
}

const findStock = (id) => {
  return StockModel.findById(id)
}

module.exports = { createStockLevel, modifyWarehouse, findAllStocks, findStock }