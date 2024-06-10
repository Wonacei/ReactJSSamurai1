// import { combineReducers, legacy_createStore } from "redux";
import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { profileReducer } from "./profilePage-reducer";
import { dialogueReducer } from "./dialoguesPage-reducer";
import { personalIDReducer } from "./personalID-reducer";


// let redux = require('redux');


let reducers = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialogueReducer,
    personalID: personalIDReducer,
})
let store = legacy_createStore(reducers)


export default store