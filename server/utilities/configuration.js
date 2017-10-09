/* eslint-disable no-process-env */

export default {
  environment: process.env.NODE_ENV,
  port: process.env.PORT || 8080,

  authSecret: process.env.AUTH_SECRET || '78N0^$nt@s3ls4afPR1%8&',
  authTokenExpiration: process.env.AUTH_TOKEN_EXPIRATION || '7d',

  googleOauthScopes: ['email', 'openid', 'profile'],
};
