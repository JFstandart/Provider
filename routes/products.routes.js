const express = require('express')
const product = express.Router()
const productsController = require('../controllers/products.controller')

product.get('/', productsController.getProducts)
product.post('/', productsController.createProduct)
product.get('/:id', productsController.getProduct)
product.put('/:id', productsController.updateProduct)
product.delete('/:id', productsController.deleteProduct)

module.exports = product
