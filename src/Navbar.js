import React, { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <ul style={{listStyle:'none'}} className='hello'>
                <li><NavLink style={({isActive})=>{return{color:isActive?'green':'red'}}} className='Nav-bar-links' to="/">Home</NavLink><br /></li>
                <li><NavLink style={({isActive})=>{return{color:isActive?'green':'red'}}} className='Nav-bar-links' to="/about">About</NavLink></li>
                <li><NavLink style={({isActive})=>{return{color:isActive?'green':'red'}}} className='Nav-bar-links' to="/contact">Contact</NavLink></li>
                {/* <li><Link to="/user/:name">User</Link></li> */}
            </ul>
        </div>
    )
}

export default Navbar
