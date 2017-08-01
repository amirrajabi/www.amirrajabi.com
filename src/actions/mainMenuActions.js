/**
 * Created by Amir on 30/7/17.
 */
import * as types from './actionTypes';
import menuAPI from '../api/mockMenuItemsApi';

export function mainMenuStatus( status ) {
    return {type: types.MAIN_MENU_STATUS, status}
}

export function loadMenuItemsSuccess( items ) {
    return {type: types.LOAD_MENU_ITEMS_SUCCESS, items}
}

export function loadMenuItems() {
    return function (dispatch) {
        return menuAPI.getAllItems().then( items => {
            dispatch(loadMenuItemsSuccess(items));
        }).catch(error => {
            throw(error);
        });
    };
}