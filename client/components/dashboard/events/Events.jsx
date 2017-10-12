import R from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as eventActionCreators from '../../../actions/eventActions';
import * as locationActionCreators from '../../../actions/locationActions';

import ControlFields from './ControlFields';

import './events.css';
import GenericTopBar from '../../common/GenericAppBar';

const propTypes = {
  eventActions: PropTypes.object.isRequired,
  locationActions: PropTypes.object.isRequired,
  locations: PropTypes.array.isRequired,
};

class Events extends React.Component {
  state = {
    selected: {
      country: 0,
      state: 0,
      city: 0,
    },
  };

  componentWillMount() {
    const { locationActions } = this.props;
    locationActions.retrieveLocations();
  }

  onChange = (event, index, payload) => {
    const { selected } = this.state;

    const property = payload.name;
    selected[property] = payload.value;

    return this.setState({ selected });
  };

  render() {
    const { locations } = this.props;
    const { selected } = this.state;

    const countries = R.uniqBy(data => data.country, locations).map(
      location => location.country,
    );

    const overseas = selected.country === 1;

    const states = overseas
      ? []
      : R.compose(
          R.uniqBy(data => data),
          R.filter(data => data !== ''),
          R.map(location => location.state),
          R.sortWith([R.ascend(R.prop('state'))]),
        )(locations);

    const cities = R.compose(
      R.uniqBy(data => data),
      R.map(data => data.city),
      R.filter(data => {
        if (overseas) {
          return !data.state;
        }

        const selectedState = states.length ? states[selected.state] : '';
        return data.state === selectedState;
      }),
    )(locations);

    return (
      <div styleName="container">
        <GenericTopBar title="Events" />
        <div styleName="events-container">
          <div styleName="controls-container">
            <ControlFields
              countries={countries}
              states={states}
              cities={cities}
              disabledState={overseas}
              selected={selected}
              onChange={this.onChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

Events.propTypes = propTypes;

const mapStateToProps = state => {
  return {
    locations: state.locations,
  };
};

const mapDispatchToProps = dispatch => ({
  eventActions: bindActionCreators(eventActionCreators, dispatch),
  locationActions: bindActionCreators(locationActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);
