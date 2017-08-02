/**
 * Created by Amir on 02/8/17.
 */
import * as types from './actionTypes';
import portfolioAPI from '../api/mockPortfoliosApi';

export function loadPortfoliosSuccess( items ) {
    return { type: types.LOAD_PORTFOLIO_SUCCESS, items}
}

export function loadPortfolios() {
    return function (dispatch) {
        return portfolioAPI.getAllPortfolio().then( items => {
            dispatch(loadPortfoliosSuccess(items));
        }).catch( error => {
            throw(error);
        })
    }
}