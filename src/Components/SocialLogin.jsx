import React from 'react'
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function SocialLogin() {
    return (
        <div>
            <h1 className='font-semibold mb-2'>Login With</h1>
            <div className="*:w-full space-y-2 ">
                <button className='btn'><FaGoogle /> Login With Google</button>
                <button className='btn'><FaGithub></FaGithub> Login With Github</button>
            </div>
        </div>
    )
}
