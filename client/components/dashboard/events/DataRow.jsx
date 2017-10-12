import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableRowColumn } from 'material-ui';

import dateUtilities from '../../../utilities/dateUtilities';

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

const DataRow = ({ event }) => {
  const state = event.state ? event.state : '-';
  return (
    <TableRow style={{ lineHeight: '48px' }}>
      <TableRowColumn style={{ fontWeight: '600' }}>
        {dateUtilities.setDisplayDate(event.date)}
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
        {event.artist}
      </TableRowColumn>
      <TableRowColumn>
        {event.eventType}
      </TableRowColumn>
    </TableRow>
  );
};
DataRow.propTypes = propTypes;

export default DataRow;
