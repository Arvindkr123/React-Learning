import logo from './logo.svg';
import './App.css';
import React from 'react';

// class App extends React.Component {
//   constructor() {
//     super();
//     console.log('Constructor called');
//   }

//   render() {
//     console.log('render called');
//     return (
//       <div className='App'>
//         <h1>Constructor Life Cycle Methods</h1>
//         <h1>Hello World ! </h1>
//       </div>
//     )
//   }
// }
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data :'Arvind'
    }
  }

  render() {
    return (
      <div className='App'>
        <h1>Constructor Life Cycle Methods</h1>
        <h1>Hello World ! {this.state.data} </h1>
      </div>
    )
  }
}


export default App; 