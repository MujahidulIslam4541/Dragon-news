import React from 'react'
import { Link } from 'react-router-dom'
import userIcon from '../assets/user.png'

export default function Navbar() {
    return (
        <div className='flex justify-between items-center'>
            <div className=""></div>

            <div className="nav space-x-5">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </div>

            <div className="logo flex gap-2 items-center">
                <div className=''>
                    <img src={userIcon} alt="" />
                </div>
                <button className='px-3 py-2 text-white bg-neutral '>Login</button>
            </div>
        </div>
    )
}
