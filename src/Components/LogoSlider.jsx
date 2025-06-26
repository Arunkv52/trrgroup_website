import React from 'react'
import Slider from 'react-slick'
import Eicher from '../assets/eicher.png'
import Jcb from '../assets/JCB-Logo.png'
import Bkt from '../assets/bkt-logo.png'
import '../Components/LogoSlider.css'

export default function SimpleSlider () {

var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 6, // Default for desktop
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2
      }
    }
  ]
}

  return (
    <Slider {...settings}>
      <div className='client_logo'>
        <img src={Eicher} alt='' />
      </div>
      <div className='client_logo'>
        <img src={Jcb} alt='' />
      </div>
      <div className='client_logo'>
        <img src={Bkt} alt='' />
      </div>
      <div className='client_logo'>
        <img src={Eicher} alt='' />
      </div>
      <div className='client_logo'>
        <img src={Jcb} alt='' />
      </div>
      <div className='client_logo'>
        <img src={Bkt} alt='' />
      </div>
     
    </Slider>
  )
}
