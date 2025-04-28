import React from 'react';

function StoreLocator() {
    return (
        <div className="flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-lg my-8 mx-4">
            {/* Left Side: YouTube Video */}
            <div className="lg:w-1/2 w-full">
                <div className="w-full h-[500px]">
                    <video
                        className="w-full h-full object-cover"
                        src="/bg.webm"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />

                </div>
            </div>

            {/* Right Side: Location Search */}
            <div className="lg:w-1/2 w-full bg-pink-50 flex flex-col justify-center items-center p-8">
                <h2 className="text-3xl font-bold text-purple-800 text-center mb-6">
                    Find your favorite designs<br />at a Store Nearby
                </h2>

                <div className="w-full max-w-md">
                    <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-3 shadow-sm">
                        <svg
                            className="w-5 h-5 text-purple-600 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 11c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zM19.428 15.341A8.001 8.001 0 104.572 8.659M21 21l-5.2-5.2"
                            />
                        </svg>
                        <input
                            type="text"
                            placeholder="Enter Pincode or City"
                            className="flex-grow outline-none text-gray-700 placeholder-gray-400"
                        />
                        <button className="ml-2 text-orange-500 font-semibold text-sm hover:underline">
                            CHANGE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoreLocator;
