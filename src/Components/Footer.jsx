import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer className='bg-black text-white flex flex-wrap px-5 py-10 md:px-25 md:py-[70px]'>
        <div className='w-full md:w-1/2 mb-6 md:mb-0 pb-7'>
          <p className='text-[15px] pb-3 font-logo'>TRR Group of Companies</p>
          <ul className='text-[15px]'>
            <li>
              New No.5, 1st Cross Street, Seethammal Extn, <br /> Teynampet,
              Chennai -600 018
            </li>
            <li className='pt-5 hover:text-red-600'><a href="tel:+919841012828">Phone : +91 98410 12828</a></li>
            <li className='pt-5 hover:text-red-600'><a href="emailto:trramprasadh@gmail.com">Email : trramprasadh@gmail.com</a></li>
          </ul>
        </div>

        <div className='w-full md:w-1/4 mb-6 md:mb-0 pb-7'>
          <p className='text-[15px] pb-3'>Our Products</p>
          <ul className='text-[15px]'>
            <li  className='pb-1'>
              <a href="#" className='hover:text-red-700'>Tractors</a>
            </li>
            <li className='pb-1'><a href="#" className='hover:text-red-700'>Automotive</a></li>
            <li className='pb-1'><a href="#" className='hover:text-red-700'>Trucks</a></li>
            <li className='pb-1'><a href="#" className='hover:text-red-700'>Bus</a></li>
            <li className='pb-1'><a href="#" className='hover:text-red-700'>Infra</a></li>
          </ul>
        </div>

        <div className='w-full md:w-1/4 mb-6 md:mb-0 pb-7'>
          <p className='text-[15px] pb-[20px]'>Social</p>
          <ul className='text-[15px]'>
            <li className='pb-1'><a href="https://www.facebook.com/TRRautomotive/" className='hover:text-red-700'>Facebook</a></li>
            <li className='pb-1'><a href="https://www.instagram.com/trrautomotive/" className='hover:text-red-700'>Instagram</a></li>
            <li className='pb-1'><a href="https://youtube.com/@trrautomotive-jcb?si=3VycRFnYI2MKpc3-" className='hover:text-red-700'>Youtube</a></li>
          </ul>
        </div>

        <div className='w-full md:w-full flex flex-col items-end pt-0 md:pt-10'>
          <p className='text-[13px] text-gray-700'>
            Copyright TRR | Developed by <a href="www.prismadverto.com" className='hover:bg-red-600'>Prism Adverto Pvt Ltd</a>
          </p>
          <div className='footer-privacy'>
            <ul className='flex gap-2 pt-2'>
              <li className='text-[14px] hover:text-red-500'><a href="#">Privacy</a></li>
              <li className='text-[14px] hover:text-red-500'><a href="#">Cookies</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
