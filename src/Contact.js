import React from 'react'
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
        <h1>This is Contact Page</h1>
        <ul style={{listStyle:'none'}}>
                <li>
                    <Link to="/">Go to Home page</Link>
                </li>
                <li>
                    <Link to="/about">Go to About page</Link>
                </li>
            </ul>
    </div>
  )
}

export default Contact;
