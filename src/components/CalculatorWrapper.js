import React, { Component } from 'react';
import CalculatorScreen from "./CalculatorScreen";
import Key from "./Key";

class CalculatorWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0,
            keyMaps: ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0','.', '/', 'ac', '='],
            operation: '',
            error: false
        };

        this.onKeyPress = this.onKeyPress.bind(this);
    }

    clearState() {
        this.setState({
            result: 0,
            operation: '',
            error: false
        });
    }

    displayError() {
        this.clearState();
        this.setState({
            error: true
        });
    }

    displayResult(result) {
        this.setState({
            result,
            operation: result,
            error: false
        });
    }

    onKeyPress(e) {
        let value = e.target.outerText;

        this.setState( state => {
            return {
                operation: state.operation + value
            }
        });

        switch (value) {
            case '=': {
                const regex = /(\d+[+*-/]?)*/;
                try {
                    const match = this.state.operation.match(regex);
                    const isMatch = match[0];
                    if (isMatch !== undefined && this.state.operation === isMatch) {
                        this.displayResult(eval(isMatch));
                    }
                    else {
                        this.displayError();
                    }
                }
                catch (e) {
                    this.displayError();
                }
                break;
            }
            case 'ac': {
                this.clearState();
                break;
            }
            default:
                break
        }
    }

    render() {

        const { operation, result, error } = this.state;

        return (
            <div className="calculetteWrapper">
                <div className={ error ? 'error' : 'd-none' }>
                    { error ? 'Incorrect expression' : '' }
                </div>

                <CalculatorScreen result={ result } value={ operation } />

                <div className="row">{
                    this.state.keyMaps.map( (k, i) => {
                        return <Key key={ i } keyMap={ k } keyPress={ this.onKeyPress } />
                    })
                }</div>

            </div>
        );
    }
}

export default CalculatorWrapper;