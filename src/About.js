import React from 'react'
import { Link } from 'react-router-dom';

function About() {
    return (
        <div>
            <h1>About Page</h1>
            <p>This is home page of our awesome app</p>
            <p>here we are learning about router</p>
            <ul style={{listStyle:'none'}}>
                <li>
                    <Link to="/">Go to Home page</Link>
                </li>
                <li>
                    <Link to="/contact">Go to Contact page</Link>
                </li>
                <li>
                    <Link to="/user/Arvind">Go to Arvind page</Link>
                </li>
                <li>
                    <Link to="/user/Ram">Go to Ram page</Link>
                </li>
                <li>
                    <Link to="/user/Bruce">Go to Bruce page</Link>
                </li>
            </ul>
        </div>
    )
}

export default About;
