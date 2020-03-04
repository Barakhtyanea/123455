import thunk from 'redux-thunk';
import axios from 'axios';

import {
  FETCH_FAILURE, FETCH_SUCCESS, FETCH_REQUEST, REMOVE_ELEMENTS,
} from './ActionTypes';

export const removeElements = (keys) => {
  console.log('action', keys)
  return {
    type: REMOVE_ELEMENTS,
    keysToDelete: keys,
  }};

export const fetchRequest = () => ({
  type: FETCH_REQUEST,
});


export const fetchSuccess = (res) => ({
  type: FETCH_SUCCESS,
  payload: res,
}
);

export const fetchFailure = (error) => ({
  type: FETCH_FAILURE,
  payload: error,
});


export const fetchPeople = () => (dispatch) => {
  dispatch(fetchRequest());
  axios.get('https://cors-anywhere.herokuapp.com/https://swapi.co/api/people')
    .then((response) => {
      console.log('People', response.data.results);
      dispatch(fetchSuccess(response.data.results));
    })
    .catch((error) => {
      dispatch(fetchFailure(error.message));
    });
};

export const fetchPlanets = () => (dispatch) => {
  dispatch(fetchRequest());
  axios.get('https://cors-anywhere.herokuapp.com/https://swapi.co/api/planets')
    .then((response) => {
      console.log('Planets', response.data.results);
      dispatch(fetchSuccess(response.data.results));
    })
    .catch((error) => {
      dispatch(fetchFailure(error.message));
    });
};
