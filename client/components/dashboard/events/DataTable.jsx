import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderColumn,
  TableBody,
} from 'material-ui';
import DataRow from './DataRow';

import colors from '../../../styles/colors';
import './events.css';
import dateUtilities from '../../../utilities/dateUtilities';

const propTypes = {
  events: PropTypes.array.isRequired,
};

const DataTable = ({ events }) => {
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
          bodyStyle={{ overflow: 'visible' }}
        >
          <TableHeader
            enableSelectAll={false}
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>Event Date</TableHeaderColumn>
              <TableHeaderColumn>Venue</TableHeaderColumn>
              <TableHeaderColumn>City</TableHeaderColumn>
              <TableHeaderColumn>State</TableHeaderColumn>
              <TableHeaderColumn>Country</TableHeaderColumn>
              <TableHeaderColumn>Artist</TableHeaderColumn>
              <TableHeaderColumn>Type</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event, key) => <DataRow event={event} key={key} />)}
          </TableBody>
        </Table>
      </div>
      <div styleName="mobile-table">
        <div styleName="mobile-table-row">
          <div styleName="mobile-table-header">Event Date</div>
          <div styleName="mobile-table-header">Venue</div>
          <div styleName="mobile-table-header">Artist</div>
        </div>
        {events.map((event, key) => {
          return (
            <div styleName="mobile-table-row" key={key}>
              <div styleName="mobile-table-cell">
                {dateUtilities.setDisplayDate(event.date)}
              </div>
              <div styleName="mobile-table-cell">
                {event.venue}
              </div>
              <div styleName="mobile-table-cell">
                {event.artist}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

DataTable.propTypes = propTypes;

export default DataTable;
