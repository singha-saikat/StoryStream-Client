/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import app from "../../Firebase/Firebase.config";




 export const AuthContext = createContext(null);

 const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null);
    const [loading,setLoading] =useState(true)

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }
    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email : userEmail}
            setUser(currentUser)
            setLoading(false);
            if(currentUser){
                
                axios.post('https://story-stream-car-server.vercel.app/api/v1/jwt',loggedUser,{withCredentials:true})
                .then(res =>{
                    console.log('token response',res.data);
                })
            }
            else{
                axios.post('https://story-stream-car-server.vercel.app/api/v1/logout',loggedUser,{withCredentials:true})
                .then(res => {
                    console.log(res.data);
                })
            }
    
        });
        return () => {
            unSubscribe();
        }
      },[user?.email])
     const authInfo ={
        user,
        createUser,
        signIn,
        logout,
        setLoading,
        loading
        
     }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;