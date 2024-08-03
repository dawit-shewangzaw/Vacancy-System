import React, { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close the menu on link click
  };

  return (
    <div>
      <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center fixed top-0 left-0 w-full z-50">
        {/* Left part: Company name */}
        <div className="text-black font-bold text-lg ml-12">
          IE Network Solutions
        </div>

        {/* Hamburger menu icon */}
        <div className="block lg:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Middle part: Nav links (visible on larger screens) */}
        <div className={`hidden lg:flex lg:items-center lg:space-x-8 ${isMenuOpen ? 'hidden' : ''}`}>
          <a
            href="https://www.ienetworksolutions.com/"
            className={`text-black font-medium underline-offset-4 ${activeLink === 'Home' ? 'font-bold text-blue-500 underline' : 'hover:text-blue-500 hover:underline'}`}
            onClick={() => handleLinkClick('Home')}
          >
            Home
          </a>
          <a
            href="https://www.ienetworksolutions.com/"
            className={`text-black font-medium underline-offset-4 ${activeLink === 'Jobs' ? 'font-bold text-blue-500 underline' : 'hover:text-blue-500 hover:underline'}`}
            onClick={() => handleLinkClick('Jobs')}
          >
            Jobs
          </a>
          <a
            href="https://www.ienetworksolutions.com/"
            className={`text-black font-medium underline-offset-4 ${activeLink === 'Contact Us' ? 'font-bold text-blue-500 underline' : 'hover:text-blue-500 hover:underline'}`}
            onClick={() => handleLinkClick('Contact Us')}
          >
            Contact Us
          </a>
        </div>

        {/* Right part: Sign In button */}
        <div className={`hidden lg:block ${isMenuOpen ? 'hidden' : ''}`}>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full transform -rotate-25 lg:mr-4 hover:bg-orange-500">
            Sign In
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-white shadow-md`}>
        <div className="flex flex-col items-center space-y-4 py-4">
          <a
            href="https://www.ienetworksolutions.com/"
            className={`text-black font-medium underline-offset-4 ${activeLink === 'Home' ? 'font-bold text-blue-500 underline' : 'hover:text-blue-500 hover:underline'}`}
            onClick={() => handleLinkClick('Home')}
          >
            Home
          </a>
          <a
            href="https://www.ienetworksolutions.com/"
            className={`text-black font-medium underline-offset-4 ${activeLink === 'Jobs' ? 'font-bold text-blue-500 underline' : 'hover:text-blue-500 hover:underline'}`}
            onClick={() => handleLinkClick('Jobs')}
          >
            Jobs
          </a>
          <a
            href="https://www.ienetworksolutions.com/"
            className={`text-black font-medium underline-offset-4 ${activeLink === 'Contact Us' ? 'font-bold text-blue-500 underline' : 'hover:text-blue-500 hover:underline'}`}
            onClick={() => handleLinkClick('Contact Us')}
          >
            Contact Us
          </a>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-orange-500">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
