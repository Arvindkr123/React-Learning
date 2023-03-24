import logo from './logo.svg';
import './App.css';

import React,{useRef, useState} from 'react'

function App() {
  return (
    <div className='App'>
      <h1>HOC (High order Component)</h1>
      <HOCRed cmp ={Counter}/>
      <HOCGreen cmp ={Counter}/>
      <HOCBlue cmp ={Counter}/>
    </div>
  )
}

function HOCRed(props){
  return <h1 style={{backgroundColor:'red',color:'black', width:300}}>Red <props.cmp></props.cmp></h1>
}
function HOCGreen(props){
  return <h1 style={{backgroundColor:'green',color:'black', width:300}}>Green <props.cmp></props.cmp></h1>
}
function HOCBlue(props){
  return <h1 style={{backgroundColor:'blue',color:'black', width:300}}>Blue <props.cmp></props.cmp></h1>
}

function Counter(){
  const[count, setCount] = useState(0);
  return(
    <div>
      <h3>{count}</h3>
      <button onClick={()=>setCount(count+1)}>Update</button>
    </div>
  )
}

export default App;
