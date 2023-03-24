import logo from './logo.svg';
import './App.css';
import React, {PureComponent} from 'react'
import User from './User';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      count:0
    }
  }

  render(){
    console.log('Check rerendering..............')
    return (
      <div className='App'>
        {/* <h1>PureComponent in React {this.state.count}</h1> */}
        <User count={this.state.count}></User>
        {/* <button onClick={()=>this.setState({count:this.state.count+1})}>Update count</button> */}
        <button onClick={()=>this.setState({count:1})}>Update count</button>
      </div>
    )
  }
}

export default App
