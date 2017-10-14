/* eslint-disable no-console */
import R from 'ramda';
import axios from 'axios';
import configuration from '../utilities/configuration';

import db from '../dataAccess/database';

const HUNTER_SEARCH_ENDPOINT = `https://api.hunter.io/v2/domain-search?api_key=${configuration.hunterApiKey}`;

async function getEmailContacts(domain) {
  try {
    const encodedDomain = encodeURIComponent(domain);

    const endpoint = `${HUNTER_SEARCH_ENDPOINT}&domain=${encodedDomain}`;
    const { data } = await axios.get(endpoint);

    const topThreeEmails = R.compose(R.map(email => email.value), R.take(3))(
      data.data.emails,
    );
    return topThreeEmails.join(',');
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log(error);
    }

    return '';
  }
}

async function getEmailContactsWithId(document) {
  try {
    const encodedDomain = encodeURIComponent(document.website);

    const endpoint = `${HUNTER_SEARCH_ENDPOINT}&domain=${encodedDomain}`;
    const { data } = await axios.get(endpoint);

    const topThreeEmails = R.compose(R.map(email => email.value), R.take(3))(
      data.data.emails,
    );
    return { id: document.id, contactEmails: topThreeEmails.join(',') };
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log(error);
    }

    return { id: document.id, contactEmails: '' };
  }
}

async function persistEmailForEvents() {
  const eventCollection = db.collection('events');

  const snapshot = await eventCollection.where('contactEmails', '==', '').get();

  if (!snapshot.size) {
    return true;
  }

  let recordsToProcess = [];
  snapshot.forEach(document => {
    const { website } = document.data();
    try {
      recordsToProcess = [...recordsToProcess, { id: document.id, website }];
    } catch (error) {
      console.log(error.response.error);
    }
  });

  let emailDocumentsToProcess = recordsToProcess;
  let hydratedDocuments = [];

  const batchSize = 20;

  while (emailDocumentsToProcess.length > 0) {
    console.log(`emailDocumentsToProcess:${emailDocumentsToProcess.length}`);
    const eventsToHydrate = R.take(batchSize, emailDocumentsToProcess);
    emailDocumentsToProcess = R.drop(batchSize, emailDocumentsToProcess);

    const hydratedEventPromises = eventsToHydrate.map(doc =>
      getEmailContactsWithId(doc),
    );
    const newlyHydratedDocuments = await Promise.all(hydratedEventPromises);
    hydratedDocuments = [...hydratedDocuments, ...newlyHydratedDocuments];
  }

  hydratedDocuments.forEach(async doc => {
    const { id, contactEmails } = doc;
    await eventCollection.doc(id).update({ contactEmails });
  });

  return true;
}

const emailService = {
  getEmailContacts,
  persistEmailForEvents,
  getEmailContactsWithId,
};

export default emailService;
