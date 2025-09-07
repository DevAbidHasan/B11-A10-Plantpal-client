import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLoaderData, useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const PrivateRoute = ({children}) => {

    const {user,loading}=useContext(AuthContext);
    const location=useLocation();

    if(loading) {
        return <Loading></Loading>;
    }

    if(user && user?.email) {
        return children;
    }

    return (
        <div>
            <Navigate state={location.pathname} to="/auth/login"></Navigate>
        </div>
    );
};

export default PrivateRoute;