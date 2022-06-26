const { createStore } = require("redux");

const INCRE_BY_VALUE = "INCRE_BY_VALUE";
const ADD_USER = 'ADD_USER';


//state
const initState = {
    users: [
        {
            name: 'Fahim',
            age: 20,
        }
    ],
    count: 1
}

//action
const addUser = (value) => {
    return {
        type: ADD_USER,
        payload: value
    }
}

const incrementByValue = (value) => {
    return {
        type: INCRE_BY_VALUE,
        payload: value
    }
}


//reducer
const counterReducer = (state = initState, action) => {
    switch (action.type) {
        case INCRE_BY_VALUE:
            return {
                count: state.count + action.payload
            }
        case ADD_USER:
            return {
                users: [...state.users, action.payload],
                count: state.count + 1
            }
        default:
            return state;
    }
}


//store

const store = createStore(counterReducer);


store.subscribe(() => {
    console.log(store.getState())
})


// store.dispatch(incrementByValue(5))
// store.dispatch(incrementByValue(10))

store.dispatch(addUser({ name: 'Korim', age: 21 }))
store.dispatch(addUser({ name: 'Aysha', age: 22 }))