import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer className='bg-black text-white flex flex-wrap px-5 py-10 md:px-10 md:py-[70px]'>
        <div className='w-full md:w-1/2 mb-6 md:mb-0'>
          <p className='text-[15px] pb-3'>Trr Group</p>
          <ul className='text-[23px]'>
            <li>About Trr Group</li>
            <li>Future of transportation</li>
            <li>Careers</li>
            <li>News & media</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className='w-full md:w-1/4 mb-6 md:mb-0'>
          <p className='text-[15px] pb-3'>Trr Cars</p>
          <ul className='text-[23px]'>
            <li>Our cars</li>
            <li>About Trr Cars</li>
            <li>Sustainability</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Contact us</li>
            <li>Support</li>
          </ul>
        </div>


         <div className='w-full md:w-1/4 mb-6 md:mb-0'>
          <p className='text-[15px] pb-[20px]'>Trr Cars</p>
          <ul className='text-[23px]'>
            <li>Our cars</li>
            <li>About Trr Cars</li>
            <li>Sustainability</li>
          </ul>
        </div>
        

        <div className='w-full md:w-full flex flex-col items-end pt-10'>
          <p className='text-[13px] text-gray-700'>Copyright TRR Group</p>
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
