import firebase from 'firebase';

import configuration from '../utilities/configuration';

const config = {
  apiKey: configuration.firebaseApiKey,
  authDomain: configuration.firebaseAuthDomain,
  databaseURL: configuration.firebaseDatabaseUrl,
  projectId: configuration.firebaseProjectId,
  storageBucket: configuration.firebaseStorageBucket,
  messagingSenderId: configuration.firebaseMessagingSenderId,
};

firebase.initializeApp(config);

export default firebase;
