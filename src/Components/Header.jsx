import React, { useState } from 'react';
import appstore from '../assets/app-store2.png';
import google from '../assets/playstore2.png'
import { RiArrowUpSLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom';
import { HiMiniChevronDown } from 'react-icons/hi2'
import logo from '../assets/logo.png'



function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isTradeDropdownOpen, setIsTradeDropdownOpen] = useState(false);
    const [isAboutUsDropdownOpen, setIsAboutUsDropdownOpen] = useState(false);
    const [isMarketsDropdownOpen, setIsMarketsDropdownOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // Close all dropdowns when the mobile menu is toggled
        if (isTradeDropdownOpen) setIsTradeDropdownOpen(false);
        if (isAboutUsDropdownOpen) setIsAboutUsDropdownOpen(false);
        if (isMarketsDropdownOpen) setIsMarketsDropdownOpen(false);
    };

    const toggleTradeDropdown = (event) => {
        event.stopPropagation();
        setIsTradeDropdownOpen(!isTradeDropdownOpen);
    };

    const toggleAboutUsDropdown = (event) => {
        event.stopPropagation();
        setIsAboutUsDropdownOpen(!isAboutUsDropdownOpen);
    };

    const toggleMarketsDropdown = (event) => {
        event.stopPropagation();
        setIsMarketsDropdownOpen(!isMarketsDropdownOpen);
    };

    return (
        <>
            <nav className="bg-white px-4 py-4 shadow-md fixed md:flex justify-around inset-x-0 top-0 z-20">
                <div className="flex justify-between items-center">
                    <div className='flex items-center'>
                        <img src={logo} className='h-9' alt="" />
                        <NavLink to="/" className="text-red-500 text-xl  font-bold">Growwin Capital</NavLink>
                    </div>

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
                <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden h-auto mt-1 bg-white  rounded-lg`}>
                    <div className="px-4 py-2 text-xl font-light">
                        {/* Trade Dropdown */}
                        <button
                            onClick={toggleTradeDropdown}
                            className="text-gray-700 hover:bg-gray-200 w-full text-left flex justify-between items-center rounded-lg px-2 py-2 my-1 font-semibold"
                        >
                            Trade
                            <span>
                                {isTradeDropdownOpen ? (
                                    <RiArrowUpSLine />
                                ) : (
                                    <HiMiniChevronDown />
                                )}
                            </span>
                        </button>
                        <div className={`${isTradeDropdownOpen ? 'block' : 'hidden'} bg-gray-50 rounded-lg  mb-2 p-3`}>
                            <h1 className=''>Trade type</h1>
                            <a href="#" className="block text-gray-700 hover:bg-gray-200 rounded-lg px-2 py-2 my-1 text-base">CFDs</a>
                            <a href="#" className="block text-gray-700 hover:bg-gray-200 rounded-lg px-2 py-2 my-1 text-base">Options</a>
                            <a href="#" className="block text-gray-700 hover:bg-gray-200 rounded-lg px-2 py-2 my-1 text-base">Multipliers</a>
                        </div>



                        {/* Markets Section */}
                        <button
                            onClick={toggleMarketsDropdown}
                            className="text-gray-700 hover:bg-gray-200 w-full text-left flex justify-between items-center rounded-lg px-2 py-2 my-1 font-semibold"
                        >
                            Markets
                            {/* Icon logic for Markets */}
                            <span>
                                {isMarketsDropdownOpen ? (
                                    <RiArrowUpSLine />
                                ) : (
                                    <HiMiniChevronDown />
                                )}
                            </span>
                        </button>
                        <div className={`${isMarketsDropdownOpen ? 'block' : 'hidden'} bg-gray-50 rounded-lg mb-2 text-base`}>
                            {/* Content for Markets */}
                            <a href="#" className="block text-gray-700 hover:bg-gray-200 rounded-lg px-2 py-2 my-1">Forex</a>
                            <a href="#" className="block text-gray-700 hover:bg-gray-200 rounded-lg px-2 py-2 my-1">Stocks</a>
                            <a href="#" className="block text-gray-700 hover:bg-gray-200 rounded-lg px-2 py-2 my-1">Commodities</a>
                            <a href="#" className="block text-gray-700 hover:bg-gray-200 rounded-lg px-2 py-2 my-1">Cryptocurrencies</a>
                            <a href="#" className="block text-gray-700 hover:bg-gray-200 rounded-lg px-2 py-2 my-1">Indicies</a>

                        </div>

                        {/* About Us Section */}
                        <button
                            onClick={toggleAboutUsDropdown}
                            className="text-gray-700 hover:bg-gray-200 w-full text-left flex justify-between items-center rounded-lg px-2 py-2 my-1 font-semibold"
                        >
                            About Us
                            {/* Icon logic for About Us */}
                            <span>
                                {isAboutUsDropdownOpen ? (
                                    <RiArrowUpSLine />
                                ) : (
                                    <HiMiniChevronDown />
                                )}
                            </span>
                        </button>
                        <div className={`${isAboutUsDropdownOpen ? 'block' : 'hidden'} bg-gray-50 rounded-lg text-sm mb-2`}>
                            {/* Content for About Us */}
                            <p className="text-gray-600 px-2 py-2 my-1 text-base">
                                We're a team dedicated to delivering the best trading experience. Learn more about our journey, values, and the people behind our company.
                            </p>
                        </div>

                        {/* I  C O N S    H E  R   E */}
                        {/* <div className='block mt-3'>
                            <a href="" className='block ml-2 mb-2'><button><img className='w-20 ' src={appstore} alt="" /></button></a>
                            <a href="" className='block ml-2 '><button><img className='w-20 ' src={google} alt="" /></button></a>
                        </div> */}

                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex md:items-center md:justify-center">
                    <div className="group px-5">
                        <NavLink href="#" className="text-gray-600 hover:text-red-500 px-3 rounded-md ">Trade</NavLink>
                        <div className="hidden group-hover:block absolute mt-1">
                            {/* Dropdown content */}
                            <div className="bg-white shadow-lg rounded-lg p-5" onClick={(e) => {
                                e.preventDefault(); // Prevent the default anchor link behavior
                                window.scrollBy({ top: [730], behavior: 'smooth' }); // Scroll down by 10 pixels
                            }}>
                                <a href="#" className="hover:text-red-500 block" onClick={() => { scrollY(+10) }}>Forex Trading</a>
                                <a href="#" className="hover:text-red-500 block" onClick={() => { scrollBy(20, -window.innerHeight) }}>Commodities</a>
                                <a href="#" className="hover:text-red-500 block">Stock Indices</a>
                            </div>
                        </div>
                    </div>
                    <div className="group px-5">
                        <NavLink href="#" className="text-gray-600 hover:text-red-500 px-3 py-2 rounded-md">Markets</NavLink>
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
                        <NavLink href="#" className="text-gray-600 hover:text-red-500 px-3 py-2 rounded-md">About Us</NavLink>
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
                    {/* <NavLink to="/comingsoon">
                        <button className=''><img className='h-8 bg-red-100' src={appstore} alt="" /></button>
                    </NavLink>
                    <NavLink to="/comingsoon">
                        <button className=''><img className='h-8 bg-red-100' src={google} alt="" /></button>
                    </NavLink> */}
                    <NavLink to="/comingsoon">
                        <button className='border px-2 p-1 rounded-2xl bg-red-500 text-white'>apk Download</button>
                    </NavLink>
                    {/* <button className=''><img className='h-8 bg-red-100' src={appstore} alt="" /></button>
                    <button className=''><img className='h-8 bg-red-100' src={google} alt="" /></button>                   */}
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
