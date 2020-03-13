import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  fetchPeople, fetchFailure, fetchRequest, fetchSuccess, removeElements,
} from '../Store/actions/RootActions';
import EnhancedTable from '../Components/PeopleTable';


class People extends Component {
  componentDidMount() {
    this.props.fetchPeople();
  }


  render() {
    return (
      <EnhancedTable {...this.props} />
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
  removeElements: () => dispatch(removeElements()),
}
);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(People));
