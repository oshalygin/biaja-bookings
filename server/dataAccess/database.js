import admin from 'firebase-admin';
const serviceAccount = require('./service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const database = admin.firestore();

export default database;
