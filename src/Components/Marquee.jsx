import React from 'react'
import Eicher from '../assets/eicher.png'
import Jcb from '../assets/JCB-Logo.png'
import Bkt from '../assets/bkt-logo.png'


const Marquee = () => {
  return (
    <>
      <div className='marquee-txt flex'>
        <marquee behavior='scroll' direction='left' className='flex'>
          <div className='flex'>
            <img src={Eicher} alt='' />
          </div>
          <div className='flex'>
            <img src={Eicher} alt='' />
          </div>

          <div className='flex'>
            <img src={Eicher} alt='' />
          </div>

          <img src={Jcb} alt='' />
          <img src={Bkt} alt='' />
        </marquee>
      </div>
    </>
  )
}

export default Marquee
