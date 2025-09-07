import React, { createContext, useEffect, useState } from 'react';
import { BsPass } from 'react-icons/bs';
import { app } from '../Firebase/_firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
export const AuthContext = createContext();
export const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading, setLoading]=useState(true);

    // create user with email and password

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // implement login with email and password

    const login=(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password);
    }

    // 3. logout function

    const logout =()=>{
        return signOut(auth);
    }


    // 4. update user


    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false); 
        });
        return () => unsubscribe();
    }, []);

    const authData = {
        createUser,
        login,
        logout,
        updateUser,
        user,
        setUser,
        loading,
        setLoading
    };

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;