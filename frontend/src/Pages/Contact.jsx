import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold"> US</span>
        </p>
      </div>
      <div className="flex flex-col justify-center md:flex-row gap-10 mt-13 mb-28 text-sm ">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-gray-600 text-lg">OUR OFFICE</p>
          <p className="text-gray-500">
            #21 Spring feild <br />
            Vijaynagar, Banglore
          </p>
          <p className="text-gray-500">
            Tel:9876545675 <br />
            Email:sdhgfds@gamil.com
          </p>
          <p className="font-semibold text-gray-600 text-lg">
            CAREERS AT PRESCRIPTO
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border px-8 py-5 cursor-pointer hover:bg-black hover:text-white">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
