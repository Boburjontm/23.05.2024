import React, { useState, useEffect } from 'react';
import Logo from '../../../public/img/logo.svg';
import { GrLanguage } from "react-icons/gr";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showWhatWeDoModal, setShowWhatWeDoModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleLanguageModal = () => {
    setShowLanguageModal(!showLanguageModal);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
  };

  const handleMouseEnter = () => {
    setShowWhatWeDoModal(true);
  };

  const handleMouseLeave = () => {
    setShowWhatWeDoModal(false);
  };

  useEffect(() => {
    document.body.classList.add('light'); // Set the default mode to light
    if (showWhatWeDoModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showWhatWeDoModal]);

  return (
    <div>
      <div className="fixed container mx-auto">
        <ul className='flex px-8 items-center pr-4 border-b-[2px] py-[-1px]'>
          <li className='px-16 py-5 pr-20 border-r-[2px] p-4 hover:text-orange-900 cursor-pointer'>
            <img src={Logo} alt="Logo" className='pr-16' />
          </li>
          <li 
            className='px-16 py-5 hover:text-orange-900 cursor-pointer relative hover:border-b-[1px]' 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            What we do
            {showWhatWeDoModal && (
              <>
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
                <div className="absolute top-full mt-2 left-0 bg-white p-6 rounded-lg shadow-lg z-50 w-[1000px] h-[800px]">
                  <h2 className="text-xl font-bold mb-4">Our Services</h2>
                  <ul>
                    <li className="mb-2 hover:text-orange-900 cursor-pointer">Service 1</li>
                    <li className="mb-2 hover:text-orange-900 cursor-pointer">Service 2</li>
                    <li className="mb-2 hover:text-orange-900 cursor-pointer">Service 3</li>
                  </ul>
                </div>
              </>
            )}
          </li>
          <li className='px-16 py-5 hover:text-orange-900 cursor-pointer'>Portfolio</li>
          <li className='px-16 py-5 hover:text-orange-900 cursor-pointer'>Insights</li>
          <li className='px-16 py-5 hover:text-orange-900 cursor-pointer relative hover:border-b-[1px]' onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}>About us</li>
          <li className='px-16 py-5 hover:text-orange-900 cursor-pointer bg-orange-500'>Contact us</li>
          <li 
            className='px-16 py-5 hover:text-orange-900 cursor-pointer pr-4 relative' 
            onClick={toggleLanguageModal}
          >
            <GrLanguage />
            {showLanguageModal && (
              <div className="absolute top-full mt-2 left-0 bg-white p-6 rounded-lg shadow-lg z-50">
                <h2 className="text-xl font-bold mb-4">Select Language</h2>
                <ul>
                  <li className="mb-2 hover:text-orange-900 cursor-pointer">English</li>
                  <li className="mb-2 hover:text-orange-900 cursor-pointer">Spanish</li>
                  <li className="mb-2 hover:text-orange-900 cursor-pointer">French</li>
                </ul>
                <button 
                  className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                  onClick={toggleLanguageModal}
                >
                  Close
                </button>
              </div>
            )}
          </li>
          <li 
            className='px-16 py-5 hover:text-orange-900 cursor-pointer'
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
