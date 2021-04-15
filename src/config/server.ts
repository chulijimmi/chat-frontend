import socketIOClient from 'socket.io-client';
const server =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : 'https://chat-backend-jimmi.herokuapp.com';
const room = socketIOClient(`${server}/room`);
const api = `${server}/api`;
const debug = (stage, log) => {
  return process.env.NODE_ENV === 'development'
    ? console.log(stage, log)
    : null;
};

const info = (stage, log) => {
  return process.env.NODE_ENV === 'development'
    ? console.info(stage, log)
    : null;
};

export default {
  room,
  api,
  debug,
  info,
};
