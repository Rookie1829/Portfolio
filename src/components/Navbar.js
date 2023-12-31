import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Photo from '../images/profilepic.JPG';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <nav className="flex justify-between items-center py-3 px-5 bg-white text-xl fixed top-0 w-full shadow-md z-10 font-source-code-pro">
      <div className="flex items-center">
        <img src={Photo} alt="Profile" className="w-10 h-10 rounded-full" />
        <Link 
          to="hero" 
          smooth={true} 
          duration={500} 
          className="ml-2 font-bold cursor-pointer text-2xl text-black"
        >
          <div>{"<John />"}</div>
        </Link>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <div className={`${isOpen ? '' : 'hidden'} absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center space-y-4 md:hidden`}>
  
        <button onClick={closeMenu} className="absolute top-3 right-3">
          <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <Link to="hero" onClick={closeMenu} smooth={true} duration={500} offset={-90} className="cursor-pointer font-bold text-black text-2xl">.Home()</Link>
        <Link to="about" onClick={closeMenu} smooth={true} duration={500} offset={-90} className="cursor-pointer font-bold text-black text-2xl">.About()</Link>
        <Link to="projects" onClick={closeMenu} smooth={true} duration={500} offset={-90} className="cursor-pointer font-bold text-black text-2xl">.Projects()</Link>
        <Link to="work" onClick={closeMenu} smooth={true} duration={500} offset={-90} className="cursor-pointer font-bold text-black text-2xl">.Work()</Link>
        <Link to="contact" onClick={closeMenu} smooth={true} duration={500} offset={-90} className="cursor-pointer font-bold text-black text-2xl">.Contact()</Link>
      </div>

      <div className="hidden md:flex space-x-4">
        <Link to="about" smooth={true} duration={500} offset={-90} className="cursor-pointer font-bold text-black">.About()</Link>
        <Link to="projects" smooth={true} duration={500} offset={-90} className="cursor-pointer font-bold text-black">.Projects()</Link>
        <Link to="work" smooth={true} duration={500} offset={-90} className="cursor-pointer font-bold text-black">.Work()</Link>
        <Link to="contact" smooth={true} duration={500} offset={-90} className="cursor-pointer font-bold text-black">.Contact()</Link>
      </div>
    </nav>
  );
};

export default Navbar;
