import { JOIN_ROOM, LEAVE_ROOM } from '../actions/chatActions';

const initialState = {
  joinRoom: '',
  leaveRoom: '',
};
function globalReducers(state = initialState, action) {
  switch (action.type) {
    case JOIN_ROOM:
      return {
        ...state,
        joinRoom: action.payload.roomName,
      };

    case LEAVE_ROOM:
      return {
        ...state,
        leaveRoom: action.payload.roomName,
      };

    default:
      return state;
  }
}

export default globalReducers;
