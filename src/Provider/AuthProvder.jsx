import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const authContext = createContext(null)

const AuthProvder = ({ children }) => {
    const [user, setUser] = useState([])
    const googleProvider = new GoogleAuthProvider()
    const [loading, setLoading] = useState(true)

    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            console.log('user in the state changed', user)
            setUser(user)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const userLogOut = () => {
        setLoading(true)
        return signOut(auth)
    }



    const authInfo = { user, creatUser, logInUser, userLogOut, logInWithGoogle, loading }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvder;