import React,{useState} from 'react';

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
            case 'Derived indices':
                return derivedIndicesData;
            case 'Stocks & indices':
                return stocksIndicesData;
            case 'Forex':
            default:
                return currencyData;
        }
    };
    return (
        <div className="lg:p-8 w-[80%] mx-auto pb-20">
            <div className="md:flex justify-around mb-4 text-2xl border-b pb-2 text-gray-400 p-4 hidden ">
                <button className={selectedTab === 'Forex' ? 'text-red-500 border-b-2 border-red-500' : ''} onClick={() => setSelectedTab('Forex')}>Forex</button>
                <button className={selectedTab === 'Derived indices' ? 'text-red-500 border-b-2 border-red-500' : ''} onClick={() => setSelectedTab('Derived indices')}>Derived indices</button>
                <button className={selectedTab === 'Stocks & indices' ? 'text-red-500 border-b-2 border-red-500' : ''} onClick={() => setSelectedTab('Stocks & indices')}>Stocks & indices</button>
                <button className={selectedTab === 'Cryptocurrencies' ? 'text-red-500 border-b-2 border-red-500' : ''} onClick={() => setSelectedTab('Cryptocurrencies')}>Cryptocurrencies</button>
                <button className={selectedTab === 'Commodities' ? 'text-red-500 border-b-2 border-red-500' : ''} onClick={() => setSelectedTab('Commodities')}>Commodities</button>
            </div>

            <p className="mt-4 mb-6 text-center py-3 text-sm">
                Benefit from round-the-clock trading hours (Monday to Friday), high liquidity, low barriers to entry, a wide range of offerings, and opportunities to trade on world events.
            </p>

            


            <table className="w-full text-left ">
                <thead>
                    <tr className="border-b flex justify-around bg-gray-100 p-4  rounded-t-2xl">
                        <th className="pb-2 text-left">Instrument</th>
                        <th className="pb-2 text-left">Bid price</th>
                        <th className="pb-2 text-left">Ask price</th>
                        <th className="pb-2 text-left">Spread</th>
                        <th className="pb-2 text-left">Daily % change</th>
                    </tr>
                </thead>
                <tbody>
                    {getData().map((currency, index) => (
                        <tr key={index} className="border-b py-2 flex justify-around text-left leading-10 text-gray-500">
                            <div className='text-left lg:w-20'>
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
            <div className='text-center'>
                <button className='bg-red-500 text-white rounded-xl py-2 px-5 mx-auto '>Trade Now </button>
            </div>
        </div>
    );
}

export default ForexTrading;
