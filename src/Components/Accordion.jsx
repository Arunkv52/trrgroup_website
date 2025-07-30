import React, { useState } from 'react'
import '../Components/Accordion'

const HyperAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = index => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const items = [
    {
      title: 'Brands We Deal',
      content: [
        'It’s hard to find a better group of people than the folks at TRR Automotive. Our knowledgeable & friendly staff will help you every step of the way, throughout your entire buying process. We are committed to customer satisfaction, so it is no wonder why we have had very pleased customers returning to us time again throughout our decade old history.',
        'TRR strongly believes that talented people are the competitive advantage and is committed to people excellence. Professionalism, Teamwork, focus on training & development, and a congenial work environment ensure that TRR employees excel in their performance. Constant monitoring of employee engagement levels & organizational health indices & continuous improvement plans have put TRR on the path of becoming a “Preferred Employer”.'
      ]
    },
    {
      title: 'Customer Service',
      content: [
        'We deliver the support you need.',
        'Our customers’ are at the very heart of our business – we aim to provide world-class support and deliver 100% customer satisfaction.',
        'We understand that this is a business about relationships, as well as machines. We aim for customer satisfaction every time, and understand that this means supporting the machine throughout its life. We aim to ensure minimum downtime of your machines by -',
        '5 Sales & Service Outlets in Tractor division, 18 outlets with 5 workshops in Automotive division 5 Mobile Service Vans for faster movement & reaching all the interiors of our territory.'
      ]
    },
    {
      title: 'Products Parts Support',
      content: [
        'The right parts at the right time Whether your equipment is used for construction, landscaping, agriculture or general and maintenance, you can’t work when it breaks down or needs service. The parts department at TRR Group is fully equipped with customer friendly experienced staff who know this. Our primary goal is to have the parts you need on hand for speedy pickup or delivery. We closely monitor parts demand for all our product range, to ensure we stock the right parts at the right time.',
        'If you need an unusual item we do not keep on hand, we can typically arrange one in the short span of time. Concerned about having to make a long & fuel consuming road trip to our parts store?',
        'All you have to do is give us a call, or look up & place your order online. Your parts can be delivered to your location in the next 48 hours.',
        'No matter how large or small the application, no matter what you need, our parts team will help you get the right parts at the right time, so you can get back to work.'
      ]
    },
      {
      title: 'Locations',
      content: [
        'Coimbatore / ', 'Ooty'
       ]
    }
  ]

  return (
    <div className='space-y-4 w-full mt-10'>
      {items.map((item, index) => (
        <div key={index} className='border border-gray-200 rounded cursor-pointer'>
          <button
            onClick={() => toggle(index)}
            className='flex items-center justify-between w-full p-4 text-left font-medium text-gray-800 bg-gray-300 hover:bg-gray-100'
          >
            <span>{item.title}</span>
            <svg
              className={`w-5 h-5 transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </button>
          {openIndex === index && (
            <div className='p-4 text-gray-600 border-t'>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  )
}

export default HyperAccordion
