import logo from './logo.svg';
import './App.css';

import React, { useState, useMemo} from 'react'

function App() {
  const[count, setCount] = useState(0);
  const[item, setItem] = useState(10);
  const multiCount = useMemo(()=>{
    console.log('Use memo')
    return count*5;
  }, [count])
  return (
    <div className='App'>
      <h1>Use Memo hoock in React</h1>
      <h2>Count : {count}</h2>
      <h2>Item : {item}</h2>
      <h2>multiCount : {multiCount}</h2>
      <button onClick={()=>setCount(count+1)}>Update count</button>
      <button onClick={()=>setItem(item*10)}>Update item</button>
    </div>
  )
}

export default App
