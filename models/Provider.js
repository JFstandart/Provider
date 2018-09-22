/**
 * mongodb ORM
 * @module mongoose
 */
const mongoose = require('mongoose')

/**
 * Provider collection structure
 * @type {Schema}
 */
const {Schema} = mongoose

/**
 * Provider collection structure
 * @type {Schema}
 */
const ProviderSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  climate: {
    type: String,
    required: true
  },
  terrain: {
    type: String,
    required: true
  },
  surface_water: {
    type: String,
    required: true
  },
  residents: {
    type: Array
  },
  products: {
    type: Array
  },
  url: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Provider', ProviderSchema)
