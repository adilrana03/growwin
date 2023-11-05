import React, { useState } from 'react';
import appstore from '../assets/apple2.png';
import google from '../assets/game.png'

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className="bg-white px-4 py-4 shadow-md fixed md:flex justify-around inset-x-0 top-0 z-20">
                <div className="flex justify-between items-center">
                    <a href="/" className="text-red-500 text-xl font-bold">Growwin</a>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            type="button"
                            className="text-gray-700 hover:text-gray-900 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icon for menu open/close */}
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden h-[300px] mt-1  `}>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-xl font-light">Trade</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-xl font-light">Markets</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-xl font-light">About Us</a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex md:items-center md:justify-center">
                    <div className="group px-5">
                        <a href="#" className="text-gray-600 hover:text-red-500 px-3 rounded-md">Trade</a>
                        <div className="hidden group-hover:block absolute mt-1">
                            {/* Dropdown content */}
                            <div className="bg-white shadow-lg rounded-lg p-5">
                                <a href="#" className="hover:text-red-500 block">Forex Trading</a>
                                <a href="#" className="hover:text-red-500 block">Commodities</a>
                                <a href="#" className="hover:text-red-500 block">Stock Indices</a>
                            </div>
                        </div>
                    </div>
                    <div className="group px-5">
                        <a href="#" className="text-gray-600 hover:text-red-500 px-3 py-2 rounded-md">Markets</a>
                        <div className="hidden group-hover:block absolute mt-1">
                            {/* Dropdown content */}
                            <div className="bg-white shadow-lg rounded-lg p-5">
                                <a href="#" className="hover:text-red-500 block">Cryptocurrency</a>
                                <a href="#" className="hover:text-red-500 block">Equities</a>
                                <a href="#" className="hover:text-red-500 block">Bonds</a>
                            </div>
                        </div>
                    </div>
                    <div className="group px-5">
                        <a href="#" className="text-gray-600 hover:text-red-500 px-3 py-2 rounded-md">About Us</a>
                        <div className="hidden group-hover:block absolute mt-1">
                            {/* Dropdown content */}
                            <div className="bg-white shadow-lg rounded-lg p-5">
                                <a href="#" className="hover:text-red-500 block">Our Story</a>
                                <a href="#" className="hover:text-red-500 block">Our Team</a>
                                <a href="#" className="hover:text-red-500 block">Career Opportunities</a>
                            </div>
                        </div>
                    </div>
                    {/* <a href="#">
                        <img src={appstore} className="h-8 w-8 ml-5" alt="App Store" />
                    </a> */}
                </div>
                <div className='md:flex gap-4 hidden'>
                    <button className=''><img className='h-8 w-8' src={appstore} alt="" /></button>
                    <button className=''><img className='h-7 w-7' src={google} alt="" /></button>                    
                </div>
            </nav>

            {/* Backdrop - show only when mobile menu is open */}
            {isMobileMenuOpen && (
                <div
                    className="bg-black bg-opacity-50 fixed inset-0 z-10 md:hidden transition-all delay-500 ease-out"
                    onClick={toggleMobileMenu}
                ></div>
            )}
        </>
    );
}

export default Header;
