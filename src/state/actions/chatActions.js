export const JOIN_ROOM = 'JOIN_ROOM';
export const LEAVE_ROOM = 'JOIN_ROOM';
export const CONVERSATION_ROOM = 'CONVERSATION_ROOM';
export const ONLINE_USER = 'ONLINE_USER';

/**
 * Join room action to update the state chat
 * @param {string} roomName
 * @returns {void}
 */
export const joinRoomActions = (roomName) => {
  return {
    type: JOIN_ROOM,
    payload: { roomName },
  };
};

/**
 * Leave room name action to update state chat
 * @param {string} roomName
 * @returns {void}
 */
export const leaveRoom = (roomName) => {
  return {
    type: LEAVE_ROOM,
    payload: { roomName },
  };
};

/**
 * Update conversation action to update state chat conversation
 * This action user immer procedure
 * @param {string} from
 * @param {string} message
 * @return {void}
 */
export const updateConversation = (from, message, create) => {
  return {
    type: CONVERSATION_ROOM,
    payload: { from, message, createdAt: create | new Date() },
  };
};

/**
 *
 */
export const updateOnlineUser = (data) => {
  return {
    type: ONLINE_USER,
    payload: data,
  };
};
