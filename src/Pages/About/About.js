import React from "react";
import "./About.css";
import sakil_photo from "../../images/sakil.png";

const About = () => {
  return (
    <div id="about" className=" pb-36 bg-1 text-white ">
      <h1 className=" pt-24 pb-5 text-4xl font-bold ">About Me</h1>
      <hr className="py-1 bg-blue-600 w-32 border-none rounded mb-20 mx-auto" />
      <div className=" flex items-center flex-col lg:flex-row w-11/12 mx-auto bg-2 py-10 px-3 lg:p-16 rounded-box lg:border-l-8 border-blue-600">
        <div className="lg:w-1/3">
          <img
            className="transform transition duration-300 hover:scale-110 h-60 mb-10 mx-auto lg:h-80"
            src={sakil_photo}
            alt=""
          />
          <a
            href="https://github.com/Aburaian"
            target="_blank"
            rel="noreferrer"
            className="px-4 transform transition duration-300 hover:scale-110 border-bottom border-b-2 border-blue-600 text-3xl py-2 bg-gray-800 text-white rounded m-2"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/md-abu-raian-sakil-617749211/"
            target="_blank"
            rel="noreferrer"
            className="px-4 transform transition duration-300 hover:scale-110 border-bottom border-b-2 border-blue-600 text-3xl py-2  bg-gray-800 text-white rounded m-2"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="lg:w-2/3 text-center lg:text-left lg:pl-10">
          <h1 className=" text-2xl lg:text-4xl  text-blue-600 pt-10 lg:pt-0">
            Md. Abu Raian Sakil
          </h1>
          <p className=" italic font-extralight lg:text-xl text-gray-400 pt-2">
            A hard-working Frontend developer
          </p>
          <br />
          <p className="text-gray-400 lg:w-full ">
            Building state-of-the-art, easy-to-use, user-friendly websites and
            applications is truly a passion of mine and I am confident I would
            be an excellent addition to any organization. In addition to my
            knowledge base, I actively seek out new technologies and stay
            up-to-date on industry trends and advancements. This has allowed me
            to stay ahead of the curve and deliver exceptional work to all of my
            employers.
          </p>
        </div>
      </div>
      <h1 className=" pt-24 pb-5 text-4xl font-bold ">My Skills</h1>
      <hr className="py-1 bg-blue-600 w-32 border-none rounded mb-20 mx-auto" />
      <div className="flex items-center flex-col lg:flex-row w-11/12 mx-auto bg-2 lg:p-4">
        {" "}
        <p className="me-4">HTML </p>{" "}
        <progress
          className="progress progress-success w-50"
          value="90"
          max="100"
        ></progress>{" "}
        <p className="ms-4">90% </p>
      </div>
      <div className="flex items-center flex-col lg:flex-row w-11/12 mx-auto bg-2 lg:p-4">
        {" "}
        <p className="me-4">HTML5 </p>{" "}
        <progress
          className="progress progress-success w-50"
          value="95"
          max="100"
        ></progress>{" "}
        <p className="ms-4">95% </p>
      </div>
      <div className="flex items-center flex-col lg:flex-row w-11/12 mx-auto bg-2 lg:p-4">
        {" "}
        <p className="me-4">CSS </p>{" "}
        <progress
          className="progress progress-success w-50"
          value="95"
          max="100"
        ></progress>{" "}
        <p className="ms-4">95% </p>
      </div>
      <div className="flex items-center flex-col lg:flex-row w-11/12 mx-auto bg-2 lg:p-4">
        {" "}
        <p className="me-4">Bootstrap </p>{" "}
        <progress
          className="progress progress-success w-50"
          value="98"
          max="100"
        ></progress>{" "}
        <p className="ms-4">98% </p>
      </div>
      <div className="flex items-center flex-col lg:flex-row w-11/12 mx-auto bg-2 lg:p-4">
        {" "}
        <p className="me-4">Tailwind </p>{" "}
        <progress
          className="progress progress-success w-50"
          value="98"
          max="100"
        ></progress>{" "}
        <p className="ms-4">98% </p>
      </div>
      <div className="flex items-center flex-col lg:flex-row w-11/12 mx-auto bg-2 lg:p-4">
        {" "}
        <p className="me-4">Java Script </p>{" "}
        <progress
          className="progress progress-success w-50"
          value="90"
          max="100"
        ></progress>{" "}
        <p className="ms-4">90% </p>
      </div>
      <div className="flex items-center flex-col lg:flex-row w-11/12 mx-auto bg-2 lg:p-4">
        {" "}
        <p className="me-4">React </p>{" "}
        <progress
          className="progress progress-success w-50"
          value="95"
          max="100"
        ></progress>{" "}
        <p className="ms-4">95% </p>
      </div>
      <div className="flex items-center flex-col lg:flex-row w-11/12 mx-auto bg-2 lg:p-4">
        {" "}
        <p className="me-4">React All Library </p>{" "}
        <progress
          className="progress progress-success w-50"
          value="95"
          max="100"
        ></progress>{" "}
        <p className="ms-4">95% </p>
      </div>
      <div className="flex items-center flex-col lg:flex-row w-11/12 mx-auto bg-2 lg:p-4">
        {" "}
        <p className="me-4">react router </p>{" "}
        <progress
          className="progress progress-success w-50"
          value="95"
          max="100"
        ></progress>{" "}
        <p className="ms-4">95% </p>
      </div>
      <div className="flex items-center flex-col lg:flex-row w-11/12 mx-auto bg-2 lg:p-4">
        {" "}
        <p className="me-4">Firebase </p>{" "}
        <progress
          className="progress progress-success w-50"
          value="90"
          max="100"
        ></progress>{" "}
        <p className="ms-4">90% </p>
      </div>
      <div className="flex items-center flex-col lg:flex-row w-11/12 mx-auto bg-2 lg:p-4">
        {" "}
        <p className="me-4">Node js </p>{" "}
        <progress
          className="progress progress-success w-50"
          value="80"
          max="100"
        ></progress>{" "}
        <p className="ms-4">80% </p>
      </div>
      <div className=" flex items-center flex-col lg:flex-row w-11/12 mx-auto bg-2 lg:p-4">
        {" "}
        <p className="me-4">Mongo DB </p>{" "}
        <progress
          className="progress progress-success w-50"
          value="80"
          max="100"
        ></progress>{" "}
        <p className="ms-4">80% </p>
      </div>
    </div>
  );
};

export default About;
