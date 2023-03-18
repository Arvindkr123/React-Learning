import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

// function App() {
//   const [data, setData] = useState('anil')
//   function UpdateName(){
//     setData('Arvind Kumar')
//   }
//   return (
//     <div className='App'>
//       <h1>{data}</h1>
//       <button onClick={UpdateName}>Update Data</button>
//     </div>
//   )
// }
function App() {
  const [data, setData] = useState(0)
  function UpdateName(){
    setData(data+1)
  }
  console.log('___________________________________');
  return (
    <div className='App'>
      <h1>{data}</h1>
      <button onClick={UpdateName}>Update Data</button>
    </div>
  )
}

// This is the problem we can't change the value in variable that's why we use the state and props
// function App() {
//   let data= 'Arvind Kumar Singh Thakur'
//   function UpdateData(){
//     data = 'Chandler Bing';
//     alert(data)
//   }
//   return (
//     <div className="App">
//       <h1>{data}</h1>
//       <button onClick={UpdateData}>Click Me</button>
//     </div>
//   );
// }

// function App(){
//   return React.createElement('div',null, 'Hello World')
// }



export default App;
