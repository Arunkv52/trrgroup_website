import React, { useState } from "react";
import "./Accordion";

const HyperAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Small Trucks",
      content: [],
      listitem: [
        "Eicher small trucks deliver excellent mileage, strong performance, and low operating costs.",
        "Built for reliability and high payload efficiency, they are ideal for city deliveries and last-mile logistics.",
      ],
    },
    {
      title: "Light & Medium Duty Trucks",
      content: [],
      listitem: [
        "Eicher Light & Medium Trucks offer powerful performance, high fuel efficiency, and excellent durability for daily commercial operations.",
        "Designed for higher payloads and long-distance reliability, they ensure lower maintenance costs and maximum business productivity.",
      ],
    },
    {
      title: "Heavy Duty Trucks",
      content: [],
      listitem: [
        "The BS VI Eicher Pro Heavy Duty trucks (18.5–55T GVW) are engineered for superior performance and long-term reliability.",
        "They deliver maximum business efficiency by boosting productivity and reducing overall operating costs.",
      ],
    },
    {
      title: "Buses",
      content: [],
      listitem: [
        "The all-new Eicher BSVI Bus Range delivers smart, comfortable, and advanced performance with excellent fuel efficiency and profitability.",
        "Available in School, Staff, Tourist and Route Permit options, Eicher offers the perfect bus for every transport need.",
      ],
    },
    {
      title: "Uptime Services",
      content: [],
      listitem: [
        "Eicher ensures superior uptime with reliable vehicles, trained experts, and advanced digitised support services.",
        "By delivering over 98% uptime, Eicher helps your transport business stay efficient, competitive, and always on the move.",
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
