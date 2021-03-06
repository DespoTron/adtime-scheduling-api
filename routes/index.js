const users = require('./users');
const login = require('./login');
const manager = require('./manager');
const shifts = require('./shifts');
const events = require('./events');
const categories = require('./categories');

module.exports = {
  '/': login,
  '/api/users': users,
  '/manager': manager,
  '/api/shifts': shifts,
  '/api/events': events,
  '/api/categories': categories,
};
