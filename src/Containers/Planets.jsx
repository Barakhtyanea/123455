import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Table from '../Components/Table';
import {
  fetchFailure, fetchPlanets, fetchRequest, fetchSuccess,
} from '../Store/actions/RootActions';


const label = {
  labelName: 'Name',
  labelElementTwo: 'Climate',
  labelElementThree: 'Terrain',
  labelElementFour: 'Population',
};

const value = {
  valueOne: 'name',
  valueTwo: 'climate',
  valueThree: 'terrain',
  valueFour: 'population',
};

class Planets extends Component {

  componentDidMount() {
    this.props.fetchPlanets();
    console.log();
  }

  render() {
    return (
      <Table {...this.props} labels={label} values={value} />
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRequest: () => dispatch(fetchRequest()),
  fetchSuccess: () => dispatch(fetchSuccess()),
  fetchFailure: () => dispatch(fetchFailure()),
  fetchPlanets: () => dispatch(fetchPlanets()),
}
);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Planets));
