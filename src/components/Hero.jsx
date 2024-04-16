import React from 'react';
import kanye from '../assets/images/kanye.jpg';
import logo from '../assets/images/logo.png';

const Hero = ({ title = 'Welcome to the Online Booking Portal for all your government needs' }) => {
  const heroStyle = {
    display: 'flex',
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Align content vertically
    width: '100%',
    height: '955px',
    backgroundImage: `url(${kanye})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'relative',
    padding: '0 2rem',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  return (
    <section className="py-15 mb-4">
      <div style={heroStyle}>
        <div style={overlayStyle}></div> {/* Background overlay */}
        {/* Container to center the text and logo */}
        <div className="flex items-center justify-between w-full mx-auto" style={{ zIndex: 1, maxWidth: '90%' }}>
          {/* Left side content (text) */}
          <div className="flex flex-col items-start text-left" style={{ flex: 1, paddingRight: '1rem' }}>
            <h1
              className="text-4xl font-extrabold sm:text-5xl md:text-6xl"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}
            >
              {title}
            </h1>
            <p className="my-4 text-xl" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)' }}>
              Streamlining Barangay Services: Your Convenient Gateway to Hassle-Free Transactions and Community Engagement.
            </p>
          </div>
          {/* Right side content (logo) */}
          <div className="flex flex-shrink-0 items-center justify-end" style={{ flex: 1 }}>
            <img
              src={logo}
              alt="Logo"
              className="rounded-full"
              style={{
                width: '60%', // Adjust width to keep the logo proportional
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
