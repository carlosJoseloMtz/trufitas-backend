const { createWarehouse,
  findWarehouse,
  findAllWarehouses } = require('../services/warehouse-service')

const newWarehouse = (req, res) => {
  const { name, code, location } = req.body

  createWarehouse({ name, code, location })
    .then(warehouse => res.status(201).json({ data: warehouse }))
    .catch(err => {
      console.error('Error while creating warehouse', err)
      res.status(500).json({ message: 'Error while creating the warehouse' })
    })
}

const showWarehouse = (req, res) => {
  const { id } = req.params

  findWarehouse(id)
    .then(data => {
      if (!data) {
        return res.status(404).json({ message: 'item not found' })
      }
      res.json({ data })
    })
    .catch(err => {
      console.error(`Unable to fetch warehouse with id [${id}]`, err)
      res.status(500).json({ message: 'Error while fetching warehouse' })
    })
}

const showAllWarehouses = (req, res) => {
  const filters = req.query
  console.log('filters?', filters)
  findAllWarehouses({ ...filters })
    .then(data => res.json({ data }))
    .catch(err => {
      console.error('Could not fetch warehouses', err)
      res.status(500).json({ message: 'Error while fetching all warehouses' })
    })
}

module.exports = { newWarehouse, showAllWarehouses, showWarehouse }