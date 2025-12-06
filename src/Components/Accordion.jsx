import React, { useState } from "react";
import "../Components/Accordion";

const HyperAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Brand We Deal",
      content: [],
      listitem: [
        "<strong>John Deere Tractors</strong>",
        "<strong>Dasmesh Harvester</strong>",
        "<strong>BKT Tyres</strong>",
        "<strong>Stihl Equipments</strong>",
      ],
    },
    {
      title: "AutoTrac™ Guidance System ",
      content: [
        "Hands‑free straight‑path steering that improves field coverage and reduces operator fatigue—all your operations made smarter.",
      ],
      listitem: [],
    },
    {
      title: "Why Choose us",
      content: [
        "Selecting a John Deere tractor from TRR Tractors means investing in a legacy of durability, advanced engineering, and fuel efficiency—backed locally by our deep knowledge and support network.",
      ],
      listitem: [],
    },
    {
      title: "Contact us",
      content: ["+91 9176725499"],
      listitem: [],
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
                    <li key={j} dangerouslySetInnerHTML={{ __html: point }} />
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
