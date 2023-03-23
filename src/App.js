import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
  const[data, setData] = useState('Arvind Kumar')
  return (
    <div className='App'>
      <h1>{data}</h1>
      <button onClick={()=>setData('Arvind Thakur')}>Update Name</button>
    </div>
  )
}




// function App() {
//   const[data, setData] = useState('Anil');
//   return (
//     <div className='App'>
//       <h1>Hocks in React</h1>
//       <p>When we were using the class componet abd there would be a lot of inbuilt feature would there such as life cycle pure component if you want to use these the you have to use the <em>Hocks</em></p>
//       <h3>Hocks can be used in the functional component</h3>
//     </div>
//   )
// }

// function App() {
//   const[data, setData] = useState('Anil');
//   return (
//     <div className='App'>
//       <h1>Hocks in React</h1>
//       <p>When we were using the class componet abd there would be a lot of inbuilt feature would there such as life cycle pure component if you want to use these the you have to use the <em>Hocks</em></p>
//       <h3>Hocks can be used in the functional component</h3>
//     </div>
//   )
// }

export default App; 