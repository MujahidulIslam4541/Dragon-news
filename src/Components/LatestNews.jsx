import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

export default function LatestNews() {
    return (
        <div className='flex  gap-2 items-center bg-base-300 rounded-md'>
            <p className='text-white bg-red-600 font-semibold px-2 py-1'>Latest</p>
            <Marquee pauseOnHover={true} className='space-x-10'>
                <Link to='/news'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident enim quam nemo quos, a exercitationem.</p>
                </Link>
                <Link to='/news'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident enim quam nemo quos, a exercitationem.</p>
                </Link>
                <Link to='/news'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident enim quam nemo quos, a exercitationem.</p>
                </Link>
            </Marquee>
        </div>
    )
}
