'use strict'
import React from 'react';
import {connect} from 'react-redux';
import {inputActionCreator} from '../action/inputAction';
import InputCpn from '../component/InputCpn';
import ShowCpn from '../component/ShowCpn';

class InputContainer extends React.Component {
    showContentDispatcher(text) {
        this.props.dispatch(inputActionCreator(text));
    }

    render() {
        console.log('InputContainer render!');
        return (
            <div>
                <InputCpn showContentDispatcher={(text) => this.showContentDispatcher(text)} />
                <ShowCpn text={this.props.text} />
            </div>
        );
    }
}

export default connect(state => ({text: state.inputReducer.text}))(InputContainer);