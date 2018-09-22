/**
 * Provider model
 * @module Provider
 */
const Provider = require('../models/Provider')

/**
 * Provider Controller Object
 * @type {Object}
 */
const providersController = {}

/**
 * show Provider collection
 * @method getProviders
 * @param  {object}  req request
 * @param  {object}  res response
 * @return {Promise}
 */
providersController.getProviders = async (req, res) => {
  let allProviders = await Provider.find()
  res.json(allProviders)
}

/**
 * Create a new Provider
 * @method createProvider
 * @param  {object}   req request
 * @param  {object}   res response
 * @return {Promise}
 */
providersController.createProvider = async (req, res) => {
  try {
    let newProvider = await new Provider(req.body)
    await newProvider.save()
    res.json({status: 'Created successfully', object: newProvider})
  } catch (e) {
    res.json({status: 'Error Creating', error: e})
  }
}

/**
 * Show a Provider
 * @method getProvider
 * @param  {object}  req request
 * @param  {object}  res response
 * @return {Promise}
 */
providersController.getProvider = async (req, res) => {
  try {
    let seeProvider = await Provider.findById(req.params.id)
    res.json(seeProvider)
  } catch (e) {
    res.json({status: 'Error', error: e})
  }
}

/**
 * Update a Provider
 * @method updateProvider
 * @param  {object}  req request
 * @param  {object}  res response
 * @return {Promise}
 */
providersController.updateProvider = async (req, res) => {
  let UpdatedProvider = {
    name: req.body.name,
    climate: req.body.climate,
    terrain: req.body.terrain,
    surface_water: req.body.surface_water,
    residents: req.body.residents,
    products: req.body.products,
    url: req.body.url
  }
  await Provider.findByIdAndUpdate(req.params.id, {
    $set: UpdatedProvider
  }, {
    upsert: true,
    new: true
  })
  res.json({status: 'Updated successfully'})
}

/**
 * delete a Provider
 * @method deleteProvider
 * @param  {object}  req request
 * @param  {object}  res response
 * @return {Promise}
 */
providersController.deleteProvider = async (req, res) => {
  await Provider.findByIdAndDelete(req.params.id)
  res.json({status: 'Deleted successfully'})
}

/**
 * Export the Provider controller
 * @type {object}
 */
module.exports = providersController
