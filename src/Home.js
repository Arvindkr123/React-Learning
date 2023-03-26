import React from 'react'
import { Outlet } from 'react-router-dom';
import Hello from './Component/Hello';

const Home = () => {
    return (
        <>
            <Hello></Hello>
            <Outlet></Outlet>
        </>
    )
}

export default Home;
