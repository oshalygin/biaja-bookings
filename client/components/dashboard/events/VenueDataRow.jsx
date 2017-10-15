import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableRowColumn } from 'material-ui';

import EmailDataRowColumn from './EmailDataRowColumn';

const propTypes = {
  event: PropTypes.shape({
    date: PropTypes.string.isRequired,
    venue: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    state: PropTypes.string,
    city: PropTypes.string.isRequired,
  }),
};

const VenueDataRow = ({ event }) => {
  const state = event.state ? event.state : '-';
  return (
    <TableRow style={{ lineHeight: '48px' }}>
      <TableRowColumn style={{ fontWeight: '600' }}>
        {'$'.repeat(event.price)}
      </TableRowColumn>
      <TableRowColumn>
        {event.venue}
      </TableRowColumn>
      <TableRowColumn>
        {event.city}
      </TableRowColumn>
      <TableRowColumn>
        {state}
      </TableRowColumn>
      <TableRowColumn>
        {event.country}
      </TableRowColumn>
      <TableRowColumn>
        {event.phone}
      </TableRowColumn>
      <TableRowColumn>
        <EmailDataRowColumn emails={event.contactEmails} />
      </TableRowColumn>
    </TableRow>
  );
};
VenueDataRow.propTypes = propTypes;

export default VenueDataRow;
