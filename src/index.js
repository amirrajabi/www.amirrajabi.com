import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { loadMenuItems } from './actions/mainMenuActions';
import registerServiceWorker from './registerServiceWorker';

import './containers/styles/index.css';

const store = configureStore();
store.dispatch(loadMenuItems());

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>, document.getElementById('root'));
registerServiceWorker();
