import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderColumn,
  TableBody,
} from 'material-ui';
import VenueDataRow from './VenueDataRow';

import colors from '../../../styles/colors';
import './events.css';

const propTypes = {
  events: PropTypes.array.isRequired,
};

const VenueDataTable = ({ events }) => {
  return (
    <div style={{ width: '100%' }}>
      <div styleName="table">
        <Table
          style={{ tableLayout: 'auto' }}
          selectable={false}
          fixedHeader={false}
          style={{
            backgroundColor: colors.neutral.lightGray,
          }}
        >
          <TableHeader
            enableSelectAll={false}
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>Yelp Cost Rating</TableHeaderColumn>
              <TableHeaderColumn style={{ width: '20em' }}>Venue</TableHeaderColumn>
              <TableHeaderColumn>City</TableHeaderColumn>
              <TableHeaderColumn>State</TableHeaderColumn>
              <TableHeaderColumn>Country</TableHeaderColumn>
              <TableHeaderColumn>Phone Number</TableHeaderColumn>
              <TableHeaderColumn style={{ width: '20em' }}>
                Email Contact
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event, key) =>
              <VenueDataRow event={event} key={key} />,
            )}
          </TableBody>
        </Table>
      </div>
      <div styleName="mobile-table">
        <div styleName="mobile-table-row">
          <div styleName="mobile-table-header">Cost</div>
          <div styleName="mobile-table-header">Venue</div>
          <div styleName="mobile-table-header">Phone</div>
        </div>
        {events.map((event, key) => {
          return (
            <div styleName="mobile-table-row" key={key}>
              <div styleName="mobile-table-cell">
                {event.price}
              </div>
              <div styleName="mobile-table-cell">
                {event.venue}
              </div>
              <div styleName="mobile-table-cell">
                {event.phone}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

VenueDataTable.propTypes = propTypes;

export default VenueDataTable;
