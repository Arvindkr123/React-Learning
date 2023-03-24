import logo from './logo.svg';
import './App.css';
import User from './User';

import React from 'react'

function App() {
  function ParentAlert(data) {
    console.log(data)
    return alert(`${data.name} ${data.email}`)
  }
  return (
    <div className='App'>
      <h1>Send data child to parent Component ( AKA Lifting stateUP)</h1>
      <User alert={ParentAlert} />
    </div>
  )
}
// function App() {
//   let data = 'Anil Sidhu'
//   return (
//     <div className='App'>
//       <h1>Send data child to parent Component ( AKA Lifting stateUP)</h1>
//       <User name={data}/>
//     </div>
//   )
// }

export default App;
