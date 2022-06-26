const { createStore, combineReducers } = require("redux");

//productReducer
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

//cartReducer
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEM = " ADD_CART_ITEM";

//state
const initiaLCartState = {
    cartProducts: ['Huawei'],
    cartProductLengths: 1,
}

//action
const getCartItems = () => {
    return {
        type: GET_CART_ITEMS
    }
}

const addCartItem = (value) => {
    return {
        type: ADD_CART_ITEM,
        payload: value
    }
}

//reducer
const cartReducer = (state = initiaLCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state
            }
        case ADD_CART_ITEM:
            return {
                cartProducts: [...state.cartProducts, action.payload],
                cartProductLengths: state.cartProductLengths + 1
            }
        default:
            return state;
    }
}

//root reducer
const rootReducers = combineReducers({
    products: productReducer,
    cartProducts: cartReducer
})


//store
const store = createStore(rootReducers);

store.subscribe(() => {
    console.log(store.getState())
})


store.dispatch(getProducts())
store.dispatch(addProduct("Samsung"))


store.dispatch(getCartItems())
store.dispatch(addCartItem("Iphone"))

