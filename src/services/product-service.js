const ProductModel = require('../models/product-model')

const createProduct = ({ code, name, description = '', price = 0.0 }) => {

  // new products are not active by default to avoid publishing
  // or sell products that are not approved/reviewed by all
  const newProd = {
    code, name, description, price,
    active: false
  }

  return ProductModel.create(newProd)
}

const modifyProduct = ({ code, newContent }) => {
  return ProductModel.updateOne({ code }, { ...newContent })
}

const findAllProducts = (filters) => {
  return ProductModel.find({ ...filters })
}

const findProduct = (id) => {
  return ProductModel.findById(id)
}

module.exports = { createProduct, modifyProduct, findAllProducts, findProduct }