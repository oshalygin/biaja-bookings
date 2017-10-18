/* eslint-disable no-console */
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

import configuration from '../utilities/configuration';

const connect = () =>
  mongoose.connect(configuration.databaseConnectionString, {
    useMongoClient: true,
  });

const connectedOutput = nativeConnection => {
  const { host, port, name } = nativeConnection;
  console.info(`Database Connected: monogodb://${host}:${port}/${name}`);
};

export default {
  connect,
  connectedOutput,
};
