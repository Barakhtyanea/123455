import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import {
  fetchPeople, fetchFailure, fetchRequest, fetchSuccess, removeElements,
} from '../Store/actions/Actions';
import EnhancedTable from '../Components/Table2';

class People extends Component {
  componentDidMount() {
    this.props.fetchPeople();
  }


  render() {
    return (
      <Route path="/people">
        <EnhancedTable {...this.props} />
      </Route>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(People);
