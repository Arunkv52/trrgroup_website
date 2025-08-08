import React, { useState } from "react";
import "./Accordion";

const HyperAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Heavy Duty Trucks",
      content: [
        "The new range of BS VI Eicher Pro Heavy Duty haulage trucks and tractors, available from 18.5-55 tonne GVW, is dsigned and developed to provide unparalleled business advantage by maximizing product performance right through the life cycle of the vehicles and minimizing the cost of operations",
      ],
    },
    {
      title: "Buses",
      content: [
        "Eicher presents the all new Eicher BSVI Bus Range, the smart, comfortable, advanced and efficient range of next gen buses designed to deliver maximum Fuel Efficiency and Profitability. Choose among our School, Staff, Tourist or Route Permit BSVI bus range, We have a bus tailored for your every need!",
      ],
    },
    {
      title: "Uptime Services",
      content: ["From departure to arrival, it's a race against time and challenges on the road. At Eicher, we understand that superior uptime is the best route to ensure your transportation business is a success, so, we go the extra mile. We do not just offer dependable vehicles, we provide unwavering support through our trained experts and digitised services. This is how we deliver over 98% uptime across key transport segments."],
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
            <div className="p-4 text-gray-600 border-t">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HyperAccordion;
