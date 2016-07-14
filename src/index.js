import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

// store
import store from './Store/store'

// components
// import App from './Components/App';
const App = require('./components/App').default;

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <App history={history} store={store}/>
  </Provider>,
  document.getElementById('root'));

const NextApp = require('./components/App').default;