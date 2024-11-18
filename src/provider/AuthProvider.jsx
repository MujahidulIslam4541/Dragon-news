/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.confige";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()


export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading,setLoading]=useState(true)
    console.log(user)
    const auth = getAuth(app);

    // create new user with email password
    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // logOut user
    const logOut=()=>{
        setLoading(true)
        return signOut(auth);
    }

    // set current user
    useEffect(() => {
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe;
        }
    }, [])



    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        loginUser,
        loading
    }

    return (<AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    )
}
