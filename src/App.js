import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
    console.log('Constructor called')

  }
  componentDidUpdate(preProps, PreState, snapshot) {
    console.log('componentDidUpdate called', PreState.count, this.state.count, snapshot)
    if(this.state.count < 10){
      this.setState({count:this.state.count+1})
    }
  }
  render() {
    console.log('render called')
    return (
      <div className='App'>
        <h1>ComponentDidUpdate life Cycle Method {this.state.count}</h1>
        <button onClick={() => { this.setState({ count:1}) }}>Update Name</button>
      </div>
    )
  }
}
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     }
//     console.log('Constructor called')

//   }
//   componentDidUpdate(preProps, PreState, snapshot) {
//     console.log('componentDidUpdate called', PreState.count, this.state.count)
//     if(this.state.count=== PreState.count){
//       alert('data is already same')
//     }
//   }
//   render() {
//     console.log('render called')
//     return (
//       <div className='App'>
//         <h1>ComponentDidUpdate life Cycle Method {this.state.count}</h1>
//         <button onClick={() => { this.setState({ count:1}) }}>Update Name</button>
//       </div>
//     )
//   }
// }
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: 'Arvind'
//     }
//     console.log('Constructor called')

//   }
//   componentDidUpdate() {
//     console.log('componentDidUpdate called')
//   }
//   render() {
//     console.log('render called')
//     return (
//       <div className='App'>
//         <h1>ComponentDidUpdate life Cycle Method {this.state.name}</h1>
//         <button onClick={() => { this.setState({ name: 'Arvind Thakur' }) }}>Update Name</button>
//       </div>
//     )
//   }
// }

export default App; 