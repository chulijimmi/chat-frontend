import { FETCH_DATA } from "../actions/globalActions";

const initialState = {
  loading: false,
  data: null,
};
function globalReducers(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        loading: action.payload.loading,
        data: action.payload.data,
      };

    default:
      return state;
  }
}

export default globalReducers;
