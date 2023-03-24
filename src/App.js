import logo from './logo.svg';
import './App.css';
import React, { useRef } from 'react'

function App(){
  let inputRef = useRef(null)
  function handleInput(){
    console.warn('Function call')
    // inputRef.current.value = '2000'
    // inputRef.current.focus();
    inputRef.current.style.color='red';
    inputRef.current.style.backgroundColor='black';
    // inputRef.current.style.display='none';
  }
  return(
    <div className='App'>
      <h1>useRef in React</h1>
      <input type="text" ref={inputRef} />
      <button onClick={()=>handleInput()}>Handle input</button>
    </div>
  )
}

export default App;