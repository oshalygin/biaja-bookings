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

const propTypes = {
  events: PropTypes.array.isRequired,
};

const DataTable = ({ events }) => {
  return (
    <div>
      <Table
        selectable={false}
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
            <TableHeaderColumn>Event Date</TableHeaderColumn>
            <TableHeaderColumn>Venue</TableHeaderColumn>
            <TableHeaderColumn>City</TableHeaderColumn>
            <TableHeaderColumn>State</TableHeaderColumn>
            <TableHeaderColumn>Country</TableHeaderColumn>
            <TableHeaderColumn>Artist</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event, key) => <DataRow event={event} key={key} />)}
        </TableBody>
      </Table>
    </div>
  );
};

DataTable.propTypes = propTypes;

export default DataTable;
