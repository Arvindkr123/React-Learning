import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Contact() {
  return (
    <div>
      <h1>Contact us Page</h1>
      <p>here we have study good channels</p>
      <Link to="channel">Channels</Link><br/>
      <Link to="company">Company</Link><br/>
      <Link to="other">Other</Link><br/> 
      <Outlet/>
    </div>
  )
}

export default Contact
