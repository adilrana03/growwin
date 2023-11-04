import React from 'react';
// import logo from '../assets/logo.jpeg'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="bg-gray-100  flex justify-around  py-2 pt-5 top-0  fixed  w-full z-20 ">
            <a className='flex gap-3'  >
                {/* <img src={logo} alt="" className='h-10 w-10 rounded-full shadow-lg shadow-blue-400 items-center justify-center'/> */}
            <a href='/' className="text-red-500 text-xl font-bold">Growwin</a>
            </a>
            <div className="space-x-4 hidden md:block">
                <a href="#" className="text-gray-600 hover:text-red-500">Trade</a>
                <a href="#" className="text-gray-600 hover:text-red-500">Markets</a>
                <a href="#" className="text-gray-600 hover:text-red-500">About us</a>
                <a href="#" className="text-gray-600 hover:text-red-500">Resources</a>
            </div>
            <div className="space-x-4 flex">
                {/* <a href='/login' className="text-red-500 border-2 border-red-500 bg-white px-4 py-1 rounded-2xl hover:bg-red-100">Log in</a> */}
                {/* <button className=" bg-red-500 px-4 py-1 rounded-2xl hover:bg-red-500 text-white hidden md:block">Create free demo account</button> */}
                <button className=" py-1 rounded-xl font-bold  border px-3 border-red-400">EN</button>
            </div>
        </div>
    );
}

export default Header;