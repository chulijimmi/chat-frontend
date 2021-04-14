export const JOIN_ROOM = 'JOIN_ROOM';
export const LEAVE_ROOM = 'JOIN_ROOM';

export const joinRoomActions = (roomName) => {
  return {
    type: JOIN_ROOM,
    payload: { roomName },
  };
};

export const leaveRoom = (roomName) => {
  return {
    type: LEAVE_ROOM,
    payload: { roomName },
  };
};
