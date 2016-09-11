'use strict'
import React from 'react';

class ShowCpn extends React.Component {
    render() {
        return (
            <div>
                <p>information</p>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default ShowCpn;