
import React, {useState} from 'react';

export default function Counter() {
    const [counter, SetCounter] = useState(0)

    const handleIncremente = () => {
        SetCounter(counter + 1)
    }
    const handleDecremente = () => {
        SetCounter(counter - 1)
    }
    return (
        <div>
            <p id="value">{counter}</p>
            <button id="increment" onClick={handleIncremente}>+</button>
            <button id="decrement" onClick={handleDecremente}>-</button>
        </div>
    )
}