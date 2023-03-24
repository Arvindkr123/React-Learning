import logo from './logo.svg';
import './App.css';
import React, { useRef } from 'react'
import User from './User'

function App(){
  let inputRef = useRef(null)
  function updateInput(){
    inputRef.current.value='10000'
    inputRef.current.style.color='red'
    inputRef.current.style.backgroundColor='black'
    inputRef.current.focus();
  }
  return(
    <div className='App'>
      <h1>Forward Ref in React</h1>
      <User ref={inputRef}/>
      <button onClick={updateInput}>Update InputBoxValue</button>
    </div>
  )
}

export default App;