import React from 'react'
import Slider from 'react-slick'
import Banner1 from '../assets/banner-1.jpg'
import Banner2 from '../assets/banner-2.jpeg'
import Banner3 from '../assets/banner-3.jpg'
import Banner4 from '../assets/banner-4.jpg'
import Banner5 from '../assets/banner-5.jpg'

import '../Components/Slider.css'

export default function SimpleSlider () {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  }
  return (
    <Slider {...settings}>
      <div className='slider-img cursor-grab'>
        <img src={Banner1} alt='' />
      </div>
      <div className='slider-img cursor-grab'>
        <img src={Banner2} alt='' />
      </div>
      <div className='slider-img cursor-grab'>
        <img src={Banner3} alt='' />
      </div>
      <div className='slider-img cursor-grab'>
        <img src={Banner4} alt='' />
      </div>
      <div className='slider-img cursor-grab'>
        <img src={Banner5} alt='' />
      </div>
      
    </Slider>
  )
}
