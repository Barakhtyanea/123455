import { v4 as uuidv4 } from 'uuid';
import * as _ from 'lodash';
import {
  FETCH_REQUEST, FETCH_FAILURE, FETCH_SUCCESS, REMOVE_ELEMENTS, EDIT_ELEMENT, ADD_NEW_ELEMENT,
} from '../actions/ActionTypes';


export default function rootReducer(state, action) {
  switch (action.type) {
    case REMOVE_ELEMENTS:
      const newData = _.filter(state.data, (value) => (action.keysToDelete.indexOf(value.key) == -1));
      return {
        ...state,
        data: newData,
      };

    case EDIT_ELEMENT:
      // const editedData =
      //   return {
      //   ...state,
      //     data: editedData,
      //   };


    case ADD_NEW_ELEMENT:
      const newArray = [{
        name: '', birth_year: 0, eye_color: '', hair_color: '',
      }];
      const actualArray = newArray.concat(state.data);
      return {
        ...state,
        data: actualArray.map((value) => ({ ...value, key: uuidv4() })),
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
