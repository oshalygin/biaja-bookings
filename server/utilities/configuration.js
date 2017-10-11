/* eslint-disable no-process-env */

export default {
  environment: process.env.NODE_ENV,
  port: process.env.PORT || 8080,

  authSecret: process.env.AUTH_SECRET || '78N0^$nt@s3ls4afPR1%8&',
  authTokenExpiration: process.env.AUTH_TOKEN_EXPIRATION || '7d',

  googleOauthScopes: ['email', 'openid', 'profile'],

  firebaseApiKey:
    process.env.FIREBASE_API_KEY || 'AIzaSyD8igDeGSSWzE0Q1HZLMDtOX_9zqxT6jXw',
  firebaseAuthDomain:
    process.env.FIREBASE_AUTH_DOMAIN || 'biaja-bookings.firebaseapp.com',
  firebaseDatabaseUrl:
    process.env.FIREBASE_DATABASE_URL ||
    'https://biaja-bookings.firebaseio.com',
  firebaseProjectId: process.env.FIREBASE_PROJECT_ID || 'biaja-bookings',
  firebaseStorageBucket:
    process.env.FIREBASE_STORAGE_BUCKET || 'biaja-bookings.appspot.com',
  firebaseMessagingSenderId:
    process.env.FIREBASE_MESSAGING_SENDER_ID || '985008750659',
};
