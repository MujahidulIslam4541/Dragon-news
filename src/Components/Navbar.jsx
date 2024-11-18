
import { Link } from 'react-router-dom'
import userIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider'
import { useContext } from 'react'


export default function Navbar() {

    const { user,logOut } = useContext(AuthContext);
    return (
        <div className='flex justify-between items-center'>
            <div className="">{user && user.email}</div>

            <div className="nav space-x-5">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </div>

            <div className="logo flex gap-2 items-center">
                <div className=''>
                    <img src={userIcon} alt="" />
                </div>

                {

                    user && user.email ?
                        <button onClick={logOut} className='px-3 py-2 text-white bg-neutral '>Log-Out</button> :

                        <Link to={`/auth/login`} className='px-3 py-2 text-white bg-neutral '>Login</Link>

                }

            </div>
        </div>
    )
}
