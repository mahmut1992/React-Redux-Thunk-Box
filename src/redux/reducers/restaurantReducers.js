import actionTypes from "../actionType";

const initialState = {
  restaurants: [],
  isLoading: false,
  error: null,
};

const restaurantReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REST_LOADING:
      return { ...state, isLoading: true };
    case actionTypes.REST_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case actionTypes.REST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        restaurants: action.payload,
      };
    default:
      return state;
  }
};

export default restaurantReducers;
