import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
export default function FindUs() {
    return (
        <div>
            <h1 className='font-semibold my-2'>Find Us On</h1>

            <div className="join flex join-vertical *:w-full *:bg-base-100 space-y-1">
                <button className="btn join-item justify-start"> <FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item justify-start">
                    <FaInstagram></FaInstagram> Instagram
                </button>
                <button className="btn join-item justify-start">
                    <FaTwitter></FaTwitter> Twitter
                </button>
            </div>
        </div>
    )
}
