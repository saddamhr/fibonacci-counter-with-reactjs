import React, { Component } from 'react';

import { Fibonacci } from './components'
import styles from './App.module.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevOne: 1,
            prevTwo: 0
        }

    }

    increaseHandler = () => {
        let a = this.state.prevOne + this.state.prevTwo;
        this.setState({
            prevOne: a,
            prevTwo: this.state.prevOne,
        });
    }

    decreaseHandler = () => {
        this.setState({
            prevOne: this.state.prevTwo,
            prevTwo: this.state.prevOne - this.state.prevTwo,
        });
    }

    render() {
        return (
            <div className={styles.container}>
                <Fibonacci
                    increase={this.increaseHandler}
                    decrease={this.decreaseHandler}
                    data={this.state.prevOne}
                />
            </div>
        );
    }
}

export default App;