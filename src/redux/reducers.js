import { combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART, SET_PRODUCTS, SET_FILTER } from './actions';

const initialProductsState = {
    products: [],
    filter: ''
};

const productsReducer = (state = initialProductsState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload
            };
        default:
            return state;
    }
};

const initialCartState = {
    cart: []
};

const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
});

export default rootReducer;