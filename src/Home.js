import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Home() {
  let location = useLocation();
  console.log(location)
  return (
    <div>
      <h1>Home Page</h1>
      <p>Hello, This is Home Page</p>
      <p>we are learning react Nesting routing here</p>
      <Link to='/about'>Go to About Page</Link>
    </div>
  )
}

export default Home
