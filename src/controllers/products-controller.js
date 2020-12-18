const { createProduct,
  findAllProducts,
  findProduct } = require('../services/product-service')

const newProduct = (req, res) => {
  const prod = req.body
  createProduct({ ...prod })
    .then(data => res.status(201).json({ data }))
    .catch(err => {
      console.error('Error while trying to create a new product', err)
      res.status(500).json({ message: 'Could not create the new product' })
    })
}

const showProduct = (req, res) => {
  const { id } = req.params

  findProduct(id)
    .then(data => {
      if (!data) {
        return res.status(404).json({ message: 'item not found' })
      }
      res.json({ data })
    })
    .catch(err => {
      console.error(`Error while trying to fetch product [${id}]`, err)
      res.status(500).json({ message: 'Could not fetch product' })
    })
}

const showAllProducts = (req, res) => {
  const filters = req.params
  findAllProducts(filters)
    .then(data => res.json({ data }))
    .catch(err => {
      console.error('Error while fetching the products', err)
      res.status(500).json({ message: 'Could not fetch the products' })
    })
}

module.exports = { newProduct, showAllProducts, showProduct }