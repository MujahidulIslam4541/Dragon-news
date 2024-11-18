/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../Firebase/Firebase.confige";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()


export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    console.log(user)
    const auth = getAuth(app);

    // create new user
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe;
        }
    }, [])


    const authInfo = {
        user,
        setUser,
        createNewUser
    }

    return (<AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    )
}
