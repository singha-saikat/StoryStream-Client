/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { getAuth,createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

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
            
            setUser(currentUser)
            setLoading(false);
    
        });
        return () => {
            unSubscribe();
        }
      },[])
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