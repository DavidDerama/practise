import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [count, setCount] = useState(0)
  
  const add = () => {
    setCount(count + 1)
  }
  
  const subtract = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  
  return (
    <section>
      <h2>Counter: The Most Novel Example I Could Come Up With</h2>
      <div className="counter">
        <button onClick={subtract}>-</button>
        <input
            type="number"
            aria-label="count"
            value={count}
            onChange={(event) => {
              setCount(parseInt(event.target.value))
            }}
        />
        <button onClick={add}>+</button>
      </div>
    </section>
  )
}
ReactDOM.render(<App />, document.getElementById('root'));