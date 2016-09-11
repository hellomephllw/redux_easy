'use strict'
import {createStore, combineReducers} from 'redux';
import {INPUT_CONTENT} from '../action/inputAction';

let initialState = {
    text: "nothing input here..."
};

let inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_CONTENT:
            return {
                text: action.text
            };
        default:
            return state;
    }
};

let reducers = combineReducers({
    inputReducer
});

export default reducers;