import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      name:'arvind'
    }
     
  }
  componentDidMount(){
    console.log('componentDidMount called')
  }
  render(){
    console.log('render called')
    return (
      <div className='App'>
        <h1>ComponentDidMount life Cycle Method {this.state.name}</h1>
        <button onClick={()=>this.setState({name:'Thakur'})}>Update Name</button>
      </div>
    )
  }
}

// class App extends React.Component{
//   constructor(){
//     super();
//     console.log('Constructor called')
     
//   }
//   componentDidMount(){
//     console.log('componentDidMount called')
//   }
//   render(){
//     console.log('render called')
//     return (
//       <div className='App'>
//         <h1>ComponentDidMount life Cycle Method</h1>
//       </div>
//     )
//   }
// }

export default App; 