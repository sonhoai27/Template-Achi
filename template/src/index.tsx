import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Index from './modules/App';
import { Provider } from 'react-redux';
import initStore from './config/store';
import 'babel-polyfill'
const store = initStore()
ReactDOM.render(
    <Provider store={store}>
        <Index />
    </Provider>,
  document.getElementById('root') as HTMLElement
);