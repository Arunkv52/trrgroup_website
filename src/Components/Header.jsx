import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import Logo from '../assets/TRR-Group-logo.png'
import TractorsLogo from '../assets/tractors-logo.png'
import AutomotiveLogo from '../assets/automotive-logo.webp'
import TrrInfra from "../assets/trrinfra.jpg"
import TrrTractors from '../assets/trrtractors.jpg'
import TrrBus from '../assets/trrtrucks&buses.jpg'

const OffcanvasMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Top Bar */}
      <header className='md:mx-25 px-5 py-4 flex justify-between items-center z-50 relative'>
        <img src={Logo} alt='' className='w-[180px]' />
        <button
          onClick={() => setIsOpen(true)}
          className='block hover:cursor-pointer'
        >
          <GiHamburgerMenu size={28} />
        </button>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-transparent bg-opacity-40 z-40'
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Offcanvas Panel (works on all screen sizes) */}
      <div
        className={`
          fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Close Button */}
        <div className='flex justify-between items-center p-4 border-b'>
          <h2 className='text-lg font-semibold'>Dealing Products</h2>
          <button
            className='hover:cursor-pointer'
            onClick={() => setIsOpen(false)}
          >
            <IoMdClose size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className='p-6 flex flex-col gap-4 text-gray-700 font-medium'>
          <ul>
            <li>
                <img src={TrrTractors} alt="" className='md:w-[180px]'/>
                <p className='text-[14px] pt-2 pb-2'>
                 Authorised Dealers for John Deere India Pvt Ltd
                </p>
                 <a href='https://trrtractors.com/' className='hover:text-red-500 text-[14px] underline'>visit site</a>
              
            </li>
            <li className='pt-10'>
                <img src={AutomotiveLogo} alt="" className='md:w-[200px]' />
                <p className='text-[14px] pt-2 pb-2'>
                 Authorised Dealers for JCB India Pvt Ltd
                </p>
                 <a href='https://trrautomotive.com/' className='hover:text-red-500 text-[14px] underline'>visit site</a>
            </li>
            <li className='pt-10'>
               <img src={TrrBus} alt="" className='md:w-[250px]' />
                <p className='text-[14px] pt-2 pb-2'>
                 Authorised Dealers for Eicher Commercial Vehicles
                </p>
                 <a href='https://trrtrucksandbuses.com/' className='hover:text-red-500 text-[14px] underline'>visit site</a>
            </li>
            <li className='pt-10'>
               <img src={TrrInfra} alt="" className='md:w-[150px]' />
                <p className='text-[14px] pt-2 pb-2'>
                 Authorised Dealers for Ajax Engineering Ltd
                </p>
                 <a href='https://trrinfra.com/' className='hover:text-red-500 text-[14px] underline'>visit site</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default OffcanvasMenu
