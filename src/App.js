import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react'
import Cols from './cols';

/* React Fragment
  it's the pattern to handle the multiple component and elements it can be used as wrapper
 */

function App() {
  return (
    <div className='App'>
      <h1>React Fragment</h1>
      <table>
        <tbody>
          <tr>
            <Cols></Cols>
            <Cols></Cols>
            <Cols></Cols>
            <Cols></Cols>
            <Cols></Cols>
            <Cols></Cols>
            <Cols></Cols>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

// function App() {
//   return (
//     <div className='App'>
//       <h1>Hello React Fragment</h1>
//       <h1>Hello React Fragment</h1>
//     </div>
//   )
// }
// function App() {
//   return (
//     <>
//       <h1>Hello React Fragment</h1>
//       <h1>Hello React Fragment</h1>
//     </>
//   )
// }
// function App() {
//   return (
//     <Fragment>
//       <h1>Hello React Fragment</h1>
//       <h1>Hello React Fragment</h1>
//     </Fragment>
//   )
// }
// function App() {
//   return (
//     <React.Fragment>
//       <h1>Hello React Fragment</h1>
//       <h1>Hello React Fragment</h1>
//     </React.Fragment>
//   )
// }
// function App() {
//   return (
//     <div className='App'>
//       <h1>Hello React Fragment</h1>
//       <h1>Hello React Fragment</h1>
//     </div>
//   )
// }

export default App;
