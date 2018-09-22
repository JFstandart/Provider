/**
 * ODM for mongodb
 * @module mongoose
 */
const mongoose = require('mongoose')

/**
 * App configurations
 * @module config
 */
const config = require('./config')

/**
 * mongodb database url
 * @const DBURL
 * @type {string}
 * @default 'mongodb://localhost:27017/Test'
 */
const DBURL = `${config.DATABASE.DB_PREFIX}${config.DATABASE.DB_USERNAME}${config.DATABASE.DB_USERNAME}${config.DATABASE.DB_PASSWORD}${config.DATABASE.DB_HOST}${config.DATABASE.DB_PORT}${config.DATABASE.DB_NAME}`

/**
 * mongodb connection
 * @type {function}
 * @param {string} url - connection url
 * @param {object} options - optional configurations
 * @return Console message
 */
mongoose.connect(DBURL, {useNewUrlParser: true}).then(() => {
  console.log('DB Connection success')
}).catch((err) => {
  console.error('DB Connection error', err)
})

/**
 * A module that connect with Mongodb
 * @exports moongose
 */
module.exports = mongoose
