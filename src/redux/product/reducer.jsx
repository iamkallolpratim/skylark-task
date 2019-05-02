import * as types from './types';

const initialState = {
    loading: false,
    products: {}
}

export default function ProductReducer(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case types.LOADING_PRODUCTS:
            return {
                ...state,
                loading: true
            }
        case types.LOAD_PRODUCT_SUCCESS:
            return {
                ...state,
                products: action.products,
                loading: false
            }
        default:
            return state;
    }
}