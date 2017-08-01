/**
 * Created by Amir on 30/7/17.
 */
import * as types from '../actions/actionTypes';

const initialState = {
    status: false,
    items: []
};

export default function mainMenuReducers(state = initialState, action) {
    switch (action.type) {
        case types.MAIN_MENU_STATUS:
            return Object.assign({}, state, {
                    status: !state.status
                }
            );
        case types.LOAD_MENU_ITEMS_SUCCESS:
            return Object.assign({}, state, {
                    items: action.items
                }
            );
        // case 'MAIN_MENU_STATUS':
        //     debugger;
        //     return [
        //         ...state,
        //         Object.assign({}, !action.mainMenuStatus)
        //     ];
        default:
            return state;
    }
}