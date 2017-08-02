import { combineReducers } from 'redux';
import mainMenu from './mainMenuReducers';
import portfolio from './portfolioReducers';

const rootReducer = combineReducers({
    mainMenu,
    portfolio
});

export default rootReducer;

