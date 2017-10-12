import admin from 'firebase-admin';
import sa from './sa';

// const credentials = JSON.stringify(sa);

admin.initializeApp({
  credential: admin.credential.cert(sa),
});

const database = admin.firestore();

export default database;
