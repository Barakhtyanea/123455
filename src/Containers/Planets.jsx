import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import Table from '../Components/Table';
import {
  fetchFailure, fetchPlanets, fetchRequest, fetchSuccess,
} from '../Store/actions/RootActions';


const planetLabels = {
  labelName: 'Name',
  labelElementTwo: 'Climate',
  labelElementThree: 'Terrain',
  labelElementFour: 'Population',
};

class Planets extends Component {

  componentDidMount() {
    this.props.fetchPlanets();
  }

  render() {
    return (
      <Table {...this.props} labels={planetLabels} />
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
