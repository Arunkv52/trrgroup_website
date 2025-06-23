import React, { useState } from 'react'
import '../Components/Accordion'

const HyperAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = index => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const items = [
    {
      title: 'What is HyperUI?',
      content:
        'HyperUI is a collection of free open-source Tailwind CSS components.'
    },
    {
      title: 'Can I use it with React?',
      content:
        'Yes, just convert the HTML to JSX and use React state for interactivity.'
    },
    {
      title: 'Is it free to use?',
      content: 'Absolutely! HyperUI is free and open-source.'
    }
  ]

  return (
    <div className='space-y-4 w-full mt-10'>
      {items.map((item, index) => (
        <div key={index} className='border border-gray-200 rounded'>
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
