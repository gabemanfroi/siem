import * as ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import App from './App';
import store from './modules/Shared/store/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
