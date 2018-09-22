/**
 * Product model
 * @module Product
 */
const Product = require('../models/Product')

/**
 * Product Controller Object
 * @type {Object}
 */
const productsController = {}

/**
 * show Product collection
 * @method getProducts
 * @param  {object}  req request
 * @param  {object}  res response
 * @return {Promise}
 */
productsController.getProducts = async (req, res) => {
  let allProducts = await Product.find()
  res.json(allProducts)
}

/**
 * Create a new Product
 * @method createProduct
 * @param  {object}   req request
 * @param  {object}   res response
 * @return {Promise}
 */
productsController.createProduct = async (req, res) => {
  try {
    let newProduct = await new Product(req.body)
    await newProduct.save()
    res.json({status: 'Created successfully', object: newProduct})
  } catch (e) {
    res.json({status: 'Error Creating', error: e})
  }
}

/**
 * Show a Product
 * @method getProduct
 * @param  {object}  req request
 * @param  {object}  res response
 * @return {Promise}
 */
productsController.getProduct = async (req, res) => {
  try {
    let SeeProduct = await Product.findById(req.params.id)
    res.json(SeeProduct)
  } catch (e) {
    res.json({status: 'Error', error: e})
  }
}

/**
 * Update a Product
 * @method updateProduct
 * @param  {object}  req request
 * @param  {object}  res response
 * @return {Promise}
 */
productsController.updateProduct = async (req, res) => {
  let UpdatedProduct = {
    name: req.body.name,
    description: req.body.description,
    director: req.body.director,
    producer: req.body.producer,
    release_data: req.body.release_data,
    rt_score: req.body.rt_score,
    people: req.body.people,
    species: req.body.species,
    providers: req.body.providers,
    url: req.body.url
  }
  await Product.findByIdAndUpdate(req.params.id, {
    $set: UpdatedProduct
  }, {
    upsert: true,
    new: true
  })
  res.json({status: 'Updated successfully'})
}

/**
 * Delete a Product
 * @method deleteProduct
 * @param  {object}  req request
 * @param  {object}  res response
 * @return {Promise}
 */
productsController.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id)
  res.json({status: 'Deleted successfully'})
}

/**
 * Export the Product controller
 * @type {object}
 */
module.exports = productsController
