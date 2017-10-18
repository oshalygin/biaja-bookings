import express from 'express';
import path from 'path';
import configuration from './utilities/configuration';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import logger from './utilities/logger';

import db from './dataAccess/db';

import v1router from './routes/routes-v1';

const application = express();

application.use(bodyParser.urlencoded({ extended: true }));
application.use(bodyParser.json());
application.use(cookieParser());

const port = configuration.port;

application.use(logger.requestLogger);
application.use('/api/v1', v1router);
application.use(express.static(path.join(__dirname, '../dist-client')));

application.get('*', (request, response) => {
  const clientEntryPoint = path.join(__dirname, '../dist-client/index.html');
  response.sendFile(clientEntryPoint);
});

db
  .connect()
  .then(nativeConnection => db.connectedOutput(nativeConnection))
  .catch(error => console.log(error));

application.listen(port, error => {
  if (error) {
    console.error(error);
  }
  console.info(`Serving application over port ${port}`);
});

export default application;
