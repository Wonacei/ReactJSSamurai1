let redux = require('redux')
// import { legacy_createStore } from "redux";

let initialState = {
    counter: 0
}
// reducer
let reducer = (state = initialState, action) => {
    if (action.type === "ADD") {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === "SUB") {
        return {
            counter: state.counter - 1
        }
    }
    if (action.type === "ADD_NUMBER") {
        return {
            counter: state.counter + action.value
        }
    }
    return state
}

//store

let store = redux.legacy_createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})


// console.log(store.getState())

//action

const ADD = {
    type: "ADD"
}

store.dispatch(ADD)
store.dispatch(ADD)
store.dispatch(ADD)
store.dispatch({type:"SUB"})
store.dispatch({type:"ADD_NUMBER", value:12})


// let aksjdkjasdh = store.getState
// console.log(store)