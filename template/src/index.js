import * as React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { App, appReducer } from './app';

export const store = createStore(appReducer, applyMiddleware(thunk));

class Stage extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Stage />
  </React.StrictMode>,
  document.getElementById('root')
);
