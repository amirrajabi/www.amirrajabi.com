import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App';
import configureStore from './store/configureStore';
import { loadMenuItems } from './actions/mainMenuActions';
import { loadPortfolios } from './actions/portfolioActions';
import registerServiceWorker from './registerServiceWorker';

import './containers/styles/index.css';

const store = configureStore();
store.dispatch(loadMenuItems());
store.dispatch(loadPortfolios());

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>, document.getElementById('root'));
registerServiceWorker();
