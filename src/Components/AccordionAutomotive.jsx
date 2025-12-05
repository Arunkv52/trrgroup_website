import React, { useState } from "react";
import "./Accordion";

const HyperAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Brands We Deal",
      content: [
        "TRR Automotive is built on a knowledgeable, friendly team dedicated to customer satisfaction. Our decade of returning customers reflects our commitment to quality service.",
        "We focus on:",
      ],
      listitem: [
        "Professionalism",
        "Teamwork",
        "Continuous training & development",
        "A positive work environment",
        "Strong employee engagement",
        "Ongoing improvement",
      ],
    },
    {
      title: "Customer Service",
      content: [],
      listitem: [
        "We deliver the support you need.",

        "Our customers are at the heart of our business, and we aim to provide world-class support with 100% satisfaction.",

        "We understand that this business is built on relationships as much as machines, so we support your equipment throughout its entire life.",

        "Our goal is to ensure minimum downtime for your machines through:",

        "18 outlets with 7 workshops",

        "5 Mobile Service Vans for fast service and coverage across all interior regions",
      ],
    },
    {
      title: "Products Parts Support",
      content: [
        "No one is as close as near 19 branches in 8 districts with man power strength of 360+ people.",
      ],
      listitem: [
        "We ensure you get the right parts at the right time, whether your equipment is used for construction, landscaping, agriculture, or general maintenance.",

        "Our parts department is staffed with experienced, customer-friendly professionals ready to assist you.",

        "We maintain smart inventory control to keep the most-needed parts readily available for quick pickup or delivery.",

        "Need a rare or unusual part? We can arrange it quickly, even if its not in stock.",

        "No long trips required — simply call us or order online, and your parts can be delivered within 48 hours.",

        "No matter the size or type of application, our team ensures you get the right parts fast, so you can get back to work with minimal downtime.",
      ],
    },
  ];

  return (
    <div className="space-y-4 w-full mt-10">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded cursor-pointer"
        >
          <button
            onClick={() => toggle(index)}
            className="flex items-center justify-between w-full p-4 text-left font-medium text-gray-800 bg-gray-300 hover:bg-gray-100"
          >
            <span>{item.title}</span>
            <svg
              className={`w-5 h-5 transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === index && (
            <div className="p-4 text-gray-600 border-t">
              {/* Content paragraphs */}
              {item.content?.map((para, i) => (
                <p key={i} className="mb-2">
                  {para}
                </p>
              ))}

              {/* Bullet List */}
              {item.listitem && (
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  {item.listitem.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HyperAccordion;
