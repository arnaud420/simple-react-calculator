import React, { Component } from 'react';

class Key extends Component {
    render() {
        const { keyMap, keyPress } = this.props;

        return (
            <div className="key">
                <div className="button" onClick={ keyPress }>{ keyMap }</div>
            </div>
        );
    }
}

export default Key;