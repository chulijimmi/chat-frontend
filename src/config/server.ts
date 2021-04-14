import socketIOClient from 'socket.io-client';
const server = 'http://localhost:5000';
const room = socketIOClient(`${server}/room`);
const api = `${server}/api`;
const debug = (stage, log) => {
  return process.env.NODE_ENV === 'development'
    ? console.log(stage, log)
    : null;
};

export default {
  room,
  api,
  debug,
};
