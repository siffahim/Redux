const { createStore } = require("redux");

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET'

//state
const initialState = {
    count: 0,
    amount: 0,
    users: [],
    admin: []
}


//action
const incrementAction = () => {
    return {
        type: INCREMENT
    }
}

const decrementAction = () => {
    return {
        type: DECREMENT
    }
}

const resetAction = () => {
    return {
        type: RESET
    }
}


//reducer
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
        default:
            return state;
    }
}

//store 
//we get some function from redux store like getState(), dispatch(), subscribe();
const store = createStore(counterReducer);


store.subscribe(() => {
    console.log(store.getState())
})


//action dispatch
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(decrementAction())
store.dispatch(resetAction())