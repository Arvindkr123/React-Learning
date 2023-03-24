import logo from './logo.svg';
import './App.css';
import './style.css'
import style from './custom.module.css'

import React from 'react'

function App() {
  return (
    <div className='App'>
      <h1 className='primary'>Style in React</h1>
      <h1 style={{ color: 'red', backgroundColor: 'black' }}>Style Arvind</h1>
      <h1 className={style.success}>Style Arvind Thakur</h1>
    </div>
  )
}

export default App
