import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

// There are 3 Phase 
/* 
   1) Mounting 
   2) Updating
   3) UnMounting

   When Life cycle methods invokes
    when component is loaded
    when component is updated with state and products
    when component is removed
 */

function App() {
  return (
    <div className='App'>
      <h1>Life Cycle Methods</h1>
      <h2>Products</h2><br/><br/>
      <button>Load Product</button><br/><br/>
      <button>Update Product</button><br/><br/>
      <button>Remove Product</button>
    </div>
  )
}
export default App; 