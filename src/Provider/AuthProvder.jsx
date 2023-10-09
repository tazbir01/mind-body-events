import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const authContext = createContext(null)

const AuthProvder = ({ children }) => {
    const [user, setUser] = useState([])
    const googleProvider = new GoogleAuthProvider()

    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            console.log('user in the state changed', user)
            setUser(user)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const userLogOut = () => {
        return signOut(auth)
    }



    const authInfo = { user, creatUser, logInUser, userLogOut, logInWithGoogle }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvder;