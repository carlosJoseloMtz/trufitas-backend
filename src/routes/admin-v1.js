const { Router } = require('express')
const { allowGroups } = require('../middlewares/permission-middleware')

// controllers
const { loginAdmin,
  registerAdmin,
  showAllUsers } = require('../controllers/users-controller')
const { newWarehouse,
  showWarehouse,
  showAllWarehouses } = require('../controllers/warehouse-controller')
const { newProduct,
  showProduct,
  showAllProducts } = require('../controllers/products-controller')
const { newStockLevel,
  showAllStockLevel } = require('../controllers/stock-controller')

const router = new Router()

const adminOnly = allowGroups('admin')

router.post('/users/login', loginAdmin)
router.post('/users', adminOnly,registerAdmin)
router.get('/users', adminOnly, showAllUsers)

router.post('/warehouses', adminOnly, newWarehouse)
router.get('/warehouses', adminOnly, showAllWarehouses)
router.get('/warehouses/:id', adminOnly, showWarehouse)

router.post('/products', adminOnly, newProduct)
router.get('/products', adminOnly, showAllProducts)
router.get('/products/:id', adminOnly, showProduct)

router.post('/stocks', adminOnly, newStockLevel)
router.get('/stocks', adminOnly, showAllStockLevel)


module.exports = router
