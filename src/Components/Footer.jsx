import React from "react";
import "./Footer.css";

const Footer = () => {
  const Tooltip = ({ text, children }) => {
    return (
      <div className="relative group">
        {children}
        <span className="absolute left-1/2 -translate-x-1/3 -top-8 w-max bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {text}
        </span>
      </div>
    );
  };

  return (
    <>
      <footer className="bg-black text-white flex justify-between flex-wrap px-5 py-10 md:px-25 md:py-[30px]">
        <div className="w-full md:w-[75%] mb-6 md:mb-0 pb-7">
          <p className="text-[25px] pb-3 font-bold">TRR Group of Companies</p>
          <p className="py-1">
            <strong>Corporate Office :</strong>
          </p>
          <ul className="text-[15px]">
            <li className="pb-10">
              New No.5, 1st Cross Street, Seethammal Extn, Teynampet, <br />
              Chennai -600 018
            </li>
            <li className="hover:text-red-600">
              <a href="tel:044-24343828">Phone : 044-24343828</a>
            </li>
            <li className="hover:text-red-600">
              <a href="tel:+919176917345">Mobile : +91 91769 17345</a>
            </li>
            <li className="hover:text-red-600">
              <a href="mailto:info@trrgroup.in">Email : info@trrgroup.in</a>
            </li>
            <li className="hover:text-red-600">
              <a href="https://www.trrgroup.in/">Group of companies : www.trrgroup.in</a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-[25%] mb-6 md:mb-0 pb-7">
          <p className="text-[25px] pb-3">
            <strong>Our Divisions</strong>
          </p>
          <ul className="text-[15px]">
            <li className="pb-1">
              <a href="https://trrtractors.com/" className="hover:text-red-700">
                TRR Tractors
              </a>
            </li>
            <li className="pb-1">
              <a href="https://trrautomotive.com/" className="hover:text-red-700">
                TRR Automotive
              </a>
            </li>
            <li className="pb-1">
              <a href="https://trrtrucksandbuses.com/" className="hover:text-red-700">
                TRR Trucks and Buses Pvt Ltd
              </a>
            </li>
            <li className="pb-1">
              <a href="https://trrinfra.com/" className="hover:text-red-700">
                TRR Infra
              </a>
            </li>
          </ul>
        </div>
        

        <div className="w-full md:w-full flex flex-col items-end pt-0 md:pt-10">
          <p className="text-[13px] text-gray-700">
            Copyright TRR | Developed by{" "}
            <a href="www.prismadverto.com" className="hover:bg-red-600">
              Prism Adverto Pvt Ltd
            </a>
          </p>
          <div className="footer-privacy">
            <ul className="flex gap-2 pt-2">
              <li className="text-[14px] hover:text-red-500">
                <a href="#">Privacy</a>
              </li>
              <li className="text-[14px] hover:text-red-500">
                <a href="#">Cookies</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
