'use strict'
import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import InputContainer from '../container/InputContainer';
import InputReducers from '../reducer/inputReducer';

let store = createStore(InputReducers);

render(
    <Provider store={store}>
        <InputContainer />
    </Provider>,
    document.getElementById("main")
);