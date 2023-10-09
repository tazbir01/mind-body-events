import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";

export const authContext = createContext(null)

const AuthProvder = ({children}) => {
    const [user, setUser] = useState([])

    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email,password)
    }

    const authInfo = {user, creatUser, logInUser}

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvder;