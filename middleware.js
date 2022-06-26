const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

//state
const initialProductsState = {
    products: ["Iphone", "Huawei"],
    productLengths: 2,
}

//action
const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}

const addProduct = (value) => {
    return {
        type: ADD_PRODUCT,
        payload: value
    }
}

//reducer
const productReducer = (state = initialProductsState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            }
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                productLengths: state.productLengths + 1
            }
        default:
            return state;
    }
}

//store
const store = createStore(productReducer, applyMiddleware(logger));

store.subscribe(() => {
    console.log(store.getState())
})


store.dispatch(getProducts())
store.dispatch(addProduct("Samsung"))