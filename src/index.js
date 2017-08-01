import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { loadMenuItems } from './actions/mainMenuActions';
import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';

const store = configureStore();
store.dispatch(loadMenuItems());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
