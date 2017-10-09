import configuration from '../../server/utilities/configuration';

(() => {
  if (configuration.environment === 'production') {
    //eslint-disable-line no-process-env
    module.exports = require('./store.production.js');
  } else {
    module.exports = require('./store.dev.js');
  }
})();
