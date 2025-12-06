import React, { useState } from "react";
import "./Accordion";
import imgItem from "../assets/ev-logo.png";

const HyperAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Small Trucks",
      items: [
        {
          content: ["Pro X - "],
          listitem: ["GVW - 3 Ton", "GVM - 3.5 Ton"],
          image: imgItem, // add your image path here
        },
        {
          content: ["Pro X - Diesel"],
          listitem: ["GVW - 3 Ton", "GVM - 3.5 Ton"],
        },
      ],
    },
    {
      title: "Light & Medium Duty Trucks",
      items: [
        {
          content: ["Varients"],
          listitem: [
            "Sub 5 Ton",
            "Light Duty",
            "Medium Duty",
            "Tipper",
          ],
        },
      ],
    },
    {
      title: "Heavy Duty Trucks",
      items: [
        {
          content: ["Varients"],
          listitem: ["Haulage", "Tipper", "Tractor Trailer"],
        },
      ],
    },
    {
      title: "Buses",
      items: [
        {
          content: ["Varients"],
          listitem: [
            "School Bus",
            "Staff Bus",
            "Route Permit",
            "Bus Chassis",
   
          ],
        },
      ],
    },
    {
      title: "Service Contact",
      items: [
        {
          content: ["+91 96291 40515"],
          listitem: [],
        },
      ],
    },
    {
      title: "Sales Contact",
      items: [
        {
          content: ["+91 89258 81267"],
          listitem: [],
        },
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
              {item.items?.map((sub, idx) => (
                <div key={idx} className="mb-4">
                 
                  {/* Content */}
                  {sub.content?.map((para, i) => (
                    <p key={i} className="mb-2 flex items-center gap-2">
                      {para}

                      {/* Image placed right after text */}
                      {i === 0 && sub.image && (
                        <img
                          src={sub.image}
                          alt={para}
                          className="w-10 h-10 inline-block"
                        />
                      )}
                    </p>
                  ))}

                  {/* List */}
                  {sub.listitem && (
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      {sub.listitem.map((point, j) => (
                        <li key={j}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HyperAccordion;
