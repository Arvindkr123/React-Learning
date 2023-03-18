import logo from './logo.svg';
import './App.css';
// import User from './User';
import React, {Component} from 'react';
function App() {
  function Apple(){
    return(
      <div>Apple Component</div>
    )
  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <User/>
      <Apple></Apple>
    </div>
  );
}

class User extends Component{
  render(){
      return(<h1>Hello from User</h1>)
  }
}


export default App;
