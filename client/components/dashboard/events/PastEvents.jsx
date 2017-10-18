import R from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as eventActionCreators from '../../../actions/eventActions';
import * as locationActionCreators from '../../../actions/locationActions';

import ControlFields from './ControlFields';
import GenericTopBar from '../../common/GenericAppBar';
import DataTable from './DataTable';

import './events.css';
import colors from '../../../styles/colors';
import { CircularProgress, FlatButton } from 'material-ui';

const propTypes = {
  eventActions: PropTypes.object.isRequired,
  locationActions: PropTypes.object.isRequired,
  locations: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

class PastEvents extends React.Component {
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

  getCountries = () => {
    const { locations } = this.props;

    return R.uniqBy(data => data.country, locations)
      .map(location => location.country)
      .reverse();
  };

  getStates = () => {
    const { locations } = this.props;
    const { selected } = this.state;
    const overseas = selected.country === 1;

    return overseas
      ? []
      : R.compose(
          R.uniqBy(data => data),
          R.filter(data => data !== ''),
          R.map(location => location.state),
          R.sortWith([R.ascend(R.prop('state'))]),
        )(locations);
  };

  getCities = () => {
    const { locations } = this.props;
    const { selected } = this.state;
    const overseas = selected.country === 1;

    const states = this.getStates();

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
    return overseas ? cities : ['All', ...cities];
  };

  onSearch = selected => {
    const { eventActions } = this.props;

    const countries = this.getCountries();
    const states = this.getStates();
    const cities = this.getCities();

    const country = countries[selected.country];
    const state = states[selected.state];
    const city = cities[selected.city];

    eventActions.retrieveEvents({
      historical: true,
      country,
      state,
      city,
    });
  };

  onChange = (event, index, payload) => {
    const { selected } = this.state;

    const property = payload.name;
    selected[property] = payload.value;

    if (property === 'state') {
      selected.city = 0;
    }

    if (property === 'country') {
      selected.city = 0;
      selected.state = 0;
    }

    this.onSearch(selected);
    return this.setState({ selected });
  };

  render() {
    const { events, loading } = this.props;
    const { selected } = this.state;

    const overseas = selected.country === 1;
    const countries = this.getCountries();
    const states = this.getStates();
    const cities = this.getCities();

    const eventsComponent = !loading
      ? <DataTable events={events} />
      : <CircularProgress />;

    return (
      <div styleName="container">
        <GenericTopBar color={colors.brand.orange} title="Past Events" />
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
            <div styleName="button-container">
              <FlatButton
                primary
                label="search"
                onClick={() => this.onSearch(selected)} //eslint-disable-line react/jsx-no-bind
              />
            </div>
          </div>
          <div styleName="table-container">
            {eventsComponent}
          </div>
        </div>
      </div>
    );
  }
}

PastEvents.propTypes = propTypes;

const mapStateToProps = state => {
  return {
    locations: state.locations,
    events: state.events,
    loading: state.loading.events,
  };
};

const mapDispatchToProps = dispatch => ({
  eventActions: bindActionCreators(eventActionCreators, dispatch),
  locationActions: bindActionCreators(locationActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PastEvents);
