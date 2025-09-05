import React, { useEffect } from 'react';
import { NavLink } from 'react-router';
import errorImage from '../../public/error.jpeg'
import { toast, ToastContainer } from 'react-toastify';

const ErrorPage = () => {
    useEffect(()=>{
        toast.error("⚠️ ERROR, Webpage Not Found !!!");
    },[])
    return (
        <div className='flex inter items-center mt-10 md:mt-20 flex-col justify-center'>
            <img className='max-w-[300px]' src={errorImage} alt="" />
            <ToastContainer/>
            <h2 className='text-center text-red-600'>404 Not Found 😵 ❌ ❌</h2>
            <div className="flex mt-10 justify-center items-center ">
                <NavLink to="/" className="btn btn-primary w-auto">
                    Go Back to Home
                </NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;