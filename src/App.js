import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
// what is State state is a container which is just used like the variable
class App extends Component{
  constructor(){
    super();
    this.state = {
      data : 0
    }
  }
  apple(){
    this.setState({data:this.state.data+1})
    // alert('apple');
  }
  render(){
    return(
      <div className='App'>
        <h1>Hello World !</h1>
        <h1>{this.state.data}</h1>
        <button onClick={()=>this.apple()}>Click Me</button>
      </div>
    )
  }
}

export default App;