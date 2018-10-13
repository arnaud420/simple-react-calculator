import React, { Component } from 'react';

class Key extends Component {
    render() {
        const { keyMap, keyPress } = this.props;

        return (
            <div className="key">
                <button onClick={ keyPress }>{ keyMap }</button>
            </div>
        );
    }
}

export default Key;