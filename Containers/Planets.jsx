import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MaterialTableDemo from '../Components/Table';
import {
  fetchFailure, fetchPlanets, fetchRequest, fetchSuccess,
} from '../Store/actions/Actions';

class Planets extends Component {
  componentDidMount() {
    this.props.fetchPlanets();
  }

  render() {
    const { data } = this.props;
    return (
      <Route path="/planets">
        <MaterialTableDemo data={data} />
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
