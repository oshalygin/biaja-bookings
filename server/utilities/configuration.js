/* eslint-disable max-len */
/* eslint-disable no-process-env */

export default {
  environment: process.env.NODE_ENV,
  port: process.env.PORT || 8080,

  authSecret: process.env.AUTH_SECRET || '123123',
  authTokenExpiration: process.env.AUTH_TOKEN_EXPIRATION || '7d',
  databaseConnectionString:
    process.env.DB_CONNECTION_STRING ||
    '',

  googleOauthScopes: ['email', 'openid', 'profile'],

  firebaseApiKey:
    process.env.FIREBASE_API_KEY || '',
  firebaseAuthDomain:
    process.env.FIREBASE_AUTH_DOMAIN || '',
  firebaseDatabaseUrl:
    process.env.FIREBASE_DATABASE_URL ||
    '',
  firebaseProjectId: process.env.FIREBASE_PROJECT_ID || '',
  firebaseStorageBucket:
    process.env.FIREBASE_STORAGE_BUCKET || '',
  firebaseMessagingSenderId:
    process.env.FIREBASE_MESSAGING_SENDER_ID || '4',

  yelpClientId: process.env.YELP_CLIENT_ID || '',
  yelpClientSecret:
    process.env.YELP_CLIENT_SECRET ||
    '',

  hunterApiKey: '',
  hunterRequestBatchSize: 50,
};
