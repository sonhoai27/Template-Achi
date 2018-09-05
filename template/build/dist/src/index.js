import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Index from './modules/App';
import { Provider } from 'react-redux';
import initStore from './config/store';
var store = initStore();
ReactDOM.render(React.createElement(Provider, { store: store },
    React.createElement(Index, null)), document.getElementById('root'));
//# sourceMappingURL=index.js.map