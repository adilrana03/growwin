// import React from 'react';

import React, { useState, useEffect, useRef } from 'react';
import trading1 from '../assets/trading1.avif';
import trading2 from '../assets/trading2.avif';
import trading3 from '../assets/trading3.avif';
import trading4 from '../assets/trading4.avif';
import trading5 from '../assets/trading5.avif';

function Platforms() {
    const [selectedImage, setSelectedImage] = useState(trading1); // Set to the first imported image by default
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef(null);

    const platforms = [
        { name: 'Growwin MT5', desc: 'Our classic bot builder and automated trading platform', img: trading1 },
        { name: 'Growwin Trader', desc: 'Our legacy customer platform', img: trading2 },
        { name: 'SmartTrader', desc: 'Our classic bot builder and automated trading platform', img: trading3 },
        { name: 'Binary Bot', desc: 'Our classic bot builder and automated trading platform', img: trading4 },
        { name: 'Growwin cTrader', desc: 'Trade CFD on forex, commodities, cryptocurrencies.', img: trading5 },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => {
                const nextIndex = prevIndex + 1;
                if (nextIndex >= platforms.length) {
                    return 0; // Reset to the first platform
                }
                return nextIndex;
            });
        }, 2500); // Change active platform every 2.5 seconds

        return () => clearInterval(interval); // Clear the interval when the component unmounts
    }, []);

    useEffect(() => {
        setSelectedImage(platforms[currentIndex].img);

        // Scroll to the active platform
        if (scrollRef.current) {
            const topPos = currentIndex * (scrollRef.current.offsetHeight / platforms.length);
            scrollRef.current.scrollTop = topPos;
        }
    }, [currentIndex, platforms]);

    return (
        <div className="p-8 w-[90%] mx-auto pb-20 flex flex-col items-center ">
            <h1 className="md:text-5xl text-4xl font-sans text-gray-600 font-bold mb-6">Our platforms</h1>
            <h2 className="text-xl mb-10 font-sans text-gray-700">Choose from 8 powerful platforms — designed with you in mind</h2>

            <div className="md:flex md:gap-10 lg:justify-between flex flex-col-reverse md:flex-row">
                <div className="md:w-[45%] p-4 lg:h-[480px] h-[280px] overflow-scroll  rounded-2xl   md:overflow-hidden  " ref={scrollRef}>
                    {platforms.map((platform, index) => (
                        <div key={index} className="mb-4  ">
                            <div className="flex  text-left  ">
                                <div className={` ${selectedImage === platform.img ? 'bg-white p-6 text-gray-700 shadow-lg scale-100   rounded-2xl w-[100%] transition duration-300 ease-in-out border-b-4 border-red-600' : 'opacity-40  hover:opacity-80 '} `}>
                                    <button
                                        onClick={() => setSelectedImage(platform.img)}
                                        className={``}
                                    >
                                        <h3 className="text-xl font-bold text-left ">{platform.name}</h3>
                                    </button>
                                    <p className=' text-xs text-gray-600 text-left font-sans leading-6 mt-4 hidden md:block'>{platform.desc}</p>
                                    <div className="mt-4">
                                        <a href="#" className="text-red-500">Learn more &gt;</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                   
                </div>

                <div className="rounded-lg flex md:w-[85%] w-[400px] -mt-4">
                    <img src={selectedImage} alt="" className='w-full' />
                </div>
            </div>
        </div>
    );
}

export default Platforms;
