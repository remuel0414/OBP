import React, { useState } from 'react';
import kobe from '../assets/images/kobe.png';
import travis3 from '../assets/images/travis3.png';
import travis from '../assets/images/travis.png';
import travis2 from '../assets/images/travis2.png';
import royal from '../assets/images/royal.png';
import max from '../assets/images/max.png';
import dunk from '../assets/images/dunk.png';

const Hero = () => {
  // Define announcements array
  const announcements = [
    {
      img: kobe,
      alt: 'YZY',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.',
    },
    {
      img: travis3,
      alt: 'Travis',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.',
    },
    {
      img: travis,
      alt: 'Travis',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.',
    },
    {
      img: travis2,
      alt: 'Travis',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.',
    },
    {
      img: dunk,
      alt: 'Dunk',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.',
    },
    {
      img: royal,
      alt: 'Royal',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.',
    },
    {
      img: max,
      alt: 'Max',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.',
    },
    // Add more announcements if necessary
  ];

  // State for the starting index of current set of announcements
  const [startIndex, setStartIndex] = useState(0);

  // Number of items to display at a time
  const itemsPerPage = 3;

  // Calculate the current set of announcements to display
  const currentAnnouncements = announcements.slice(startIndex, startIndex + itemsPerPage);

  // Handle the click of the left arrow button
  const handlePrevious = () => {
    // Decrease the startIndex and wrap around if necessary
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex - itemsPerPage;
      return newIndex < 0 ? announcements.length - itemsPerPage : newIndex;
    });
  };

  // Handle the click of the right arrow button
  const handleNext = () => {
    // Increase the startIndex and wrap around if necessary
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex + itemsPerPage;
      return newIndex >= announcements.length ? 0 : newIndex;
    });
  };

  return (
    <section className="min-h-screen py-15 mb-4">
      <h2 className="text-3xl font-bold mb-6 text-center">City Announcements</h2>
      <div className="flex justify-center items-center h-full">
        {/* Left arrow button */}
        <button
          className="text-3xl text-gray-700 hover:text-gray-500 mx-4"
          onClick={handlePrevious}
        >
          &#9664; {/* Unicode character for left arrow */}
        </button>

        {/* Images and descriptions */}
        <div className="flex space-x-4">
          {currentAnnouncements.map((announcement, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={announcement.img}
                alt={announcement.alt}
                className="w-45 h-45 rounded-lg" // Adjust image size
              />
              <p className="mt-2 text-center">{announcement.description}</p>
            </div>
          ))}
        </div>

        {/* Right arrow button */}
        <button
          className="text-3xl text-gray-700 hover:text-gray-500 mx-4"
          onClick={handleNext}
        >
          &#9654; {/* Unicode character for right arrow */}
        </button>
      </div>
    </section>
  );
};

export default Hero;
