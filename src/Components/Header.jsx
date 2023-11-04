import React from 'react';
// import logo from '../assets/logo.jpeg'
// import { Link } from 'react-router-dom';

import google from '../assets/game.png'
import appstore from '../assets/app-store.png'
import home from '../assets/home.png'
import group from '../assets/group.png'
import cart from '../assets/shopping-cart.png'
import globe from '../assets/globe.png'
function Header() {
    return (
        <>
            <div className="flex justify-around py-2 pt-5 top-0 bg-white  fixed w-full z-20">
                {/* Logo and Brand Name */}
                <a href="/" className="flex gap-3 md:items-center ">
                    {/* Placeholder for Logo if you wish to add it later */}
                    {/* <img src={logo} alt="logo" className='h-10 w-10 rounded-full shadow-lg shadow-blue-400' /> */}
                    <span className="text-red-500 text-xl font-bold ">Growwin</span>
                </a>

                {/* Navigation Links */}
                <div className="space-x-8 hidden md:flex relative">
                    {/* Trade Dropdown */}
                    <div className="group">
                        <a href="#" className="text-gray-600 hover:text-red-500">Trade</a>
                        <div className="hidden group-hover:block absolute bg-white shadow-lg p-8 w-[300px] rounded-lg mt-1">
                            <ul>
                                <li><a href="#" className="hover:text-red-500  ">Forex Trading</a></li>
                                <li><a href="#" className="hover:text-red-500 ">Commodities</a></li>
                                <li><a href="#" className="hover:text-red-500 ">Stock Indices</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Markets Dropdown */}
                    <div className="group">
                        <a href="#" className="text-gray-600 hover:text-red-500">Markets</a>
                        <div className="hidden group-hover:block absolute bg-white shadow-lg p-8 w-[300px] rounded-lg mt-1">
                            <ul>
                                <li><a href="#" className="hover:text-red-500">Cryptocurrency</a></li>
                                <li><a href="#" className="hover:text-red-500">Equities</a></li>
                                <li><a href="#" className="hover:text-red-500">Bonds</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* About Us Dropdown */}
                    <div className="group">
                        <a href="#" className="text-gray-600 hover:text-red-500">About Us</a>
                        <div className="hidden group-hover:block absolute bg-white shadow-lg p-8 rounded-lg w-[300px] mt-1">
                            <ul>
                                <li><a href="#" className="hover:text-red-500">Our Story</a></li>
                                <li><a href="#" className="hover:text-red-500">Our Team</a></li>
                                <li><a href="#" className="hover:text-red-500">Career Opportunities</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="space-x-8 md:flex hidden">
                    {/* Placeholder for Instagram Icon */}
                    <a href="#">
                        <div className="rounded-2xl">
                            <img src={google} to your instagram icon className="h-8 w-8" alt="Instagram" />
                        </div>
                    </a>
                    {/* Placeholder for App Store Icon */}
                    <a href="#">
                        <div className="rounded-2xl">
                            <img src={appstore} to your app store icon className="h-8 w-8" alt="App Store" />
                        </div>
                    </a>
                </div>
            </div>

            <div className="md:hidden fixed bottom-0 w-full bg-white z-30">
                <nav className="flex justify-around items-center p-4">
               
                    <a href="#about" className="flex flex-col items-center">
                        <img src={group} className='h-6 w-6' alt="" />

                        <span className="text-xs mt-1">About</span>
                    </a>

                    {/* Markets Icon */}
                    <a href="#markets" className="flex flex-col items-center">
                        <img src={globe} className='h-6 w-6' alt="" />

                        <span className="text-xs mt-1">Markets</span>
                    </a>

                    {/* Forex Icon */}
                    <a href="#forex" className="flex flex-col items-center">
                        <img src={cart} className='h-6 w-6' alt="" />
                        <span className="text-xs mt-1">Forex</span>
                    </a>
                    <a href="/" className="flex flex-col items-center">
                        <img src={home} className='h-6 w-6' alt="" />

                        <span className="text-xs mt-1">Home</span>
                    </a>
                </nav>
            </div>

        </>
    );
}

export default Header;
