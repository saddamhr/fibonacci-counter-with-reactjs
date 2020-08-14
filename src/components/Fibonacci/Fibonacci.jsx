import React from 'react';

import styles from './Fibonacci.module.css';

const Fibonacci = (props) => {
    return (

        <div className={styles.DivCenter}>
            <p className={styles.CounterOutput}>The current Fibonacci number: {props.data}</p>
            {
                props.data === 1 ?
                    <button className={styles.CounterControl} disabled={true} onClick={props.decrease}>Decrement</button> :
                    <button className={styles.CounterControl} onClick={props.decrease}>Decrement</button>
            }
            <button className={styles.CounterControl} onClick={props.increase}>Increment</button>
        </div>
    )
}

export default Fibonacci;