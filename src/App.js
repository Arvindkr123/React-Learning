import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('use Effect')
  })
  return (
    <div className='App'>
      <h1>Use Effect in React {count}</h1>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
    </div>
  )
}

export default App;