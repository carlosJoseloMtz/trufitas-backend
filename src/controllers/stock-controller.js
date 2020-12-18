const { createStockLevel,
  findStock,
  findAllStocks } = require('../services/stock-service')

const newStockLevel = (req, res) => {
  const stock = req.body
  createStockLevel({ ...stock })
    .then(data => res.status(201).json({ data }))
    .catch(err => {
      console.error('Error while trying to create a new stock level', err)
      res.status(500).json({ message: 'Could not create the new stock level' })
    })
}

const showWarehouse = (req, res) => {
  const { id } = req.params
  findStock(id)
  
}

const showAllStockLevel = (req, res) => {
  const filters = req.params
  findAllStocks(filters)
    .then(data => res.json({ data }))
    .catch(err => {
      console.error('Error while fetching the stock levels', err)
      res.status(500).json({ message: 'Could not fetch the stock levels' })
    })
}

module.exports = { newStockLevel, showAllStockLevel }