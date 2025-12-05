import React from 'react'
import Slider from 'react-slick'
import '../Components/LogoSlider.css'
import JohnDeere from '../assets/Logo-01.png'
import Dasmash from '../assets/Logo-02.png'
import Jcb from '../assets/Logo-03.png'
import Ajax from '../assets/Logo-04.png'
import Eicher from '../assets/Eicher-Motors-Logo.jpg'
import Bkt from '../assets/Logo-07.png'


export default function SimpleSlider () {

var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4, // Default for desktop
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
        <img src={JohnDeere} alt='' />
      </div>
      <div className='client_logo'>
        <img src={Dasmash} alt='' />
      </div>
        <div className='client_logo'>
        <img src={Jcb} alt='' />
      </div>
      <div className='client_logo'>
        <img src={Eicher} alt='' />
      </div>
      <div className='client_logo'>
        <img src={Bkt} alt='' />
      </div>
      <div className='client_logo'>
        <img src={Ajax} alt='' />
      </div>
   
     
    </Slider>
  )
}
