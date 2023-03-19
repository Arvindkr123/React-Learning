import logo from './logo.svg';
import './App.css';
import Student from './Student';
import React, {useState} from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      name:'Arvind'
    }

  }
  render(){
    return(
      <div className='App'>
        <h1>props :)</h1>
        <Student name={this.state.name} email={'thakurarvindkr10@gmail.com'}></Student>
        <button onClick={()=>this.setState({name:'Arvind Thakur'})}>Update Name</button>
      </div>
    )
  }
}


// function App(){
//   return(
//     <div className='App'>
//       <h1>Props in React :)</h1>
//       <Student name={'Arvind'} email={'thakurarvindkr10@gmail.com'}></Student>
//       <Student name={'Ram'} email={'thakurarvindkr10@gmail.com'}></Student>
//       <Student name={'Akshita'} email={'thakurarvindkr10@gmail.com'}></Student>
//     </div>
//   )
// }

export default App; 