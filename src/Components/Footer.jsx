import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='bg-black text-white flex flex-wrap px-5 py-10 md:px-10 md:py-[70px]'>
        <div className='w-full md:w-1/2 mb-6 md:mb-0'>
          <p className='text-[15px] pb-3'>Trr Group of Companies</p>
          <ul className='text-[23px]'>
            <li>
              New No.5, 1st Cross Street, Seethammal Extn, <br /> Teynampet,
              Chennai -600 018
            </li>
            <li className='pt-5'><a href="tel:+919841012828">Phone : +91 98410 12828</a></li>
            <li className='pt-5'><a href="emailto:trramprasadh@gmail.com">Email : trramprasadh@gmail.com</a></li>
          </ul>
        </div>

        <div className='w-full md:w-1/4 mb-6 md:mb-0'>
          <p className='text-[15px] pb-3'>Our Products</p>
          <ul className='text-[23px]'>
            <li>
              <a href='#'>Tractors</a>
            </li>
            <li><a href="#">Automotive</a></li>
            <li><a href="#">Trucks</a></li>
            <li><a href="#">Bus</a></li>
            <li><a href="#">Infra</a></li>
          </ul>
        </div>

        <div className='w-full md:w-1/4 mb-6 md:mb-0'>
          <p className='text-[15px] pb-[20px]'>Social</p>
          <ul className='text-[23px]'>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Youtube</a></li>
          </ul>
        </div>

        <div className='w-full md:w-full flex flex-col items-end pt-10'>
          <p className='text-[13px] text-gray-700'>
            Copyright TRR Group | Developed by <a href="www.prismadverto.com" className='hover:bg-red-600'>Prism Adverto Pvt Ltd</a>
          </p>
          <div className='footer-privacy'>
            <ul className='flex gap-2 pt-2'>
              <li className='text-[14px]'>Privacy</li>
              <li className='text-[14px]'>Cookies</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
