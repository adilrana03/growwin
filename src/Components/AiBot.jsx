import aiBotImageSrc from '../assets/png13.png';
// AI Bot Feature Section Component
function AIBotFeature() {
    return (
        <div className="bg-gradient-to-r from-white to-red-100 py-12 mt-20 px-4 w-[85%] mx-auto">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="lg:w-1/2 mb-10 lg:mb-0 space-y-6">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                        Elevate Your Trading with AI
                    </h2>
                    <p className="text-gray-700">
                        Unlock the potential of the markets with our AI trading bot. Utilize cutting-edge technology to stay ahead in the game, with a system designed to learn and adapt.
                    </p>
                    <ul className="list-disc pl-5 text-gray-600">
                        <li>Real-time market analysis</li>
                        <li>Advanced trade execution</li>
                        <li>24/7 operation, maximizing opportunities</li>
                    </ul>
                    <button className="bg-red-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-red-600">
                        Get Started
                    </button>
                </div>
                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                    <img src={aiBotImageSrc} alt="AI Bot" className="w-full lg:w-[80%] h-auto object-cover rounded-xl shadow-x transition-transform duration-500 hover:scale-115" />
                </div>
            </div>
        </div>
    );
}

export default AIBotFeature;
