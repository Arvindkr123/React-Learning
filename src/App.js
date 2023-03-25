import logo from './logo.svg';
import './App.css';
import { BrowserRouter as BR, Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import React from 'react'
import Page404 from './Page404';
import Contact from './Contact';

function App() {
  return (
    <div className='App'>
      {/* <h1>Router in React</h1> */}
      <BR>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/*' element={<Page404/>} />
        </Routes>
      {/* <Navbar/> */}
      </BR>
    </div>
  )
}

export default App
