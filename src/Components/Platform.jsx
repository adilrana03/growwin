// import React from 'react';

import React, { useState,useEffect,useRef } from 'react';

function Platforms() {
    const [selectedImage, setSelectedImage] = useState("https://deriv.com/static/d71b16a8ad2c2a1e36d554ac8e7f8a9b/0733a/platform_mt5.avif"); // default image
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef(null);

    const platforms = [
        // { name: 'Deriv MT5', desc: 'Our classic bot builder and automated trading platform', img: "https://deriv.com/static/d71b16a8ad2c2a1e36d554ac8e7f8a9b/0733a/platform_mt5.avif" },
        { name: 'Deriv Trader', desc: 'Our legacy custumor platform', img: "https://deriv.com/static/d71b16a8ad2c2a1e36d554ac8e7f8a9b/0733a/platform_mt5.avif" },
        { name: 'Deriv X', desc: 'Our classic bot builder and automated trading platform', img: "https://deriv.com/static/1a3f0ea53acd4c49f358d047b7f15b2a/0733a/platform_deriv_trader.avif" },
        { name: 'Deriv Bot', desc: 'Automate your trading. No coding required.', img: "https://deriv.com/static/4dd8b21fb68f8c54e27fb8f416ccfe7c/0733a/platform_derivx.avif" },
        { name: 'SmartTrader', desc: 'Our classic bot builder and automated trading platformOur classic bot builder and automated trading platform', img: "https://deriv.com/static/4b8c994b61a757c506776cf6b1ce836c/0733a/platform_smart_trader.avif" },
        { name: 'Binary Bot', desc: 'Our classic bot builder and automated trading platform', img: "https://deriv.com/static/9d6d77d26451c60b97048b5270db2789/bbb0d/platform_deriv_ctrader.avif" },
        { name: 'Deriv cTrader', desc: 'Trade CFD on forex, commodities, cryptocurrencies.', img: "https://deriv.com/static/609e72762ab8c943d3865a762be33904/0733a/platform_binary_bot.avif" }
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
        }, 2500); // Change active platform every 3 seconds

        return () => clearInterval(interval); // Clear the interval when the component unmounts
    }, []);

    useEffect(() => {
        setSelectedImage(platforms[currentIndex].img);

        // Scroll to the active platform
        if (scrollRef.current) {
            const topPos = currentIndex * (scrollRef.current.offsetHeight / platforms.length);
            scrollRef.current.scrollTop = topPos;
        }
    }, [currentIndex]);
    return (
        <div className="p-8 w-[90%] mx-auto pb-20 flex flex-col items-center ">
            <h1 className="text-5xl font-sans text-gray-600 font-bold mb-6">Our platforms</h1>
            <h2 className="text-xl mb-10 font-sans text-gray-700">Choose from 8 powerful platforms — designed with you in mind</h2>

            <div className="md:flex md:gap-10 lg:justify-between flex flex-col-reverse md:flex-row">
                <div className="md:w-[45%] p-4 lg:h-[480px] h-[280px] overflow-scroll  rounded-2xl   md:overflow-hidden " ref={scrollRef}>
                    {platforms.map((platform, index) => (
                        <div key={index} className="mb-4  ">
                            <div className="flex  text-left  ">
                                <div className={` ${selectedImage === platform.img ? 'bg-white p-6 text-gray-700 shadow-lg scale-100   rounded-2xl w-[100%] transition duration-300 ease-in-out border-b-4 border-red-600' : 'opacity-40  hover:opacity-80 '} `}>
                                    <button
                                        onClick={() => setSelectedImage(platform.img)}
                                        className={``}
                                    >
                                        <h3 className="text-xl font-bold text-left">{platform.name}</h3>
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
