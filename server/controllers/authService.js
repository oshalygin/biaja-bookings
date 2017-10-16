import jwt from 'jsonwebtoken';
import db, { authenticationServer } from '../dataAccess/database';

import configuration from '../utilities/configuration';

function setJwtToken(user) {
  const { id, email, isVerified } = user;
  const jwtPayload = {
    id,
    email,
    isVerified,
  };

  return jwt.sign(jwtPayload, configuration.authSecret, {
    expiresIn: configuration.authTokenExpiration,
  });
}

async function register(email, password, firstName, lastName) {
  await authenticationServer.auth().createUser({
    email,
    password,
    displayName: `${firstName} ${lastName}`,
  });

  const usersCollection = db.collection('users');

  const document = await usersCollection.add({
    email,
    password,
    firstName,
    lastName,
    createdDate: new Date().valueOf(),
  });

  return setJwtToken({ id: document.id, email, isVerified: true });
}

const authService = {
  setJwtToken,
  register,
};

export default authService;
