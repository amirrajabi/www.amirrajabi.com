/**
 * Created by Amir on 30/7/17.
 */
import * as types from './actionTypes';

export function mainMenuStatus( status ) {
    return {type: types.MAIN_MENU_STATUS, status}
}