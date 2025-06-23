import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../Pages/Home.css'
import Carousal from '../Components/Carousal'
import Volvo_videos from '../assets/Volvo_trucks.mp4'
import istock from '../assets/istock.jpg'
import HyperAccordion from '../Components/Accordion'
import Happy from '../assets/happy-drivers.webp'

const Home = () => {
  return (
    <>
      <Header />
      <div className='header-banner w-full'>
        <h1 className='text-5xl px-10 relative top-1/2 text-white font-semibold'>
          MADE FOR PEOPLE
        </h1>
        <h1 className='text-5xl px-10 relative top-1/2 text-white font-semibold'>
          BY PEOPLE
        </h1>
      </div>
      <div className='w-full md:pt-10 pb-5'>
        <div className='ban-next px-5 md:px-25 py-10'>
          <p>EXPLORE VOLVO</p>
          <h5 className='text-4xl font-semibold'>
            For customers around the world
          </h5>
        </div>
        <Carousal />
      </div>
      {/* Video Section */}
      <div className='w-full py-8 md:px-15 md:py-10'>
        <div className='video_item px-5 md:px-10 md:py-10'>
          <video src={Volvo_videos} controls muted loop className='video-sec' />
        </div>
      </div>
      {/* next video section */}
      <div className='nxt-video flex flex-wrap md:px-25 px-5 py-10'>
        <div className='next-left w-full md:w-1/2'>
          <p className='text-[14px]'>CAREER</p>
          <h3 className='text-2xl font-semibold md:text-4xl pb-7 md:pb-0'>
            For every person who wants to make real difference
          </h3>
          <HyperAccordion />
        </div>
        <div className='next-right w-full md:w-1/2 p-2'>
          <img src={istock} alt='' />
        </div>
      </div>

      {/* Banner text */}
      <div className='w-full md:px-25 py-10'>
        <div className='banner-txt'>
          <p className='text-white pt-10 text-[38px] text-center uppercase font-semibold'>
            Welcome TRR Group
          </p>
        </div>
      </div>

      {/* Happy Drivers start */}
      <div className='w-full flex flex-wrap md:px-25 py-15'>
        <div className='hpy-left md:w-1/2'>
          <p className='text-[14px]'>CAREER</p>
          <h3 className='text-2xl font-semibold md:text-4xl pb-7 md:pb-0'>
            For every person who wants to make real difference
          </h3>
          <p className='pt-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, iste
            possimus. Deleniti provident veniam commodi dolor? 
          </p>
        </div>
        <div className='hpy-right md:w-1/2'>
          <img src={Happy} alt='' />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
