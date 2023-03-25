import logo from './logo.svg';
import './App.css';
import { BrowserRouter as BR, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import React from 'react'
import Page404 from './Page404';
import Contact from './Contact';
import User from './User';
import Filter from './Filter';
import Channels from './Channels';
import Company from './Company';
import Other from './Other';
import Login from './Login';
import Protected from './Protected';

function App() {
  return (
    <div className='App'>
      {/* <h1>Router in React</h1> */}
      <BR>
        <Navbar />
        <Routes>
          <Route path='/' element={<Protected Component={Home} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<Protected Component={About} />} />

          <Route path='/contact/' element={<Protected Component={Contact} />}>
            <Route path='channel' element={<Channels></Channels>} />
            <Route path='company' element={<Company />} />
            <Route path='other' element={<Other />} />
          </Route>
          <Route path='/user/:name' element={<User />} />
          <Route path='/filter' element={<Protected Component={Filter} />} />
          <Route path='/*' element={<Page404 />} />
        </Routes>
        {/* <Navbar/> */}
      </BR>
    </div>
  )
}

export default App
