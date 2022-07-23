import React,{useState} from 'react'
import Button from './componets/Button';
import './index.css'

function App() {
  const [count, setCount] = useState(0);

  let incrementCount= () => {
    setCount(count + 1);
  };

  let decrementCount = ()  => {
    setCount(count - 1);
  };
   let resetCount = () => {
    setCount("")
   }

  return (
    <div className="app">
      <div>
        <div className="count">
          <h3>Count:</h3>
         <h1>{count}</h1>
        </div>
        <div className="mount">
          <Button title={"-"} action={decrementCount} /> 
          <Button title={"+"} action={incrementCount}/>
          <Button title={"reset"} action={resetCount}/>
        </div>
      </div>
    </div>
  )
}

export default App
