import React, { useContext }  from 'react';
import { FcGoogle } from "react-icons/fc";
import { Helmet } from 'react-helmet';
import { Link, useLocation, useNavigate } from 'react-router';
import { auth, AuthContext } from '../Provider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { ToastContainer } from 'react-toastify';

const Login = () => {

    const {login}=useContext(AuthContext);

    const navigate= useNavigate();
    const location = useLocation();


    // handle manual login

    const handleLogin=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        login(email, password)
        .then((result)=>{
           alert("login ok");
        })
        .catch((error)=>{
           alert("login failed");
        })
    }


    // handle google login

 const handleGoogleLogin = async (e) => {
    e.preventDefault();

    try {
        // Optional: Sign out first to clear any saved Firebase session
        await signOut(auth);

        // Create Google provider and force account chooser
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
            prompt: 'select_account' // Always ask which account to use
        });

        // Sign in with Google popup
        const result = await signInWithPopup(auth, provider);

        alert("google login ok");
        // console.log(result);

        navigate(`${location.state? location.state : "/"}`);

    } catch (error) {
        // console.error("Google login error:", error);
       alert("google login error");
    }
};



    return (
         <div className="card mt-10 -mb-20 mx-2 bg-base-100 sm:mx-auto w-full rounded-xs max-w-sm shrink-0 shadow-2xl">
            <Helmet>
                <title>
                    PlantPal || Login
                </title>
            </Helmet>
                        <h2 className='text-center poppins font-semibold py-5 mx-7 border-gray-300 border-dashed border-b text-blue-600 text-xl'>Login your account</h2>
                        <form onSubmit={handleLogin} className="card-body mx-2 sm:mx-5">
                            <fieldset className="fieldset inter">
                            <label className="font-semibold text-md -mt-1 mb-2">Email address</label>

                            {/* email */}
                            <ToastContainer/>
                            
                            <input required name="email" type="email" className="input w-full rounded-xs bg-base-100 border" placeholder="Enter your email address" />

                            <label className="font-semibold text-md my-2">Password</label>

                            {/* password */}

                            <input required name="password" type="password" className="input w-full rounded-xs border bg-base-100 mb-3" placeholder="Enter your password" />

                            <button type="submit" className="btn -mb-1 btn-primary my-4 ">Login</button>
                            <button onClick={handleGoogleLogin} type="submit" className="btn flex  items-center mt-2 gap-5"><FcGoogle size={25}/>Login with google</button>

                            </fieldset>
                        </form>
                        <p className='text-center inter font-semibold text-xs mb-5 text-accent'>Don't Have An Account ? <Link className='font-bold text-secondary' to="/auth/registration">Register</Link></p>

            </div>
    );
};

export default Login;