import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

/* Controlled Component it can have the input fields and it can be handled by the 
   React State.
 */
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 1,
      item: 34,
    };
  }

  render() {
    return (
      <div className='App'>
        <h1>Controlled Component</h1>
        <input type='text' defaultValue={'444'} onChange={(e) => this.setState({ val: e.target.value })} />
        <input type='text' defaultValue={'000'} onChange={(e) => this.setState({ item: e.target.value })} />
        <h3>value {this.state.val}</h3>
        <h3>Item value {this.state.item}</h3>
      </div>
    );
  }
}
// function App() {
//   let [val, setVal] = useState()
//   let [item, setItem] = useState()
//   return (
//     <div className='App'>
//       <h1>Controlled Component</h1>
//       <input type="text" defaultValue={'444'} onChange={(e)=>setVal(e.target.value)}/>
//       <input type="text" defaultValue={'000'} onChange={(e)=>setItem(e.target.value)}/>
//       <h3>value {val}</h3>
//       <h3>Item value {item}</h3>
//     </div>
//   )
// }
// function App() {
//   let [val, setVal] = useState("000")
//   let [item, setItem] = useState("666")
//   return (
//     <div className='App'>
//       <h1>Controlled Component</h1>
//       <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
//       <input type="text" value={item} onChange={(e)=>setItem(e.target.value)}/>
//       <h3>value {val}</h3>
//       <h3>Item value {item}</h3>
//     </div>
//   )
// }

export default App;