import React, { useState } from "react";
import "./Accordion";

const HyperAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Engineered for Modern Infrastructure",
      content: [
        "Our concrete equipment is engineered to meet the growing demands of modern infrastructure projects — from residential buildings to bridges, roads, and metro construction. AJAX's innovations, like Load Cell-based Weighing Systems, Smart Fleet Monitoring, and IoT-enabled equipment, offer unmatched reliability and productivity.",
      ],
    },
    {
      title: "Driving Innovation Through Technology",
      content: [
        "Technology has always been the forte of AJAX’s business at the intersection of repertoire of engineering knowledge about concreting segment together with the core creation of customer values through effectual customer relationship management. Leveraging technology to offer innovative products has been AJAX’s strength all through.",
      ],
    },
    {
      title: "Your Journey, Our Priority",
      content: [
        "AJAX’s support network is spread across the length and breadth of the country, ensuring you are never far away from the timely service when required. The full-fledged team of skilled engineers are trained to handle both preventive and reactive maintenance on site during emergencies. To ensure round-the-clock service support, customers can reach our 24 x 7 Customer care for all your queries and requests. AJAX offers following service options to ensure optimum availability of machines and enhance customer satisfaction.",
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
            <div className="p-4 text-gray-600 border-t">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HyperAccordion;
