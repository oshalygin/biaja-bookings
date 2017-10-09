/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import webpack from 'webpack';
import configuration from './utilities/configuration';
import webpackConfiguration from '../webpack.config.dev';
import logger from './utilities/logger';

// import authService from './services/authService';
import v1router from './routes/routes-v1';

const port = configuration.port;

const application = express();
application.use(bodyParser.urlencoded({ extended: true }));
application.use(bodyParser.json());
application.use(cookieParser());

// authService.initializePassportStrategies(application);

const applicationCompiler = webpack(webpackConfiguration);
application.use(
  require('webpack-dev-middleware')(applicationCompiler, {
    noInfo: true,
    publicPath: webpackConfiguration.output.publicPath,
  }),
);

application.use(require('webpack-hot-middleware')(applicationCompiler));

application.use(logger.requestLogger);
application.use('/api/v1', v1router);

// Handle all calls to the /api route that do not have a resource behind it
application.all('/api/*', (request, response) => {
  response.status(404).send('Not found');
});

application.use('/client', express.static(path.join(__dirname, '../client')));

application.use(logger.requestLogger);
application.get('*', (request, response) => {
  const fileName = path.join(applicationCompiler.outputPath, 'index.html');

  applicationCompiler.outputFileSystem.readFile(fileName, (error, result) => {
    response.set('content-type', 'text/html');
    response.send(result);
    response.end();
  });
});

application.listen(port, error => {
  if (error) {
    console.error(error);
  }
  console.info(`Serving API from http://localhost:${port}`);
});

export default application;
