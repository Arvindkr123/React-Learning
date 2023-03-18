import logo from './logo.svg';
import './App.css';
import User from './User';
import React from 'react';
function App() {
  let data= 'Arvind Kumar Singh Thakur'
  function Apple(){
    data = 'JACK SPARROW'
    alert(data)
  }
  return (
    <div className="App">
      <h1>Click event with function {data}</h1>
      <button onClick={Apple}>Click Me</button>
      <button onClick={()=>alert('hello')}>RANCHO</button>
      <button onClick={()=>Apple()}>RANCHO Arrow</button>
    </div>
  );
}

// function App(){
//   return React.createElement('div',null, 'Hello World')
// }

export default App;
