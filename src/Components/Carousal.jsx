import React from "react";
import Slider from "react-slick";
import "./Carousal.css";

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="slider-item px-5 md:px-25 pb-10">
        <div className="slider-container">
          <Slider {...settings}>
            <div className="slide md:pr-0">
              <div className="SliderItem-1">
                <a href="#">
                  <div className="slider-content relative left-2 md:left-2 p-2 md:top-1/12 text-white">
                    <p className="text-[30px] pb-2">TRR Tractors</p>
                    <h3 className="text-[15px] md:text-[16px] relative md:bottom-[-250px]">
                      John Deere Tractors - World leaders and synonymous with
                      quality and innovation in agricultural machinery.
                    </h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="slide md:pr-0">
              <div className="SliderItem-2">
                <a href="#">
                  <div className="slider-content relative top-10  md:top-1/12 left-2 md:left-2 p-2 text-white">
                    <p className="text-[30px] pb-2">TRR Automotive</p>
                    <h3 className="text-[15px] md:text-[16px] relative md:bottom-[-250px]">
                      JCB India Limited - is the market leader in indian
                      construction company with changing so many lives
                      positively.
                    </h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="slide md:pr-0">
              <div className="SliderItem-3">
                <a href="#">
                  <div className="slider-content relative top-10  md:top-1/12 left-2 md:left-2 p-2 text-white">
                    <p className="text-[30px] pb-2">TRR Trucks & Buses Pvt Ltd</p>
                    <h3 className="text-[15px] md:text-[16px] relative md:bottom-[-200px]">
                      Volvo Eicher - is the consistanly growing strong
                      commercial vehicle player in indian industry and
                      unbeatable fuel efficiency.
                    </h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="slide md:pr-0">
              <div className="SliderItem-4">
                <a href="#">
                  <div className="slider-content relative top-10  md:top-1/12 left-2 md:left-2 p-2 text-white">
                    <p className="text-[30px] pb-2">TRR Infra</p>
                    <h3 className="text-[15px] md:text-[16px] relative md:bottom-[-250px]">
                      AJAX - Pioneer in concerete solutions and leads globally
                      in SLCMs with 25,000+ deliveries, trusted to elevate your
                      projects.
                    </h3>
                  </div>
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Responsive;
