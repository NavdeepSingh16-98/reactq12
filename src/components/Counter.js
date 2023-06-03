import  { useState } from "react";
import  './Counter.css';
function Counter(){

    const [counter, setCounter] = useState(0)
  
  
    const handleClick1 = () => {
     
      setCounter(counter + 1)
    }
    
   
    const handleClick2 = () => {
     
      setCounter(counter - 1)
    }

    return(
        <>
        
        <div  className="mainDiv">
      Counter App
      <div  className="countNumber">
        {counter}
      </div>
      <div className="buttons">
        <button 
        className="incrementButton"
          onClick={handleClick1}>Increment</button>
        <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginLeft: '5px',
          backgroundColor: 'red',
          borderRadius: '8%',
          color: 'white',
        }}
          onClick={handleClick2}>Decrement</button>
      </div>
    </div>
        </>
    )
}

export default Counter;