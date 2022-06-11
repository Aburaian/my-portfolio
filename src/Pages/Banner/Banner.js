import React from "react";
import bgBanner from "../../images/portfolio-bgImage1.png";
import Typical from "react-typical";

const Banner = () => {
  return (
    <div
      id="home"
      style={{ backgroundImage: `url(${bgBanner})`, backgroundSize: "cover" }}
      className="h-screen bg-blue-500 text-white text-center lg:text-left "
    >
      <div className=" pt-64 lg:pt-80 lg:w-2/3 mx-auto">
        <h1 className="text-xl lg:text-3xl pb-5 font-thin">HELLO, </h1>
        <h1 className="text-2xl lg:text-6xl font-bold">
          I'm <span className="text-blue-600">Md. Abu Raian Sakil</span>{" "}
        </h1>
        <h2 className="text-2xl  lg:text-5xl font-bold pt-5 mb-16">
          <span>
            <Typical
              steps={[
                "Programer",
                1000,
                "React developer",
                500,
                "Frontend developer",
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </span>
        </h2>
        <a
          href="https://drive.google.com/file/d/1kH2Re6-tYnt-FVbky52MzFNLRURsTm04/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="hover:bg-gray-800 transition duration-500 mx-auto px-10 py-4  lg:px-12 lg:py-4  bg-blue-600 rounded-full text-gray-900 hover:text-white"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Banner;
