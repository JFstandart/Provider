/**
 * Export configuration values
 * @exports config
 */
module.exports = {
  'ENV': 'dev', /** @default 'dev' */
  'PORT': '3000', /** @default 3000 */
  'DATABASE': { /** @type {object} */
    'DB_PREFIX': 'mongodb://', /** @default 'mongodb://' */
    'DB_USERNAME': '', /** @default '' */
    'DB_PASSWORD': '', /** @default '' */
    'DB_HOST': 'localhost', /** @default 'localhost' */
    'DB_PORT': ':27017', /** @default ':27017' */
    'DB_NAME': '/StudioGhibli' /** @default '/Test' */
  }
}
