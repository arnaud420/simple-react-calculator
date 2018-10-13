import React, { Component } from 'react';

class CalculatorScreen extends Component {
    render() {
        const { value, result } = this.props;

        return (
            <div className="CalculetteScreen">
                <h1>{ result }</h1>
                <input type="text" value={ value } />
            </div>

        );
    }
}

export default CalculatorScreen;