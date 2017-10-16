import admin from 'firebase-admin';
import sa from './sa';

admin.initializeApp({
  credential: admin.credential.cert(sa),
});

const database = admin.firestore();

export const authenticationServer = admin;

export default database;
