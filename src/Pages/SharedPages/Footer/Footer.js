import React from "react";
import raian_logo from "../../../images/logo/logo.png";

const Footer = () => {
  return (
    <div className=" bg-gray-900 text-white pt-20 pb-10 mx-auto">
      <img className="mx-auto h-14 mb-3" src={raian_logo} alt="" />
      <div className="pt-7 pb-10">
        <a
          href="https://github.com/Aburaian"
          target="_blank"
          rel="noreferrer"
          className="px-4 transform transition duration-300 hover:scale-110 border-bottom border-b-2 border-blue-600 text-xl py-2 bg-gray-800 text-white rounded m-2"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/md-abu-raian-sakil-617749211/"
          target="_blank"
          rel="noreferrer"
          className="px-4 transform transition duration-300 hover:scale-110 border-bottom border-b-2 border-blue-600 text-xl py-2  bg-gray-800 text-white rounded m-2"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.facebook.com/raian.sakil/"
          target="_blank"
          rel="noreferrer"
          className="px-4 transform transition duration-300 hover:scale-110 border-bottom border-b-2 border-blue-600 text-xl py-2  bg-gray-800 text-white rounded m-2"
        >
          <i className="fab fa-facebook"></i>
        </a>
      </div>
      <p className="w-5/6 lg:w-full mx-auto text-sm text-gray-400">
        Ⓒ All Right Reserved by Md. Abu Raian Sakil || 2022
      </p>
    </div>
  );
};

export default Footer;
