import logo from './logo.svg';
import './App.css';
import React, {createRef} from 'react'

class App extends React.Component{
  constructor(){
    super();
    this.inputRef = createRef();
  }
  componentDidMount(){
    // console.log(this.inputRef.current.value='10000')
  }
  getValue(){
    console.log(this.inputRef.current.value)
    this.inputRef.current.style.color='red'
    this.inputRef.current.style.backgroundColor='black'
  }
  render(){
    return(
      <div className='App'>
        <h1>Ref in React</h1>
        <input type="text" ref ={this.inputRef}/>
        <button onClick={()=>this.getValue()}>Check Ref</button>
      </div>
    )
  }
}

export default App;