import React from 'react'
import Slider from 'react-slick'
import topImg from '../assets/top-img.jpg'
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
        <img src={topImg} alt='' />
      </div>
      <div className='slider-img cursor-grab'>
        <img src={topImg} alt='' />
      </div>
      <div className='slider-img cursor-grab'>
        <img src={topImg} alt='' />
      </div>
      <div className='slider-img cursor-grab'>
        <img src={topImg} alt='' />
      </div>
    </Slider>
  )
}
