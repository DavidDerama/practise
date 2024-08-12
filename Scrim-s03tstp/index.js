import React from 'react';
import ReactDOM from 'react-dom';

// const reactElement = <div className="fish">Heellllooooo</div>

const Button = ({ children }) => {
    return <button>{children}</button>
}

const domElement = document.getElementById('root')

ReactDOM.render(
    <div>
      <Button>
        + Add
      </Button>
      <Button>
        Subtract -
      </Button>
      <Button children="MULTIPLY *****" />
    </div>, domElement)
    
    <Button>
        {element}
        {element2}
        {stuff.map(() => {element3and4})}
    </Button>
    
    React.createElement(Button, {}, element, element2, [element3, element4])
    React.createElement(Button, {children: [element, [element2, [element3, element4]})
    
    
    // <Button children={element} />
    // React.createElement(Button, { children: element })
    
    // <Button>{element}</Button>
    // React.createElement(Button, {}, element)
    // React.createElement(Button, { children: element })