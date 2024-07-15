export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_FILTER = 'SET_FILTER';

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product
});

export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId
});

export const setProducts = (products) => ({
    type: SET_PRODUCTS,
    payload: products
});

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter
});