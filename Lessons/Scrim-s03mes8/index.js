import React from 'react'; 
import ReactDOM from 'react-dom';

const Component = () => {
  return <div>Helllloooo!</div>
}

const domElement = document.getElementById('root')

ReactDOM.render(<Component />, domElement)

let add = (x,y) => x + y