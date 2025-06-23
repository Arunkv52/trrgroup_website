import React from 'react'
import Slider from 'react-slick'
import './Carousal.css'

function Responsive () {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <>
      <div className='slider-item px-5 md:px-25 pb-10'>
        <div className='slider-container'>
          <Slider {...settings}>
            <div className='slide md:pr-2.5'>
              <div className='SliderItem-1'>
                <a href='#'>
                  <div className='slider-content relative top-1/2 left-10 text-white'>
                    <p className='text-[12px]'>Trucks</p>
                    <h3 className='text-3xl md:text-[35px] uppercase font-semibold'>
                      Driving
                    </h3>
                    <h3 className='text-3xl md:text-[35px] uppercase font-semibold'>
                      Progress
                    </h3>
                  </div>
                </a>
              </div>
            </div>
            <div className='slide md:pr-2.5'>
              <div className='SliderItem-2'>
                <a href='#'>
                  <div className='slider-content relative top-1/2 left-10 text-white'>
                    <p className='text-[12px]'>Cars</p>
                    <h3 className='text-[35px] uppercase font-semibold'>
                      Driving
                    </h3>
                    <h3 className='text-[35px] uppercase font-semibold'>
                      Progress
                    </h3>
                  </div>
                </a>
              </div>
            </div>
            <div className='slide md:pr-2.5'>
              <div className='SliderItem-3'>
                <a href='#'>
                  <div className='slider-content relative top-1/2 left-10 text-white'>
                    <p className='text-[12px]'>Trucks</p>
                    <h3 className='text-3xl md:text-[35px] uppercase font-semibold'>
                      Driving
                    </h3>
                    <h3 className='text-3xl md:text-[35px] uppercase font-semibold'>
                      Progress
                    </h3>
                  </div>
                </a>
              </div>
            </div>
            <div className='slide md:pr-2.5'>
              <div className='SliderItem-4'>
                <a href='#'>
                  <div className='slider-content relative top-1/2 left-10 text-white'>
                    <p className='text-[12px]'>Cars</p>
                    <h3 className='text-[35px] uppercase font-semibold'>
                      Driving
                    </h3>
                    <h3 className='text-[35px] uppercase font-semibold'>
                      Progress
                    </h3>
                  </div>
                </a>
              </div>
            </div>
                
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Responsive
