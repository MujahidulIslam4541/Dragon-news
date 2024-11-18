import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

export default function Login() {
    const { loginUser,setUser } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log({ email, password })

        loginUser(email,password)
        .then((result)=>{
            const user=result.user;
            setUser(user)
        })
        .catch((error)=>{
           alert(error.code)
        })
    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card bg-base-100 w-full max-w-md shrink-0 rounded-none p-10 border">
                <h2 className="text-center text-2xl text-bold">
                    Login your account
                </h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="email"
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="password"
                            className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Login</button>
                    </div>
                    <p>Dont’t Have An Account ? <Link to={`/auth/register`}>Register</Link></p>
                </form>
            </div>
        </div>
    )
}
