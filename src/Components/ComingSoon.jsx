import React from 'react';
import Countdown from 'react-countdown';

// Set a specific end date for the countdown
const endDate = new Date('2023-12-05T23:59:59'); // for example, New Year's Eve

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <div className="text-white text-xl">Our website is now live!</div>;
    } else {
        // Render a countdown
        return (
            <div className="grid grid-cols-4 gap-4 text-center">
                <div className="countdown-item">
                    <span className="text-5xl font-bold text-red-500">{days}</span>
                    <span className="block text-sm">Days</span>
                </div>
                <div className="countdown-item">
                    <span className="text-5xl font-bold text-red-500">{hours}</span>
                    <span className="block text-sm">Hours</span>
                </div>
                <div className="countdown-item">
                    <span className="text-5xl font-bold text-red-500">{minutes}</span>
                    <span className="block text-sm">Minutes</span>
                </div>
                <div className="countdown-item">
                    <span className="text-5xl font-bold text-red-500">{seconds}</span>
                    <span className="block text-sm">Seconds</span>
                </div>
            </div>
        );
    }
};

// ComingSoonPage Component
const ComingSoonPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-white to-red-100 text-center p-4">
            <h1 className="text-6xl font-bold text-red-500 mb-8">Coming Soon</h1>
            <p className="text-xl text-red-500 mb-8">Something awesome is on the way...</p>
            <Countdown date={endDate} renderer={renderer} />
        </div>
    );
};

export default ComingSoonPage;
