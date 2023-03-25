import React, { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <ul style={{listStyle:'none'}}>
                <li><Link to="/">Home</Link><br /></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
