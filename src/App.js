import logo from './logo.svg';
import './App.css';
import Student from './Student';
import React, {useState} from 'react';

function App(){
  const [name, setName] = useState('Arvind Kumar singh Thakur')
  return(
    <div className='App'>
      <h1>Props in React :)</h1>
      <Student name={name}></Student>
      <button onClick={()=>{setName('Akshita')}}>Update Name</button>
    </div>
  )
}
// function App(){
//   return(
//     <div className='App'>
//       <h1>Props in React :)</h1>
//       <Student name={'Arvind Kumar Singh Thakur'}></Student>
//       <Student name={'Ram Kumar Singh Thakur'}></Student>
//       <Student name={'Bhoore Kumar Singh Thakur'}></Student>
//     </div>
//   )
// }
// function App(){
//   return(
//     <div className='App'>
//       <h1>Props in React :)</h1>
//       <Student name={'Arvind Kumar Singh Thakur'} email='thakurarvindkr10@gmail.com' other={{address:'delhi', phone:'12343'}}></Student>
//       <Student name={'Vijay Kumar Singh Thakur'} email='thakurarvindkr10@gmail.com' other={{address:'delhi', phone:'12343'}}></Student>
//       <Student name={'Ak Kumar Singh Thakur'} email='thakurarvindkr10@gmail.com' other={{address:'delhi', phone:'12343'}}></Student>
//     </div>
//   )
// }

export default App;