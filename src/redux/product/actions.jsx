import * as types from './types';
import ProductApi from '../../api/product';

function loadingProducts() {
    return {
        type: types.LOADING_PRODUCTS
    }
}

function loadProductSuccess(products) {
    return {
        type: types.LOAD_PRODUCT_SUCCESS,
        products
    }
}

export function loadProducts(pageNumber) {
    return function (dispatch) {
        dispatch(loadingProducts());
        return ProductApi.getProducts(pageNumber).then(products => {
            dispatch(loadProductSuccess(products));
        });
    };
}