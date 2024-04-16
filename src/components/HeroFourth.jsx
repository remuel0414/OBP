import React from 'react';

const HeroFourth = () => {
    // Define an array of sample emergency hotline numbers
    const emergencyHotlines = [
        {
            name: 'Police',
            number: '123-456-7890',
        },
        {
            name: 'Fire Department',
            number: '987-654-3210',
        },
        {
            name: 'Medical Emergency',
            number: '555-123-4567',
        },
        {
            name: 'Disaster Response',
            number: '888-555-1212',
        },
        {
            name: 'Poison Control',
            number: '777-666-3333',
        },
        // Add more hotlines as necessary
    ];

    return (
        <>
            {/* Main section */}
            <section className="py-15 mb-4 flex justify-center items-center space-x-8">
                {/* Contact Us form on the left */}
                <div className="w-1/2 bg-white shadow-lg p-6 rounded-lg">
                    <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 mb-2">
                                Email Address:
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full border p-2 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="fullName" className="block text-gray-700 mb-2">
                                Full Name:
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                placeholder="Enter your full name"
                                className="w-full border p-2 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 mb-2">
                                Main Message/Concern:
                            </label>
                            <textarea
                                id="message"
                                placeholder="Enter your message or concern"
                                className="w-full border p-2 rounded"
                                rows="4"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Emergency Hotlines on the right */}
                <div className="w-1/2 bg-white shadow-lg p-6 rounded-lg">
                    <h2 className="text-3xl font-bold mb-4 text-center">Emergency Hotlines</h2>
                    <ul className="space-y-2">
                        {emergencyHotlines.map((hotline, index) => (
                            <li key={index} className="text-lg">
                                <span className="font-semibold">{hotline.name}: </span>
                                {hotline.number}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Footer section */}
            <footer className="bg-gray-800 text-white p-6 mt-8">
                <div className="flex justify-center space-x-4 mb-4">
                    {/* Navigation buttons */}
                    <button className="text-lg hover:text-gray-300">Home</button>
                    <button className="text-lg hover:text-gray-300">Request Document</button>
                    <button className="text-lg hover:text-gray-300">Track Document</button>
                </div>
                {/* Trademark and company description */}
                <p className="text-center mb-2">1962 J.P. Laurel National Highway, Mataas na Lupa, 4217, Batangas</p>
                <p className="text-center">© 2024 Team Alistaire. All rights reserved.</p>
            </footer>
        </>
    );
};

export default HeroFourth;
