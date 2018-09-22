const express = require('express')
const providers = express.Router()
const providersController = require('../controllers/providers.controller')

providers.get('/', providersController.getProviders)
providers.post('/', providersController.createProvider)
providers.get('/:id', providersController.getProvider)
providers.put('/:id', providersController.updateProvider)
providers.delete('/:id', providersController.deleteProvider)

module.exports = providers
