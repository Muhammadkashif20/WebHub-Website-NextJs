
import React from 'react';

import { Button } from './ui/button';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div>
    <header className="text-black container mx-auto bg flex flex-wrap p-5 flex-col md:flex-row items-center justify-between bg-slate-300 shadow-lg fixed z-10">
        {/* Logo and Title */}        
          <span className="ml-3 text-2xl font-semibold">🚀 WebHub-Dev</span>
        {/* Navigation Links */}
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-5">
        <Link href={'/'}>
          <span className="hover:text-gray-700 transition-colors duration-200 cursor-pointer">Home</span>
          </Link>
          <Link href={'/About'}>
          <span className="hover:text-gray-700 transition-colors duration-200 cursor-pointer">About</span>
          </Link>
          <Link href={'/Testimonials'}>
          <span className="hover:text-gray-700 transition-colors duration-200 cursor-pointer">Testimonials</span>
          </Link>
          <Link href={'/Blogs'}>
          <span className="hover:text-gray-700 transition-colors duration-200 cursor-pointer">Blogs</span>
          </Link>
          <Link href={'/Services'}>
          <span className="hover:text-gray-700 transition-colors duration-200 cursor-pointer">Services</span>
          </Link>
        </nav>
            <div className="ml-4 rounded-md">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md transition duration-200 shadow-lg">
            Login
          </Button>
        </div>
    </header>
    </div>
  );
}

export default Navbar;
