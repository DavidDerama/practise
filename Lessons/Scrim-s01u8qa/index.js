import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [count, setCount] = useState(0)
  
  const add = () => {
    setCount(count + 1)
  }
  
  const subtract = () => {
    setCount
  }
  
  return (
    <section>
      <h2>Counter: The Most Novel Example I Could Come Up With</h2>
      <div className="counter">
        <button>-</button>
        <input
            type="text"
            aria-label="count"
            defaultValue={count}
        />
        <button>+</button>
      </div>
    </section>
  )
}
ReactDOM.render(<App />, document.getElementById('root'));