import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactUsDetails = () => {
  return (
    <div className="my-[10rem] max-w-6xl mx-auto px-4">
      <div className="text-dark text-center pb-20">
        <h1 className="header-2">Help is here when you require it</h1>
        <p className="mt-3">
          Support is available seven days a week. Contact our team
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="text-white rounded-xl bg-dark px-10 text-center w-full">
          <h1 className=" text-2xl lg:text-[3rem] font-medium mt-10 ">
            Email Support
          </h1>
          <p className="pb-4 text-lg">Email support 7 days a week</p>
          <div className="mt-7 mb-20">
            <Link
              to={"mailto:info@qlsportsonline.com"}
              className="px-6 py-3 bg-primary"
            >
              Send email
            </Link>
          </div>
        </div>
        <div className="text-white rounded-xl bg-dark px-10 text-center w-full">
          <h1 className="text-2xl lg:text-[3rem] font-medium mt-10 ">
            Our Socials
          </h1>
          <p className="pb-4 text-lg">
            Ask for help, read discussions to learn more about us
          </p>
          <div className="mt-7 mb-14 flex items-center justify-center gap-4">
            <Link
              to={
                "https://www.instagram.com/ql_sportsonline?igsh=YmlrdHEybDIzNWk4&utm_source=qr"
              }
              className="hover:text-primary text-white ease-in-out duration-300 text-2xl lg:text-[2.5rem]"
            >
              <FaInstagram />
            </Link>
            <Link
              to={"http://www.tiktok.com/@quantumleapsports"}
              className="hover:text-primary text-white ease-in-out duration-300 text-2xl lg:text-[2.5rem]"
            >
              <FaTiktok />
            </Link>
            <Link
              to={""}
              className="hover:text-primary text-white ease-in-out duration-300 text-2xl lg:text-[2.5rem]"
            >
              <FaFacebook />
            </Link>

            <Link
              to={""}
              className="hover:text-primary text-white ease-in-out duration-300 text-2xl lg:text-[2.5rem]"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsDetails;
