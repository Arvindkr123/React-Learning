import logo from './logo.svg';
import './App.css';
import User from './User';

import React, { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState(10);
  const [count, setCount] = useState(100);
  return (
    <div className='App'>
      <h1>Use Effect in React</h1>
      <User count={count} data={data}></User>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setData(data + 1)}>Update Data</button>
    </div>
  )
}

export default App;