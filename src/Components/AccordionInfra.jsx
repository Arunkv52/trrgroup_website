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
      content: [],
      listitem: [
        "AJAX concrete equipment is built to meet the demands of modern infrastructure work, from housing projects to bridges, roads, and metro construction.",
        "With innovations like load-cell weighing, smart fleet monitoring, and IoT-enabled systems, AJAX delivers superior reliability and productivity.",
      ],
    },
    {
      title: "Driving Innovation Through Technology",
      content: [],
      listitem: [
        "AJAX leverages strong engineering expertise and advanced technology to deliver innovative concreting solutions.",
        "With a focus on customer value and effective relationship management, AJAX continues to lead through tech-driven product development.",
      ],
    },
    {
      title: "Your Journey, Our Priority",
      content: [],
      listitem: [
        "AJAX’s nationwide support network and skilled service engineers ensure quick, reliable maintenance whenever and wherever needed.",
        "With 24×7 customer care and multiple service options, AJAX guarantees maximum machine uptime and enhanced customer satisfaction.",
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
