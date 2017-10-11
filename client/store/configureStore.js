import configuration from '../../server/utilities/configuration';

if (configuration.environment === 'production') {
  module.exports = require('./store.production.js');
} else {
  module.exports = require('./store.dev.js');
}
