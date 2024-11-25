/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Loading";


export default function PrivetRoute({ children }) {


    // useLOcation hook use
    const location=useLocation()
    const { user, loading } = useContext(AuthContext);
    // Added loading
    if (loading) {
        return <Loading></Loading>
    }

    // userLogin check
    if (user && user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to={`/auth/login`}></Navigate>

}
