import React from 'react'
import { Outlet } from 'react-router-dom';
import Hello from './Component/Hello';

const Home = () => {
    return (
        <>
            <Hello></Hello>
            <section><h1>Home Page Only</h1></section>
            <Outlet></Outlet>
        </>
    )
}

export default Home;
