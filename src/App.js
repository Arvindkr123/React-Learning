import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App(){
  const[status, setStatus]= useState(true);
  return (
    <div className='App'>
      {
      status?<h1>Hide and show the frameWork</h1>:null
      }
      <button onClick={()=>setStatus(!status)}>Toggle</button>

      <p>Question :what the diff b/w jQuery and React to use the hide and show function </p>
    </div>
  )
}
// function App(){
//   const[status, setStatus]= useState(true);
//   return (
//     <div className='App'>
//       {
//       status?<h1>Hide and show the frameWork</h1>:null
//       }
//       <button onClick={()=>setStatus(false)}>Hide</button>
//       <button onClick={()=>setStatus(true)}>show</button>
//     </div>
//   )
// }
export default App; 