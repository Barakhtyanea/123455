import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  fetchPeople, fetchFailure, fetchRequest, fetchSuccess, removeElements,
} from '../Store/actions/RootActions';
import Table from '../Components/Table';


const peopleLabels = {
  labelName: 'Name',
  labelElementTwo: 'Birth year',
  labelElementThree: 'Eye color',
  labelElementFour: 'Hair color',
};

class People extends Component {
  componentDidMount() {
    this.props.fetchPeople();
  }


  render() {
    return (
      <Table {...this.props} labels={peopleLabels} />
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
  fetchPeople: () => dispatch(fetchPeople()),
}
);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(People));
