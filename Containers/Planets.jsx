import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import EnhancedPlanetTable from '../Components/PlanetTable';
import {
  fetchFailure, fetchPlanets, fetchRequest, fetchSuccess,
} from '../Store/actions/Actions';

class Planets extends Component {
  componentDidMount() {
    this.props.fetchPlanets();
  }

  render() {
    return (
      <Route path="/planets">
        <EnhancedPlanetTable {...this.props} />
      </Route>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    data: state.data,
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchRequest: () => dispatch(fetchRequest()),
  fetchSuccess: () => dispatch(fetchSuccess()),
  fetchFailure: () => dispatch(fetchFailure()),
  fetchPlanets: () => dispatch(fetchPlanets()),
}
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Planets);
