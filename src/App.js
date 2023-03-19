import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App(){
  const [data, setData] = useState(null)
  const [print, setPrint] = useState(false);
  function getData(val){
    console.log(val.target.value);
    setData(val.target.value)
    setPrint(false)
  }
  return(
    <div className='App'>
      {
        print?
        <h3>{data}</h3>
        :null
      }
      <h1>Get Input Box Value :)</h1>
      <input type="text" onChange={getData}/>
      <button onClick={()=>setPrint(true)}>Print Data</button>
      <p>Question : Can we send in props Html code or not yes we Can with help of  
        <br></br><strong>If you using class Component <code>this.props.children</code></strong><br></br>
        <strong>If you using function Component <code>this.children</code></strong>
      </p>
    </div>
  )
}
export default App; 