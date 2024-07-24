import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className='bg-white shadow-lg'>
      <div className='container mx-auto px-6 py-3 flex justify-between items-center'>
        <Link to='/' className='text-blue-500 text-xl font-bold'>
          Logo
        </Link>
        <nav className='flex space-x-4'>
          <Link to='/' className='text-gray-800 hover:text-blue-500'>
            Home
          </Link>
          <Link to='/about' className='text-gray-800 hover:text-blue-500'>
            About
          </Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
