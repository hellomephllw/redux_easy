'use strict'
import React from 'react';

class InputCpn extends React.Component {
    render() {
        return (
            <div>
                <input type="text" ref="inputText"/>
                <button onClick={() => this.showContentHandler()}>click</button>
            </div>
        );
    }

    showContentHandler(event) {
        let text = this.refs.inputText.value;
        this.props.showContentDispatcher(text);
    }

}

export default InputCpn;