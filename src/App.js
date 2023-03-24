import logo from './logo.svg';
import './App.css';
import { BrowserRouter as BR, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

import React from 'react'

function App() {
  return (
    <div className='App'>
      {/* <h1>Router in React</h1> */}
      <BR>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BR>
    </div>
  )
}

export default App
