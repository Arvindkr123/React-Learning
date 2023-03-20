import logo from './logo.svg';
import './App.css';
import React from 'react';
import User from './User.js';

function App() {
  return (
    <div className='App'>
      <h1>Render method in React</h1>
      <User></User>
    </div>
  )
}
// function App() {
//   const[name, setName] = React.useState('Arvind');
//   return (
//     <div className='App'>
//       <h1>Render method in React</h1>
//       <User name={name}></User>
//       <button onClick={()=>setName('Thakur')}>Update Name</button>
//     </div>
//   )
// }


export default App; 