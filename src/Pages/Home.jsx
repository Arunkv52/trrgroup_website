import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../Pages/Home.css'
import Carousal from '../Components/Carousal'
import Volvo_videos from '../assets/jcb-videos.mp4'
import istock from '../assets/istock.jpg'
import HyperAccordion from '../Components/Accordion'
import Happy from '../assets/happy-drivers.webp'

const Home = () => {
  return (
    <>
      <Header />
      <div className='header-banner w-full'>
        <h1 className='text-3xl md:text-5xl px-10 md:px-25 relative top-1/2 text-white font-semibold'>
          MADE FOR PEOPLE
        </h1>
        <h1 className='text-3xl md:text-5xl px-10 md:px-25 relative top-1/2 text-white font-semibold'>
          BY PEOPLE
        </h1>
      </div>

      <div className='w-full md:pt-10 pb-5'>
        <div className='ban-next px-5 md:px-25 pb-5'>
          <p className='text-[14px] pt-3'>Our Growth Journey</p>
          <h5 className='text-[18px] md:text-[35px] font-semibold pt-1'>
            From Regional Leaders to Building the India of Tomorrow
          </h5>
        </div>
        <Carousal />
      </div>
      {/* Content side */}
      <div className='w-full pt-10'>
        <div className='px-5 md:px-25 bg-black py-20'>
          <p className='text-[14px] pb-4 text-white'>
            <strong>Hello and welcome</strong>
          </p>
          <h3 className='text-2xl font-semibold md:text-4xl pb-2 md:pb-5 text-white'>
            About TRR Group
          </h3>
          <h6 className='pb-5 text-white text-justify'>
            TRR Tractors started in 2001 has its own prominent place in the
            agriculture equipment market in its territory establishing a strong
            customer base and confidence through the right suggestions for
            purchase of product to its customers and also the non tiring
            customer support through which we have won the credibility of our
            customer paving way for our growth which has given us the confidence
            to venture in to more & more endeavors.
          </h6>
          <h6 className='pb-5 text-white text-justify'>
            TRR Automotive the second feather in the cap is a part of the TRR
            Group of companies, has been engaged in the sale & support of
            construction, quarry & earth moving equipment since 2007. With over
            a decade of experience in the field, and association with JCB, the
            world leader in Construction Equipments, TRR is well placed to take
            full advantage of the construction & infrastructural much awaited
            growth in Indian economy expected sooner than later that India is
            poised to experience
          </h6>
          <h6 className='pb-5 text-white text-justify'>
            TRR Group offers “one stop solution” to customers looking for
            Agricultural, Farming, Construction, quarry & road laying
            equipments, besides other applications through the various
            organizations under its banner. . We embark on business solutions
            starting with advice & consultancy in choosing the right product.
            TRR is a leading player in mechanization of the farming sector and
            in the infrastructure development activities in Tamilnadu, from
            agricultural mechanization, construction, quarry activities to
            building highways across Tamilnadu….truly “helping to build the
            India of tomorrow”. TRR has ambitious growth plans & the vision to
            achieve market leadership in all products & services it offers by
            being a customer centric organization, as well as a preferred
            employer. This helps in moving towards the vision of achieving
            customer delight, through the technically superior & more productive
            JCB products coupled with TRR’s world class product support, in
            maximizing customer’s profitability.
          </h6>
        </div>
      </div>

      {/* Video Section */}
      <div className='w-full pt-10 md:px-15 md:py-5'>
        <div className='video_item px-5 md:px-10 md:py-10'>
          <video src={Volvo_videos} controls muted loop className='video-sec' />
        </div>
      </div>
      {/* next video section */}
      <div className='nxt-video flex flex-wrap md:px-25 px-5 py-10'>
        <div className='next-left w-full md:w-1/2'>
          <p className='text-[14px]'>Heartly welcome</p>
          <h3 className='text-2xl font-semibold md:text-4xl pb-0 md:pb-0'>
            Empowering Customers with Expert Support
          </h3>
          <HyperAccordion />
        </div>
        <div className='next-right w-full md:w-1/2 pt-10 md:p-2'>
          <img src={istock} alt='' />
        </div>
      </div>

      {/* Banner text */}
      <div className='w-full md:px-25 py-10'>
        <div className='banner-txt'>
          <p className='text-white pt-10 text-2xl md:text-[38px] text-center uppercase font-semibold'>
            Welcome to TRR Group
          </p>
        </div>
      </div>

      {/* Happy Drivers start */}
      <div className='w-full flex flex-wrap px-5 md:px-25 py-5 md:py-15'>
        <div className='hpy-left md:w-1/2'>
          <p className='text-[14px]'>Meaningful progress</p>
          <h3 className='text-2xl font-semibold md:text-4xl pb-2 md:pb-0'>
            For every person who wants to make a real difference
          </h3>
          <p className='pt-0 md:pt-5'>
            At TRR Group, we believe that meaningful progress begins with
            purpose-driven people. Whether you’re a farmer growing food for the
            nation, a builder shaping tomorrow’s infrastructure, or a mechanic
            ensuring machines never stop running — your work matters.
          </p>
          <p className='pt-0 md:pt-5'>
            We are here to empower you with reliable equipment, expert guidance,
            and unmatched support so you can focus on what truly counts — making
            a real difference in your field, your community, and your country.
          </p>
          
        </div>
        <div className='hpy-right md:w-1/2 pt-5 md:pt-0'>
          <img src={Happy} alt='' />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
