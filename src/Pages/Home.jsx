import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Pages/Home.css";
import Carousal from "../Components/Carousal";
import istock from "../assets/below-banner.jpg";
import HyperAccordion from "../Components/Accordion";
import Slider from "../Components/Slider";
import Button from "../Components/Button";
import AccordionAutomotive from "../Components/AccordionAutomotive";
import AccordionTrucks from "../Components/AccordionTrucks";
import AccordionInfra from "../Components/AccordionInfra";
import LogoSlider from "../Components/LogoSlider";
import JcbImg from "../assets/jcb-img.webp";
import TrrBanner from "../assets/trr-automotive-bg.webp";
import TrrTrucks from "../assets/trr-truck-img.jpg";
import InfraImage from "../assets/ajax-ban.webp";
import AutomotiveLogo from "../assets/automotive-logo.webp";
import TrrInfra from "../assets/trrinfra.jpg";
import TrrTractors from "../assets/trrtractors.jpg";
import TrrBus from "../assets/trrtrucks&buses.jpg";

const Home = () => {
  return (
    <>
      <Header />
      {/* Slider start */}
      <div className="slider w-full h-10/12 object-cover">
        <Slider />
      </div>
      <div className="w-full md:pt-10 pb-5">
        <div className="ban-next px-5 md:px-25 pb-5">
          <p className="text-[14px] pt-3">Our Divisions</p>
          <h5 className="text-[18px] md:text-[35px] font-semibold pt-1">
            From Regional Leaders to Building the India of Tomorrow
          </h5>
        </div>
        <Carousal />
      </div>

      {/* Content side */}
      <div className="w-full pt-10">
        <div className="px-5 md:px-25 bg-black py-25">
          <h3 className="text-2xl font-semibold md:text-4xl pb-2 md:pb-5 text-white">
            About TRR Group
          </h3>
          <h6 className="pb-5 text-white text-justify">
            Driving India’s Growth in Agriculture and Infrastructure Since 2001,
            TRR Tractors has built a strong reputation in the agricultural
            sector by providing expert product advice, dependable after-sales
            support, and unmatched customer trust. Our dedication has earned us
            a loyal customer base and paved the way for continuous growth. In
            2007, we expanded with TRR Automotive, partnering with global leader
            JCB to deliver top-quality construction, quarry, and earthmoving
            equipment. Backed by over a decade of industry expertise, we are
            poised to capitalize on India’s booming infrastructure and
            construction markets.
          </h6>
          <h6 className="pb-5 text-white text-justify">
            In 2025, we have further expanded with Volvo Eicher, one of the
            leading Commercial Vehicle brand in India to cater our customers
            with one more excellent brand.
          </h6>
          <h6 className="pb-5 text-white text-justify">
            Additionally, we have extended our portfolio with Ajax Engineering
            limited, pioneering in concrete solutions in India.
          </h6>
          <h6 className="pb-5 text-white text-justify">The TRR Group is your complete partner for agricultural, construction,
          quarry, Concrete machinery and commercial Vehicle needs. From
          personalized consultancy to comprehensive support, we empower farmers
          and builders across North Tamil Nadu to maximize productivity and
          success—truly building the India of tomorrow.</h6>
          
        </div>
      </div>

      {/* 1st video section */}
      <div className="nxt-sec py-[40px]">
        <h3 className="text-2xl font-semibold md:text-4xl pb-0 md:pb-0 text-center">
          Empowering Customers with Expert Support
        </h3>
        <div className="nxt-video flex flex-wrap md:px-25 px-5 py-15">
          <div className="next-left w-full md:w-1/2 p-2">
            <h3 className="text-2xl font-semibold md:text-[25px] pb-0 md:pb-0">
              TRR Tractors
            </h3>
            <HyperAccordion />
            <div className="py-5">
              <a
                href="https://trrtractors.com/"
                className="bg-black px-8 py-2 text-white hover:bg-red-600"
              >
                <button className='cursor-pointer'>Know More </button>
              </a>
            </div>
          </div>
          <div className="next-right bg-r1 w-full md:w-1/2 p-3">
            <div className="nxt-img flex justify-center items-end">
              <img src={TrrTractors} alt="" className="md:w-[250px]" />
            </div>
          </div>
        </div>
      </div>

      {/* next video section */}
      <div className="nxt-video col-rev flex flex-wrap md:px-25 px-5 md:py-15">
        <div className="next-right bg-r2 w-full md:w-1/2 pt-10 md:p-5">
          <div className="nxt-img flex justify-center items-end">
            <img src={AutomotiveLogo} alt="" className="md:w-[250px]" />
          </div>
        </div>
        <div className="next-left  w-full md:w-1/2 p-2">
          <h3 className="text-2xl font-semibold md:text-[25px] pb-0 md:pb-0">
            TRR Automotive
          </h3>
          <AccordionAutomotive />
          <div className="py-5">
            <a
              href="https://trrautomotive.com/"
              className="bg-black px-8 py-2 text-white hover:bg-red-600"
            >
              <button className='cursor-pointer'>Know More </button>
            </a>
          </div>
        </div>
      </div>

      {/* next video section */}
      <div className="nxt-video flex flex-wrap md:px-25 px-5 py-15">
        <div className="next-left w-full md:w-1/2 p-2">
          <h3 className="text-2xl font-semibold md:text-[25px] pb-0 md:pb-0">
            TRR Trucks and Buses
          </h3>
          <AccordionTrucks />
          <div className="py-5">
            <a
              href="https://trrtrucksandbuses.com/"
              className="bg-black px-8 py-2 text-white hover:bg-red-600"
            >
              <button className='cursor-pointer'>Know More </button>
            </a>
          </div>
        </div>
        <div className="next-right bg-r3 w-full md:w-1/2 pt-10 md:p-5">
          <div className="nxt-img flex justify-center items-end">
            <img src={TrrBus} alt="" className="md:w-[250px]" />
          </div>
        </div>
      </div>

      {/* next video section */}
      <div className="nxt-video col-rev flex flex-wrap md:px-25 px-5 md:py-15">
        <div className="next-right bg-r4 w-full md:w-1/2 pt-10 md:p-5">
          <div className="nxt-img flex justify-center items-end">
            <img src={TrrInfra} alt="" className="md:w-[200px]" />
          </div>
        </div>
        <div className="next-left  w-full md:w-1/2 p-2">
          <h3 className="text-2xl font-semibold md:text-[25px] pb-0 md:pb-0">
            TRR Infra
          </h3>
          <AccordionInfra />
          <div className="py-5">
            <a
              href="https://trrinfra.com/"
              className="bg-black px-8 py-2 text-white hover:bg-red-600"
            >
              <button className='cursor-pointer'>Know More </button>
            </a>
          </div>
        </div>
      </div>

      {/* Banner text */}
      <div className="w-full  py-10">
        <div className="banner-txt">
          <p className="text-white pt-10 text-2xl md:text-[38px] text-center uppercase font-semibold">
           
          </p>
        </div>
      </div>

      {/* Marquee start */}
      <div className="w-full px-5 md:px-25 py-5 md:py-15">
        <LogoSlider />
      </div>
      <Footer />
    </>
  );
};

export default Home;
