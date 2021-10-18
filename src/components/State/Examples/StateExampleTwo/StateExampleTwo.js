import { useState } from "react";

export const StateExampleTwo = () => {
    const [counter, setCounter] = useState(0);

    const incrementCounterByOne = () => {        
        setCounter(counter + 1);
    };

    const decrementCounterByOne = () => {        
        setCounter(counter - 1);
    };

    const resetCounterToZero = () => {        
        setCounter(0);
    };

    const incrementCounterByFive = () => {
        // This won't work
        console.log(`Starting Loop. Counter is: ${counter}`);

        for (let i = 1; i <= 5; i++) {
            console.log(`Incrementing count for iteration ${i}`);

            setCounter(counter + 1);
        }

        console.log('Ending Loop');
    };

    console.log('Rending State Example Two');

    return (
        <div>
            <div>{ counter }</div>
            <button onClick={ resetCounterToZero }>Reset</button>
            <button onClick={ incrementCounterByOne }>Increment By 1</button>
            <button onClick={ decrementCounterByOne }>Decrement By 1</button>
            <button onClick={ incrementCounterByFive }>Increment By 5 (Loop)</button>
        </div>
    );
}