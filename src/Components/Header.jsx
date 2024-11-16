import React from 'react'
import logo from "../assets/logo.png"
export default function Header() {
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-4'>
            <div className="logo">
                <img className='w-80' src={logo} alt="" />
            </div>
            <h2 className='text-gray-500'>Journalism Without Fear or Favour</h2>
        </div>
    )
}
