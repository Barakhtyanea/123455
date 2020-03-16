import { v4 as uuidv4 } from 'uuid';
import * as _ from 'lodash';
import {
  FETCH_REQUEST, FETCH_FAILURE, FETCH_SUCCESS, REMOVE_ELEMENTS, EDIT_ELEMENT, ADD_NEW_ELEMENT,
} from '../../Constants/ActionTypes';


export default function rootReducer(state, action) {
  switch (action.type) {
    case REMOVE_ELEMENTS:
      return {
        ...state,
        data: _.filter(state.data, (value) => (action.keysToDelete.indexOf(value.key) === -1)),
      };

    case EDIT_ELEMENT:
      const editData = _.findIndex(state.data, (value) => value.key === action.changedObject.key);
      const newEditData = state.data.slice(0);
      newEditData[editData] = { ...action.changedObject };
      return {
        ...state,
        data: newEditData,
      };

    case ADD_NEW_ELEMENT:
      const actualArray = [{
        firstValue: action.firstValue,
        secondValue: action.secondValue,
        thirdValue: action.thirdValue,
        fourthValue: action.fourthValue,
        key: uuidv4(),
      }].concat(state.data);
      console.log('ACTUAL', actualArray);
      return {
        ...state,
        data: actualArray
      };

    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.map((value) => ({ ...value, key: uuidv4() })),
        error: '',
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        name: [],
        error: action.payload,
      };
    default:
      return state;
  }
}
