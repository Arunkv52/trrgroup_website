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
            TRR Tractors started in 2001 has its own prominent place in the
            agriculture equipment market in its territory establishing a strong
            customer base and confidence through the right suggestions for
            purchase of product to its customers and also the non tiring
            customer support through which we have won the credibility of our
            customer paving way for our growth which has given us the confidence
            to venture in to more & more endeavors.
          </h6>
          <h6 className="pb-5 text-white text-justify">
            TRR Automotive the second feather in the cap is a part of the TRR
            Group of companies, has been engaged in the sale & support of
            construction, quarry & earth moving equipment since 2007. With over
            a decade of experience in the field, and association with JCB, the
            world leader in Construction Equipments, TRR is well placed to take
            full advantage of the construction & infrastructural much awaited
            growth in Indian economy expected sooner than later that India is
            poised to experience
          </h6>
          <h6 className="pb-5 text-white text-justify">
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
                href="#"
                className="bg-black px-8 py-2 text-white hover:bg-red-600"
              >
                <button>Know More </button>
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
              href="#"
              className="bg-black px-8 py-2 text-white hover:bg-red-600"
            >
              <button>Know More </button>
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
              href="#"
              className="bg-black px-8 py-2 text-white hover:bg-red-600"
            >
              <button>Know More </button>
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
              href="#"
              className="bg-black px-8 py-2 text-white hover:bg-red-600"
            >
              <button>Know More </button>
            </a>
          </div>
        </div>
      </div>

      {/* Banner text */}
      <div className="w-full  py-10">
        <div className="banner-txt">
          <p className="text-white pt-10 text-2xl md:text-[38px] text-center uppercase font-semibold">
            Over 25 Years of Excellence
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
