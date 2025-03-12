import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ----left side---- */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* ----center---- */}
        <div>
          <p className="font-medium mb-5 text-xl">COMPANY</p>
          <ul className="flex flex-col text-gray-600 gap-2">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* ----right side---- */}
        <div>
          <p className="font-medium mb-5 text-xl w-40">GET IN TOUCH</p>
          <ul className="flex flex-col text-gray-600 gap-2">
            <li>+91 9876545688</li>
            <li>sdfghgfd@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="text-gray-300 mb-2" />
        <p className="text-center  text-sm py-4">
          Copyright 2025 @ prescripto.dev - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
