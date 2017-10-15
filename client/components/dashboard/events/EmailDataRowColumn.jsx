import React from 'react';
import PropTypes from 'prop-types';

import './events.css';

const propTypes = {
  emails: PropTypes.string,
};

const EmailDataRowColumn = ({ emails }) => {
  if (!emails) {
    return <div />;
  }

  const emailCollection = emails.split(',');
  return (
    <div style={{ paddingBottom: '2em' }}>
      {emailCollection.map((email, key) =>
        <div styleName="email-data-cell" key={key}>
          {email}
        </div>,
      )}
    </div>
  );
};

EmailDataRowColumn.propTypes = propTypes;

export default EmailDataRowColumn;
