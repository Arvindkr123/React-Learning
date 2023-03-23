import logo from './logo.svg';
import './App.css';
import Student from './Student';
import React from 'react';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      show:true
    }
  }
  render() {
    return (
      <div className='App'>
        {/* <h1>Component will unmount</h1> */}
        {
          this.state.show?<Student/>:<h1>Child Component removed</h1>
        }
        <button onClick={()=>{this.setState({show:!this.state.show
        })}}>Toggle child Component</button>
      </div >
    )
  }
}

export default App; 