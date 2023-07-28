"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* <div className="w-full h-[1px] bg-gray-600 mb-6 px-6 sm:px-10 lg:px-40"></div> */}
      <footer className="bg-dark text-black py-12 px-6 sm:px-10 lg:px-20 lg:h-[400px]">
        <div className="flex flex-col h-full justify-between gap-10">
          <div className="w-full h-[1px] bg-gray-600 mb-6 px-6 sm:px-10 lg:px-40"></div>
          <div className="flex flex-col gap-10">
            <div className="w-full flex justify-center">
              <p className="text-heading5 text-white uppercase">
                interested to host an event
              </p>
            </div>

            <div className="w-full flex justify-center">
              <button className="text-white border border-gray-600 py-4 px-8 rounded-full">
                CONTACT US
              </button>
            </div>
          </div>

          <div className="flex flex-col text-center gap-10 lg:text-justify lg:flex-row justify-between w-full">
            <p className="text-white text-heading5">LOFI ENTERTAINMENT</p>

            <p className="text-white text-heading5">@2023</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
