import produce from 'immer';
import {
  JOIN_ROOM,
  LEAVE_ROOM,
  CONVERSATION_ROOM,
  ONLINE_USER,
} from '../actions/chatActions';

const initialState = {
  joinRoom: '',
  leaveRoom: '',
  conversation: [],
  onlineUser: [],
};

const chatReducers = produce((draft, action) => {
  switch (action.type) {
    case JOIN_ROOM:
      draft.joinRoom = action.payload.roomName;
      break;
    case LEAVE_ROOM:
      draft.leaveRoom = action.payload.roomName;
      break;
    case CONVERSATION_ROOM:
      draft.conversation.push(action.payload);
      break;
    case ONLINE_USER:
      action.payload.forEach((item, index) => {
        draft.onlineUser[index] = item;
      });
      break;
  }
}, initialState);

export default chatReducers;
