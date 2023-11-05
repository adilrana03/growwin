import React, { useState } from 'react';
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'
import icon4 from '../assets/icon4.svg'
import icon5 from '../assets/icon5.svg'


function ForexTrading() {
    const [selectedTab, setSelectedTab] = useState('Forex');

    const derivedIndicesData = [
        { pair: 'EUR/USD', bid: 1.07164, ask: 1.0717, spread: 0.00006, change: '+0.95%' },
        { pair: 'GBP/JPY', bid: 184.228, ask: 184.251, spread: 0.023, change: '+0.44%' },
        { pair: 'USD/CAD', bid: 1.36786, ask: 1.36796, spread: 0.0001, change: '-0.50%' },
        { pair: 'GBP/USD', bid: 1.23332, ask: 1.23338, spread: 0.00006, change: '+1.18%' },
        { pair: 'AUD/USD', bid: 0.65002, ask: 0.65006, spread: 0.00004, change: '+1.12%' },
        // Your derived indices data here
    ];
    const stocksIndicesData = [
        // Your stocks & indices data here
        { pair: 'EUR/USD', bid: 1.07164, ask: 1.0717, spread: 0.00006, change: '+0.95%' },
        { pair: 'USD/CAD', bid: 1.36786, ask: 1.36796, spread: 0.0001, change: '-0.50%' },
        { pair: 'GBP/JPY', bid: 184.228, ask: 184.251, spread: 0.023, change: '+0.44%' },
        { pair: 'AUD/USD', bid: 0.65002, ask: 0.65006, spread: 0.00004, change: '+1.12%' },
        { pair: 'GBP/USD', bid: 1.23332, ask: 1.23338, spread: 0.00006, change: '+1.18%' },
    ];


    const currencyData = [
        { pair: 'AUD/USD', bid: 0.65002, ask: 0.65006, spread: 0.00004, change: '+1.12%' },
        { pair: 'EUR/USD', bid: 1.07164, ask: 1.0717, spread: 0.00006, change: '+0.95%' },
        { pair: 'GBP/JPY', bid: 184.228, ask: 184.251, spread: 0.023, change: '+0.44%' },
        { pair: 'GBP/USD', bid: 1.23332, ask: 1.23338, spread: 0.00006, change: '+1.18%' },
        { pair: 'USD/CAD', bid: 1.36786, ask: 1.36796, spread: 0.0001, change: '-0.50%' },
    ];
    const getData = () => {
        switch (selectedTab) {
            case 'Indices':
                return derivedIndicesData;
            case 'Stocks':
                return stocksIndicesData;
            case 'Forex':
            default:
                return currencyData;
        }
    };
    return (
        <div className="lg:p-8 lg:w-[80%] w-[95%] mx-auto pb-20 bg-gray-50 rounded-2xl  md:my-0 mt-40 p-[2px]">
            <div className="md:flex lg:justify-around mb-4 md:text-2xl text-xl border-b pb-2 text-gray-400 p-4 flex overflow-scroll gap-12 font-sans font-Ubuntu">
                <button className={selectedTab === 'Forex' ? 'text-red-500 border-b-2 border-red-500 ' : ''} onClick={() => setSelectedTab('Forex')}>
                    <div className=''>
                        <img className='ml-3 mb-2' src={icon1} alt="" />
                        Forex
                    </div>
                </button>
                <button className={selectedTab === 'Indices' ? 'text-red-500 border-b-2 border-red-500' : ''} onClick={() => setSelectedTab('Indices')}>
                    <div className=''>
                        <img className='ml-3 mb-2' src={icon2} alt="" />
                        Indices
                    </div>
                </button>
                <button className={selectedTab === 'Stocks' ? 'text-red-500 border-b-2 border-red-500' : ''} onClick={() => setSelectedTab('Stocks')}>
                    <div className=''>
                        <img className='ml-3 mb-2' src={icon3} alt="" />
                        Stocks
                    </div>
                </button>
                <button className={selectedTab === 'Cryptocurrencies' ? 'text-red-500 border-b-2 border-red-500' : ''} onClick={() => setSelectedTab('Cryptocurrencies')}>
                    <div className=''>
                        <img className='ml-16 mb-2' src={icon4} alt="" />
                        Cryptocurrencies
                    </div>
                </button>
                <button className={selectedTab === 'Commodities' ? 'text-red-500 border-b-2 border-red-500' : ''} onClick={() => setSelectedTab('Commodities')}>
                    <div className=''>
                        <img className='ml-12 mb-2 mx-auto' src={icon5} alt="" />
                        <h1> Commodities</h1>
                    </div>
                </button>
            </div>

            <p className="mt-4 mb-6 text-center py-3 text-sm md:text-base text-gray-500  hidden md:block">
                Benefit from round-the-clock trading hours (Monday to Friday), high liquidity, low barriers to entry, a wide range of offerings, and opportunities to trade on world events.
            </p>




            <table className="lg:w-full text-left  md:my-0">
                <thead>
                    <tr className="border-b flex justify-around bg-gray-100 p-4 px-2  rounded-t-2xl">
                        <th className="pb-2 text-left text-xs mr-1 ">Instrument</th>
                        <th className="pb-2 text-left text-xs mr-1 ">Bid price</th>
                        <th className="pb-2 text-left text-xs mr-1 ">Ask price</th>
                        <th className="pb-2 text-left text-xs mr-1 ">Spread</th>
                        <th className="pb-2 text-left text-xs mr-1 ">Daily % change</th>
                    </tr>
                </thead>
                <tbody>
                    {getData().map((currency, index) => (
                        <tr key={index} className="border-b py-2 flex justify-around text-left leading-10 text-gray-500 ">
                            <div className='text-left lg:w-20 '>
                                <td className='text-left '>{currency.pair}</td>
                            </div>
                            <div className='text-left lg:w-20'>
                                <td className='text-left '>{currency.bid}</td>
                            </div>
                            <div className='text-left lg:w-20'>
                                <td className='text-left '>{currency.ask}</td>
                            </div>
                            <div className='text-left lg:w-20'>
                                <td className='text-left '>{currency.spread}</td>
                            </div>
                            <div className='text-left lg:w-20'>
                                <td className={currency.change.startsWith('+') ? 'text-green-600' : 'text-left text-red-500'}>{currency.change}</td>
                            </div>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mt-4">
                <a href="#" className="text-red-500 ">View all &gt;</a>
            </div>
            <a href="/comingsoon" className='text-center mx-auto'>
                <div className='text-center'>

                    <button className='bg-red-500 text-white rounded-xl py-2 px-5 mx-auto '>Trade Now </button>
                </div>
            </a>
        </div>
    );
}

export default ForexTrading;
