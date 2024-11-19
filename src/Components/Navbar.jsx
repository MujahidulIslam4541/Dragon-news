
import { Link } from 'react-router-dom'
import userIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider'
import { useContext } from 'react'


export default function Navbar() {

    const { user, logOut } = useContext(AuthContext);
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <div className="nav space-x-5">
                            <Link to='/'>Home</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/career'>Career</Link>
                        </div>
                    </ul>
                </div>
                <div className="">{user && user.email}</div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <div className="nav space-x-5">
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/career'>Career</Link>
                    </div>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="logo flex gap-2 items-center">
                    <div className=''>
                        {
                            user && user.email ?
                                <div>
                                    <img className='w-10 rounded-full' src={user.photoURL} alt="" />
                                </div>
                                : <img src={userIcon} alt="" />
                        }
                    </div>

                    {

                        user && user.email ?
                            <button onClick={logOut} className='px-3 py-2 text-white bg-neutral '>Log-Out</button> :

                            <Link to={`/auth/login`} className='px-3 py-2 text-white bg-neutral '>Login</Link>

                    }

                </div>
            </div>
        </div>
    )
}
