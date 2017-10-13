/* eslint-disable no-console */
import R from 'ramda';
import axios from 'axios';
import configuration from '../utilities/configuration';

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

const emailService = {
  getEmailContacts,
};

export default emailService;
