/**
 * Created by Amir on 02/8/17.
 */
import * as types from '../actions/actionTypes';

const initialState = {};

export default function portfolioReducers(state = initialState, action) {
    switch (action.type) {
        case types.LOAD_PORTFOLIO_SUCCESS:
            return Object.assign({}, state, {
                items: action.items
                }
            );
        default:
            return state
    }
}