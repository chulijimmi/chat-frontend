import server from '../../config/server';

const logger = (store) => (next) => (action) => {
  server.info('dispatching', action);
  let result = next(action);
  server.debug('next state', store.getState());
  return result;
};

export default logger;
