import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import User from './User.js';
import Members from './Member.js';

function App() {
  function getData() {
    alert('Hello from app')
  }
  return (
    <div className='App'>
      {/* <h2 style={{backgroundColor:'yellow'}}>Pass function as Props</h2> */}
      <User data={getData} />
      <User data={getData} />
      <User data={getData} />
      <User data={getData} />
      <User data={getData} />
      <div style={{float:'left', backgroundColor:'yellow', padding:'20px'}}>
        <Members data={getData} />
      </div>

    </div>
  )
}
export default App; 