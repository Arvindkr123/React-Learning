import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
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
