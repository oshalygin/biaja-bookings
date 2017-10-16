import jwt from 'jsonwebtoken';
import db, { authenticationServer } from '../dataAccess/database';
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
  const usersCollection = db.collection('users');

  const document = await usersCollection.doc(userId).set({
    email,
    password,
    firstName,
    lastName,
    isVerified: false,
    createdDate: new Date().valueOf(),
  });

  return setJwtToken({ id: document.id, email, isVerified: true });
}

async function login(email, password) {
  const userRecord = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);

  const userId = userRecord.toJSON().uid;

  const userDocumentReference = db.collection('users').doc(userId);
  const userDocument = await userDocumentReference.get();
  const user = userDocument.data();

  await userDocumentReference.update({ password });

  return setJwtToken({ id: userId, email, isVerified: user.isVerified });
}

const authService = {
  setJwtToken,
  register,
  login,
};

export default authService;
