import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App(){
  const[name, setName] = useState('')
  const[tnc, settnc] = useState(false)
  const[interest, Setinterest] = useState('')

  function getFormData(e){
    e.preventDefault();
    console.log(name, tnc, interest);
  }
  return(
    <div className='App'>
      <h1>Handle form in React</h1>
      <form onSubmit={getFormData}>
        <input type="text" placeholder='enter your name' onChange={(e)=>setName(e.target.value)}/><br/><br/>
        <select onChange={(e)=>Setinterest(e.target.value)}>
          <option>select</option>
          <option>Marvel</option>
          <option>DC</option>
        </select><br/><br/>
        <input type="checkbox" onChange={(e)=>settnc(e.target.checked)} /  ><span>Accept Terms and conditions</span><br/><br/>
        <button type='submit'>Submit</button>
        <button>Clear</button>
      </form>
    </div>
  )
}
export default App; 