import jwt from 'jsonwebtoken';
import { authenticationServer } from '../dataAccess/database';
import usersDAL from '../dataAccess/usersDAL';
import firebase from '../dataAccess/firebase';

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
  const userObject = await authenticationServer.auth().createUser({
    email,
    password,
    displayName: `${firstName} ${lastName}`,
  });

  const userId = userObject.toJSON().uid;

  const user = await usersDAL.save({
    authId: userId,
    email,
    password,
    firstName,
    lastName,
    isVerified: true,
    createdDate: new Date().valueOf(),
  });

  return setJwtToken({ authId: userId, email, isVerified: user.isVerified });
}

async function login(email, password) {
  const userRecord = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);

  const userId = userRecord.toJSON().uid;

  const user = await usersDAL.findAndUpdatePassword({
    authId: userId,
    password,
  });

  return setJwtToken({ id: userId, email, isVerified: user.isVerified });
}

const authService = {
  setJwtToken,
  register,
  login,
};

export default authService;
