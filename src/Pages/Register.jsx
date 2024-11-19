import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";



export default function Register() {

    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext)

    const navigate = useNavigate()
    const handleRegisterSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get('name')
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')
        console.log({ name, photo, email, password })

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                
                updateUserProfile({ displayName: name, 
                    photoURL: photo })
                    .then(() => {
                        navigate("/")
                    })
                    .then(error => {
                        console.log(error)
                    })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }



    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card bg-base-100 w-full max-w-md shrink-0 rounded-none p-10 border">
                <h2 className="text-center text-2xl text-bold">
                    Register your account
                </h2>
                <form onSubmit={handleRegisterSubmit} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            className="input input-bordered" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input
                            name="photo"
                            type="text"
                            placeholder="Photo Url"
                            className="input input-bordered" required />
                    </div>


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
                        <button className="btn btn-neutral rounded-none">Register</button>
                    </div>
                    <p>Already Have An Account ? <Link className="text-red" to={`/auth/login`}>Login</Link></p>
                </form>
            </div>
        </div>
    )
}
