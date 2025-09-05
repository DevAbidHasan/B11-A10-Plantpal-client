import React, { use, useContext } from 'react';

import { Helmet } from 'react-helmet';
import { Link } from 'react-router';



const Register = () => {

    return (
        <div className="card bg-base-100 mt-10 -mb-20 mx-auto w-full rounded-xs max-w-sm shrink-0 shadow-2xl">
            <Helmet>
                <title>
                   PlantPal || Registration
                </title>
            </Helmet>
                        <h2 className='text-center poppins text-blue-500 font-semibold py-5  mx-7 border-gray-300 border-dashed border-b text-xl'>Register your account</h2>
                        <form className="card-body inter mx-5">
                            <fieldset className="fieldset">
                                <label className="font-semibold text-md -mt-1 mb-2">Your Name</label>

                            {/* name */}

                            <input name="name" type="text" required className="input w-full rounded-xs bg-base-100 border" placeholder="Enter your name" />
                            <label className="font-semibold text-md -mt-1 mb-2">Photo URL</label>

                            {/* email */}

                            <input name="photoURL" required type="text" className="input w-full rounded-xs bg-base-100 border" placeholder="Enter your Photo URL" />                            
                             <label className="font-semibold text-md -mt-1 mb-2">Email address</label>

                            {/* email */}
                           
                            <input name="email" required type="email" className="input w-full rounded-xs bg-base-100 border" placeholder="Enter your email address" />
                            <label className="font-semibold text-md -mt-1 mb-2">Password</label>

                            {/* email */}

                            <input name="password" required type="text" className="input w-full rounded-xs bg-base-100 border" placeholder="Enter your password" />                            <button type="submit" className="btn btn-primary my-1">Register</button>
                            <p className='text-center font-semibold text-md text-accent'>Already Registered ? <Link className='font-bold text-secondary' to="/auth/login">Login</Link></p>
                            </fieldset>
                        </form>
        </div>
    );
};

export default Register;