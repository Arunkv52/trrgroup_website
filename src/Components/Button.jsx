import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Button = () => {
  return (
    <>
      <div className='btn mt-5 animate-fadeIn'>
        <a href="#">
        <button className='group bg-black px-8 py-3 text-white flex items-center gap-2 transition-all duration-300 ease-in-out hover:bg-gray-800 hover:scale-105 hover:cursor-pointer'>
          Know More{' '}
          <FaArrowRightLong className='transition-transform duration-300 group-hover:translate-x-1' />
        </button>
        </a>
      </div>
    </>
  )
}

export default Button
