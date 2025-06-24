import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center px-5 md:px-25 py-4">
        {/* Logo */}
        <div className="head-logo">
          <h6 className='text-[20px] font-semibold'>TRR Group</h6>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium text-gray-700">
          <li className="cursor-pointer hover:text-[#ff0000]"><a href="#">Tractors</a></li>
          <li className="cursor-pointer hover:text-[#ff0000]"><a href="#">Automotive</a></li>
          <li className="cursor-pointer hover:text-[#ff0000]"><a href="#">Trucks and Buses</a></li>
          <li className="cursor-pointer hover:text-[#ff0000]"><a href="#">Infra</a></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-5 pb-4">
          <ul className="flex flex-col gap-3 text-gray-700 font-medium">
            <li className="cursor-pointer hover:text-[#ff0000]">Tractors</li>
            <li className="cursor-pointer hover:text-[#ff0000]">Automotive</li>
            <li className="cursor-pointer hover:text-[#ff0000]">Trucks and Buses</li>
            <li className="cursor-pointer hover:text-[#ff0000]">Infra</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
