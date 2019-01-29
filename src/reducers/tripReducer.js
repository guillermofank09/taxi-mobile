import { SET_TRIP } from '../actions/tripActions';

const initialState = {
  trip: null
};

const tripReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_TRIP:
      return {
        ...state,
        trip: action.payload
      };
    default:
      return state;
  }
}

export default tripReducer;
