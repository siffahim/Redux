const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");


const GET_TODOS_REQUEST = "GET_TODO_REQUEST";
const GET_TODOS_FAILED = "GET_TODO_FAILED";
const GET_TODOS_SUCCESS = "GET_TODO_SUCCESS";


//state
const todosInitialState = {
    todos: [],
    isLoading: false,
    error: null
}

//action
const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUEST
    }
}

const getTodosSuccess = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos
    }
}

const getTodosFailed = error => {
    return {
        type: GET_TODOS_FAILED,
        payload: error
    }
}


//reducer
const todosReducers = (state = todosInitialState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            }
        case GET_TODOS_FAILED:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            }
        default:
            return state;
    }
}

const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodosRequest())
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                const datas = res.data
                const title = datas.map(data => data.title)
                dispatch(getTodosSuccess(title))
            })
            .catch(err => {
                dispatch(getTodosFailed(err.message))
            })
    }
}

//store
const store = createStore(todosReducers, applyMiddleware(thunk))

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(fetchData())