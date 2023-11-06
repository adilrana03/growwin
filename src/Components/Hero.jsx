import React, { useState, useEffect } from 'react';
import './Home.css'

import png3 from '../assets/png17.png';
import png11 from '../assets/png18.png';
import png14 from '../assets/png16.png';
import insta from '../assets/youtube.png'
import facebook from '../assets/whatsapp.png'
import twitter from '../assets/twitter.png'
import telegram from '../assets/telegram.png'
import appstore from '../assets/app-store2.png';
import google from '../assets/playstore2.png'


function Hero() {
    const texts = ["Forex", "Crypto Cryptocurrencies", "Stocks"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleText, setVisibleText] = useState('');
    const [isErasing, setIsErasing] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const typeText = () => {
            const currentText = texts[currentIndex];
            let index = visibleText.length;

            // If we're not currently erasing, type out the current text
            if (!isErasing && index < currentText.length) {
                setVisibleText(currentText.substring(0, index + 1));
                setTypingSpeed(200);
            }

            // Once the current text is fully typed out, set isErasing to true after a delay
            else if (!isErasing && index === currentText.length) {
                setIsErasing(true);
                setTypingSpeed(1000);  // Delay before starting to erase
            }

            // If we're erasing, erase the text letter by letter
            else if (isErasing && index > 0) {
                setVisibleText(currentText.substring(0, index - 1));
                setTypingSpeed(100);
            }

            // Once text is fully erased, move on to the next text and set isErasing to false
            else if (isErasing && index === 0) {
                setIsErasing(false);
                setCurrentIndex((currentIndex + 1) % texts.length);
                setTypingSpeed(500);  // Small delay before typing the next text
            }
        };

        const typingTimer = setTimeout(typeText, typingSpeed);
        return () => clearTimeout(typingTimer);

    }, [visibleText, isErasing]);
    const images = [
        png11,
        png3,
        png14

    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const imageChangeInterval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);  // Change every 2 seconds

        return () => clearInterval(imageChangeInterval);
    }, []);



    return (
        <div className="w-full h-screen pt-16 ">

            <div className=" lg:flex justify-between lg:mt-16 overflow-hidde">
                <div className="lg:w-[48%] font-sans font-ubuntu text-gray-600 text-left lg:pl-16  bg-white p-4 lg:-mt-10">
                    <h1 className="md:text-5xl text-4xl lg:leading-relaxed leading-snug mb-4 text-left font-sans font-ubuntu w-full lg:w-[60%]">
                        Powerfull Platform,  for Forex trading  with AI </h1>
                    <p className="mb-6 lg:text-2xl text-lg   font-ubuntu ">Get the widest range of markets, trades and platforms</p>
                    <h1 className="lg:text-5xl text-3xl font-bold leading-relaxed ">
                        {visibleText}
                        <span className="animate-blink">.</span>
                    </h1>
                    <div className=" justify-center  mt-8">
                        <button className='text-2xl font-semibold bg-red-500 border p-3 ml-3  text-white md:rounded-xl rounded-3xl lg:w-[50%]  lg:mt-4 w-[90%] mx-auto md:ml-0  text-center'>
                            Create Demo account
                        </button>
                        <div className='mt-4 flex justify-center gap-3 md:hidden'>
                            <a href="" className=''> <button className=''><img className='h-9 bg-red-100' src={appstore} alt="" /></button></a>
                            <a href="" className=''> <button className=''><img className='h-9 bg-red-100' src={google} alt="" /></button></a>
                        </div>

                        <div class="md:flex mt-8 space-x-10 md:ml-5 mb-4 md:w-[50%] hidden">
                            <a href=""><img src={insta} className='h-8 w-8' alt="" /></a>
                            {/* <a href=""><img src={facebook} className='h-8 w-8' alt="" /></a> */}
                            <a href="https://twitter.com/growwincapital?t=92GPWv4QkElyd7nuiT0xmQ&s=08"><img src={twitter} className='h-8 w-8' alt="" /></a>
                            {/* <a href=""><img src={apple} className='h-8 w-8' alt="" /></a> */}
                            <a href="https://t.me/growwincapital"><img src={telegram} className='h-8 w-8' alt="" /></a>

                        </div>

                        {/* <div className='flex gap-4  lg:w-[20%] mt-4 rounded-2xl w-[50%] mx-auto md:ml-0'>

                            <a
                                href="https://www.apple.com/app-store/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white p-2 rounded-lg  hover:shadow-lg transition-all duration-300"
                            >
                                <img
                                    src='data:image/jpeg;base64,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'
                                    alt="Download on the Apple App Store"
                                    className="h-12 md:h-10"
                                />
                            </a>
                            <a
                                href="https://play.google.com/store"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white p-2 rounded-lg hover:shadow-lg transition-all duration-300"
                            >
                                <img
                                    src='data:image/png;base64,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'
                                    alt="Get it on Google Play"
                                    className="h-12 md:h-10"
                                />
                            </a>
                        </div> */}
                    </div>

                    {/* <button className="bg-red-500 text-white px-6 py-4 mt-8 rounded-xl">Create free demo account</button> */}
                </div>

                <div className="relative lg:w-[55%]  lg:-mt-16 items-end justify-end lg:-mr-40 overflow-hidde h-[400px] p-4 mb-10">
                    <div className="absolute left-0 w-full  lg:h-[650px] h-[400px] transform lg:-skew-x-12  -z-1 bg-red-500 rounded-2xl md:rounded-none"></div>
                    <img src={images[currentImageIndex]} alt="Dynamic Image" className="lg:w-[70%] w-[85%] rounded-lg items-center pt-10 relative z-10 " />
                </div>
            </div>
        </div>
    );
}

export default Hero;
