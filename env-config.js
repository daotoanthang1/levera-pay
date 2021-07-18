const dev = process.env.NODE_ENV !== 'production'

module.exports = {
  APP_ID: dev ? '226eb5dba26c4e7b986794dc7f6c284c' : '51f470637b474093a6a50e438533f801',
  API_BASE: dev ? 'http://localhost:2099/api' : 'https://levera.pancake.vn/api'
}