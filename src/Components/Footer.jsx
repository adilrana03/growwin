import React from 'react'
// import logo from '../assets/logo.jpeg'
import insta from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import telegram from '../assets/telegram.png'
// import apple2 from '../assets/apple2.png'

const Footer = () => {
    return (
        <div className=''>
            <footer class="bg-white p-12 border-t border-gray-200">
                <div class="container mx-auto">

                    {/* <!-- Logo --> */}
                    <div class="mb-10 text-center flex justify-between gap-5 items-center">
                        <div>
                            <h1 className='font-sans md:text-6xl text-2xl font-bold md:font-normal text-red-500'>Growwin</h1>
                        </div>
                        <div>

                            {/* <img src={logo} alt="Deriv Logo" class="w-20 mx-auto mb-4 rounded-2xl shadow-2xl shadow-blue-400" /> */}
                        </div>
                    </div>

                    {/* <!-- Main Footer Sections --> */}
                    <div class="md:grid md:grid-cols-4 md:gap-16 grid grid-cols-2 gap-20 mb-8">
                        {/* <!-- About Us --> */}
                        <div>
                            <h4 class="font-bold mb-4">ABOUT US</h4>
                            <ul class="space-y-2">
                                <li><a href="#" class="text-gray-600 hover:text-black">Who we are</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">Why chooose us </a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">Principles</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">Contact</a></li>

                                {/* <!-- ... Other items ... --> */}
                            </ul>
                        </div>

                        {/* <!-- Trade Types --> */}
                        <div>
                            <h4 class="font-bold mb-4">TRADE TYPES</h4>
                            <ul class="space-y-2">
                                <li><a href="#" class="text-gray-600 hover:text-black">CFDs</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">Options</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">Multiplayer</a></li>

                                {/* <!-- ... Other items ... --> */}
                            </ul>
                        </div>

                        {/* Market */}

                        <div>
                            <h4 class="font-bold mb-4">Market</h4>
                            <ul class="space-y-2">
                                <li><a href="#" class="text-gray-600 hover:text-black">Forex</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">ETF</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">Stocks</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">Cryptocurrencies</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">Commudities</a></li>


                                {/* <!-- ... Other items ... --> */}
                            </ul>
                        </div>

                        {/* <!-- Other sections go here... --> */}
                        <div>
                            <h4 class="font-bold mb-4">Platforms</h4>
                            <ul class="space-y-2">
                                <li><a href="#" class="text-gray-600 hover:text-black">Growwin X</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">Growwin Trade</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">Growwin Bot</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">Cryptocurrencies</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-black">Commudities</a></li>

                            </ul>
                        </div>


                        {/* <!-- ... Other items ... --> */}

                    </div>

                    {/* <!-- Legal Info & Disclaimer --> */}
                    <div class="mb-6 text-sm text-gray-600">
                        <p>Growwin (FX) Ltd is licensed by...</p>
                        {/* <!-- ... Other paragraphs ... --> */}
                    </div>

                    {/* <!-- Social Media Icons --> */}
                    <div class="flex justify-center space-x-6 mb-4">
                        <a href=""><img src={insta} className='h-8 w-8' alt="" /></a>
                        <a href=""><img src={facebook} className='h-8 w-8' alt="" /></a>
                        <a href=""><img src={twitter} className='h-8 w-8' alt="" /></a>
                        <a href=""><img src={telegram} className='h-8 w-8' alt="" /></a>
                    </div>

                    {/* <!-- Disclaimer --> */}
                    <div class="text-xs text-gray-500 text-center">
                        <p>Please read our <span className='text-red-500'> Terms and conditions</span>, Risk disclosure, and Secure and responsible trading to fully understand the risks involved before using our services. <br /> The information on this website does not constitute investment advice..</p>
                        {/* <!-- ... --> */}
                    </div>
                </div>
            </footer>


        </div>
    )
}

export default Footer