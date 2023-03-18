import logo from './logo.svg';
import './App.css';
import User from './User';
import React from 'react';
function App() {
  return (
    <div className="App">
      <h1>Hello , JSX !</h1>
      <h1>10 and 20 = {10+20}</h1>
      <User></User>
    </div>
  );
}

// function App(){
//   return React.createElement('div',null, 'Hello World')
// }

export default App;
