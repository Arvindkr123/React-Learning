import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
    <header>
    <a href='#'>Logo</a>
    <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
    </nav>
    </header>
    <section>About Page</section>
    </>
  )
}

export default About;
