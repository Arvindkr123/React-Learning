import React from 'react'
import {NavLink} from 'react-router-dom'

const Hello = () => {
  return (
    <header>
      <nav>
        <ul style={{listStyle:'none'}}>
          <li>
            <NavLink style={{textDecorationLine:'none'}} to='/'>Home</NavLink>
          </li>
          <li><NavLink style={{textDecorationLine:'none'}} to='/about'>About</NavLink></li>
          <li><NavLink style={{textDecorationLine:'none'}} to='/contact'>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Hello;
