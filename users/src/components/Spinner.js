import React from 'react';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Spinner = ({path="login"}) => {
const navigate = useNavigate();
const[count,setCount]= useState(5);

useEffect(()=>{
    const interval = setInterval(()=>{
        setCount((prevValue)=>--prevValue)
    },1000);
    count ===0 && navigate(`/${path}`);
    return()=> clearInterval(interval);
},[count,navigate,path]);
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center"
            style={{height:"100vh"}}>
                
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <h1>Redirecting to you in {count} seconds</h1>
            </div>

        </>
    )
}

export default Spinner;
