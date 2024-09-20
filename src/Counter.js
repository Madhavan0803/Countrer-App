import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
  
    function increment() {
      setCount(count + 1);
    }
  
    function decrement() {
      setCount(count - 1);
    }
  
    return (
      <div className="container">
        <h1>Counter App</h1>
        <div className="counter-box">
          <h1 className="counter" style={{ color: count >= 0 ? 'white' : 'red' }}>
            {count}
          </h1>
        </div>
        <div className="button-group">
          <button className="btn" onClick={increment}>Increment</button>
          <button className="btn" onClick={decrement}>Decrement</button>
        </div>
      </div>
    )
  }


  export default Counter