import React, { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <ul style={{listStyle:'none'}}>
                <li><Link to="/">Home</Link><br /></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                {/* <li><Link to="/user/:name">User</Link></li> */}
            </ul>
        </div>
    )
}

export default Navbar
