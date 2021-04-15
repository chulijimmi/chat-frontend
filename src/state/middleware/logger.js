import server from '../../config/server';

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  server.debug('next state', store.getState());
  console.groupEnd();
  return result;
};

export default logger;
