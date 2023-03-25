import {useEffect} from 'react';
import React, {Link, useNavigate} from 'react-router-dom'


function Protected(props) {
    const { Component } = props;
    const navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login');
        if(!login){
            navigate('/login')
        }
    })
    return (
        <div>
            Hello there I coming from the Protected Page
            <Component />
        </div>
    )
}

export default Protected;
