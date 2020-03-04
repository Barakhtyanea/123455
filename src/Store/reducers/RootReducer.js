import { v4 as uuidv4 } from 'uuid';
import {FETCH_REQUEST, FETCH_FAILURE, FETCH_SUCCESS, REMOVE_ELEMENTS} from '../actions/ActionTypes';


export default function rootReducer(state, action) {
  switch (action.type) {
    case REMOVE_ELEMENTS:
      const newData = _.filter(state.data, (value) => {
        return (action.keysToDelete.indexOf(value.key) == -1)
      })
      return {
        ...state,
        data: newData,
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
