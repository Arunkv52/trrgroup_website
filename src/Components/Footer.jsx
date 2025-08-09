import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white flex flex-wrap px-5 py-10 md:px-25 md:py-[30px]">
        <div className="w-full md:w-1/3 mb-6 md:mb-0 pb-7">
          <p className="text-[25px] pb-3 font-logo">TRR Group of Companies</p>
          <p>
            <strong>Regd. Office Address:</strong>
          </p>
          <ul className="text-[15px]">
            <li className="pb-10">
              New No.5, 1st Cross Street, Seethammal Extn, <br /> Teynampet,
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
              <a href="https://www.trrgroup.in/">Website : www.trrgroup.in</a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3 mb-6 md:mb-0 pb-7">
          <p className="text-[25px] pb-3"><strong>Our Divisions</strong></p>
          <ul className="text-[15px]">
            <li className="pb-1">
              <a href="#" className="hover:text-red-700">
                Tractors
              </a>
            </li>
            <li className="pb-1">
              <a href="#" className="hover:text-red-700">
                Automotive
              </a>
            </li>
            <li className="pb-1">
              <a href="#" className="hover:text-red-700">
                Trucks and Buses
              </a>
            </li>
            <li className="pb-1">
              <a href="#" className="hover:text-red-700">
                Infra
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0 pb-7">
          <p className="text-[25px] pb-3"><strong>Our Branches</strong></p>
          <ul className="text-[15px]">
            <li className="pb-1">
              <a href="#" className="hover:text-red-700">
                 Acharapakkam
              </a>
            </li>
            <li className="pb-1">
              <a href="#" className="hover:text-red-700">
                Virudhachalam
              </a>
            </li>
            <li className="pb-1">
              <a href="#" className="hover:text-red-700">
                Cuddalore
              </a>
            </li>
            <li className="pb-1">
              <a href="#" className="hover:text-red-700">
                Chidambaram
              </a>
            </li>
            <li className="pb-1">
              <a href="#" className="hover:text-red-700">
                Tirukalukundram
              </a>
            </li>
            <li className="pb-1">
              <a href="#" className="hover:text-red-700">
               Kanchipuram
              </a>
            </li>
            <li className="pb-1">
              <a href="#" className="hover:text-red-700">
                Uthiramerur
              </a>
            </li>
            <li className="pb-1">
              <a href="#" className="hover:text-red-700">
                Pavunjur
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
