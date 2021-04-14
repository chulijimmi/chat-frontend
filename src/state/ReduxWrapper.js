import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

// eslint-disable-next-line react/display-name,react/prop-types
function ReduxWrapper({ element }) {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = configureStore();
  return <Provider store={store}>{element}</Provider>;
}

export default ReduxWrapper;
