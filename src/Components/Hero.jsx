import React, { useState, useEffect } from 'react';
import './Home.css'
import hero from '../assets/hero_1.png';
import hero2 from '../assets/hero_2.png';
import hero3 from '../assets/hero_3.png';

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
        hero2,
        hero,
        hero3
        
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

            <div className=" lg:flex justify-between mt-16">
                <div className="lg:w-[48%] font-sans font-ubuntu text-gray-600 text-left lg:pl-12  bg-white ">
                    <h1 className="text-5xl leading-relaxed mb-4 text-left ">One broker, <br /> countless trading <br /> opportunities</h1>
                    <p className="mb-6 text-2xl font-semibold font-ubuntu ">Get the widest range of markets, trades and platforms</p>
                    <h1 className="lg:text-5xl text-3xl font-bold leading-relaxed ">
                        {visibleText}
                        <span className="animate-blink">.</span>
                    </h1>
              
                     <button className="bg-red-500 text-white px-6 py-4 mt-8 rounded-xl">Create free demo account</button>
                </div>

                <div className="relative lg:w-[60%]  -mt-10 items-end justify-end lg:-mr-40 overflow-hidden h-[600px]">
                    <div className="absolute left-0 w-full h-[1550px] transform -skew-x-12  -z-10 bg-red-500"></div>
                    <img src={images[currentImageIndex]} alt="Dynamic Image" className="w-[80%] rounded-lg pt-10 relative z-10 " />
                </div>
            </div>
        </div>
    );
}

export default Hero;
