import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Projects.css";
import { NavLink } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  if (projects.length === 0) {
    return (
      <div className="bg-2 text-white py-5">
        <h1 className=" py-24 text-4xl font-bold">My Projects</h1>
        <h2 className="text-xl my-7">Loading Projects..</h2>
        <div className="flex justify-center items-center">
          <div
            className="
            loader
            ease-linear
            rounded-full
            border-8 border-t-8 border-gray-200
            h-32
            w-32"
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div id="projects" className=" bg-2 text-white pb-20 pt-10">
      <div className="container mx-auto">
        <h1 className=" pt-24 pb-5 text-4xl font-bold ">My Projects</h1>
        <hr className="py-1 bg-blue-600 w-32 border-none rounded mb-20 mx-auto" />
        <Tabs>
          <TabList className="w-11/12 lg:w-full mx-auto">
            <Tab>html</Tab>
            <Tab>Javascript</Tab>
            <Tab>React</Tab>
            <Tab>Fullstack</Tab>
            <Tab>All Projects</Tab>
          </TabList>

          <TabPanel id="html">
            <h2 className="mt-10 mb-10 text-blue-600 text-2xl font-semibold">
              Projects using html, css only
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {projects
                .filter(
                  (htmlProjects) => htmlProjects.projectCategory === "html"
                )
                .map((myHtmlProjects) => (
                  <div
                    key={myHtmlProjects.projectId}
                    className="animate-bounceIn animate-animated grid grid-cols-1 lg:grid-cols-2 bg-3 w-11/12 lg:w-full mx-auto rounded-box pt-5 pb-10 lg:py-10 lg:pl-10"
                  >
                    <div>
                      <img
                        className=" transform transition duration-300 hover:scale-125 mx-auto w-11/12 lg:w-full rounded-lg border-8 mb-5 lg:mb-0 border-gray-400 h-96"
                        src={myHtmlProjects.projectIMG}
                        alt=""
                      />
                    </div>
                    <div>
                      <h2 className=" text-xl mb-2 font-semibold">
                        Project:{" "}
                        <span className="text-blue-600">
                          {" "}
                          {myHtmlProjects.projectName}{" "}
                        </span>
                      </h2>
                      <p className="text-sm mb-4 text-blue-600 font-light">
                        {myHtmlProjects.projectType}
                      </p>
                      <h2>Technology Used:</h2>
                      <div className="mt-5">
                        <button className=" transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-gray-700 text-blue-600 rounded-full m-1">
                          html
                        </button>
                        <button className="transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-gray-700 text-blue-600 rounded-full m-1">
                          css
                        </button>
                      </div>
                      <h3 className="text-gray-300 w-5/6 mx-auto mt-10">
                        {myHtmlProjects.projectDescription}
                      </h3>
                      <div className=" mt-16">
                        <NavLink
                          to={`/projects/${myHtmlProjects.projectId}`}
                          className="px-5 mx-2 text-gray-900 py-2 rounded bg-blue-600 hover:bg-gray-700 hover:text-white transition duration-300 animate-infinite "
                        >
                          View Details
                        </NavLink>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabPanel>

          <TabPanel id="Javascript">
            <h2 className="mt-10 mb-10 text-blue-600 text-2xl font-semibold w-11/12 mx-auto">
              Projects using html, css, Javascript
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {projects
                .filter(
                  (javascriptProjects) =>
                    javascriptProjects.projectCategory === "Javascript"
                )
                .map((myJavascriptProjects) => (
                  <div
                    key={myJavascriptProjects.projectId}
                    className=" animate-bounceIn animate-animated grid grid-cols-1 lg:grid-cols-2 bg-3 w-11/12 lg:w-full mx-auto rounded-box pt-5 pb-10 lg:py-10 lg:pl-10"
                  >
                    <div>
                      <img
                        className="transform transition duration-300 hover:scale-125 mx-auto w-11/12 lg:w-full rounded-lg border-8 mb-5 lg:mb-0 border-gray-400 h-96"
                        src={myJavascriptProjects.projectIMG}
                        alt=""
                      />
                    </div>
                    <div>
                      <h2 className=" text-xl mb-2 font-semibold">
                        Project:{" "}
                        <span className="text-blue-600">
                          {" "}
                          {myJavascriptProjects.projectName}{" "}
                        </span>
                      </h2>
                      <p className="text-sm mb-4 text-blue-600 font-light">
                        {myJavascriptProjects.projectType}
                      </p>
                      <h2>Technology Used:</h2>
                      <div className="mt-5">
                        <button className=" transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-gray-700 text-blue-600 rounded-full m-1">
                          html
                        </button>
                        <button className=" transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-gray-700 text-blue-600 rounded-full m-1">
                          css
                        </button>
                        <button className=" transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-gray-700 text-blue-600 rounded-full m-1">
                          Javascript
                        </button>
                      </div>
                      <h3 className="text-gray-300 w-5/6 mx-auto mt-10">
                        {myJavascriptProjects.projectDescription}
                      </h3>
                      <div className=" mt-16">
                        <NavLink
                          to={`/projects/${myJavascriptProjects.projectId}`}
                          className="px-5 mx-2 text-gray-900 py-2 rounded bg-blue-600 hover:bg-gray-700 hover:text-white transition duration-300"
                        >
                          View Details
                        </NavLink>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabPanel>

          <TabPanel id="React">
            <h2 className="mt-10 mb-10 text-blue-600 text-2xl font-semibold">
              Projects using React
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {projects
                .filter(
                  (reactProjects) =>
                    reactProjects.projectCategory === "React" ||
                    reactProjects.projectCategory === "Fullstack"
                )
                .map((myReactProjects) => (
                  <div
                    key={myReactProjects.projectId}
                    className=" animate-bounceIn animate-animated grid grid-cols-1 lg:grid-cols-2 bg-3 w-11/12 lg:w-full mx-auto rounded-box pt-5 pb-10 lg:py-10 lg:pl-10"
                  >
                    <div>
                      <img
                        className="transform transition duration-300 hover:scale-125 mx-auto w-11/12 lg:w-full rounded-lg border-8 mb-5 lg:mb-0 border-gray-400 h-96"
                        src={myReactProjects.projectIMG}
                        alt=""
                      />
                    </div>
                    <div>
                      <h2 className=" text-xl mb-2 font-semibold">
                        Project:{" "}
                        <span className="text-blue-600">
                          {" "}
                          {myReactProjects.projectName}{" "}
                        </span>
                      </h2>
                      <p className="text-sm mb-4 text-blue-600 font-light">
                        {myReactProjects.projectType}
                      </p>
                      <h2>Technology Used:</h2>
                      <div className="mt-5">
                        <button className=" transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-gray-700 text-blue-600 rounded-full m-1">
                          JSX
                        </button>
                        <button className=" transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-gray-700 text-blue-600 rounded-full m-1">
                          Javascript
                        </button>
                        <button className=" transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-gray-700 text-blue-600 rounded-full m-1">
                          React
                        </button>
                      </div>
                      <h3 className="text-gray-300 w-5/6 mx-auto mt-10">
                        {myReactProjects.projectDescription}
                      </h3>
                      <div className=" mt-16">
                        <NavLink
                          to={`/projects/${myReactProjects.projectId}`}
                          className="px-5 mx-2 text-gray-900 py-2 rounded bg-blue-600 hover:bg-gray-700 hover:text-white transition duration-300"
                        >
                          View Details
                        </NavLink>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabPanel>

          <TabPanel id="Fullstack">
            <h2 className="mt-10 mb-10 text-blue-600 text-2xl font-semibold w-5/6 mx-auto">
              Fullstack Projects using MERN stack
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {projects
                .filter(
                  (fullstackProjects) =>
                    fullstackProjects.projectCategory === "Fullstack"
                )
                .map((myFullstackProjects) => (
                  <div
                    key={myFullstackProjects.projectId}
                    className=" animate-bounceIn animate-animated grid grid-cols-1 lg:grid-cols-2 bg-3 w-11/12 lg:w-full mx-auto rounded-box pt-5 pb-10 lg:py-10 lg:pl-10"
                  >
                    <div>
                      <img
                        className="transform transition duration-300 hover:scale-125 mx-auto w-11/12 lg:w-full rounded-lg border-8 mb-5 lg:mb-0 border-gray-400 h-96"
                        src={myFullstackProjects.projectIMG}
                        alt=""
                      />
                    </div>
                    <div>
                      <h2 className="text-xl mb-2 font-semibold">
                        Project:{" "}
                        <span className="text-blue-600">
                          {" "}
                          {myFullstackProjects.projectName}{" "}
                        </span>
                      </h2>
                      <p className="text-sm mb-4 text-blue-600 font-light">
                        {myFullstackProjects.projectType}
                      </p>
                      <h2>Technology Used:</h2>
                      <div className="mt-5">
                        <button className=" transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-gray-700 text-blue-600 rounded-full m-1">
                          React
                        </button>
                        <button className=" transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-gray-700 text-blue-600 rounded-full m-1">
                          Node.js
                        </button>
                        <button className=" transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-gray-700 text-blue-600 rounded-full m-1">
                          Express
                        </button>
                        <button className=" transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-gray-700 text-blue-600 rounded-full m-1">
                          Mongodb
                        </button>
                      </div>
                      <h3 className="text-gray-300 w-5/6 mx-auto mt-10">
                        {myFullstackProjects.projectDescription}
                      </h3>
                      <div className=" mt-16">
                        <NavLink
                          to={`/projects/${myFullstackProjects.projectId}`}
                          className="px-5 mx-2 text-gray-900 py-2 rounded bg-blue-600 hover:bg-gray-700 hover:text-white transition duration-300"
                        >
                          View Details
                        </NavLink>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabPanel>

          <TabPanel id="All Projects">
            <h2 className="mt-10 mb-10 text-blue-400 text-2xl font-semibold">
              All projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {projects.map((myAllProjects) => (
                <div
                  key={myAllProjects.projectId}
                  className=" animate-bounceIn animate-animated grid grid-cols-1 lg:grid-cols-2 bg-3 w-11/12 lg:w-full mx-auto rounded-box pt-5 pb-10 lg:py-10 lg:pl-10"
                >
                  <div>
                    <img
                      className="transform transition duration-300 hover:scale-125 mx-auto w-11/12 lg:w-full rounded-lg border-8 mb-5 lg:mb-0 border-gray-400 h-96"
                      src={myAllProjects.projectIMG}
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="text-xl mb-2 font-semibold">
                      Project:{" "}
                      <span className="text-blue-600">
                        {" "}
                        {myAllProjects.projectName}{" "}
                      </span>
                    </h2>
                    <p className="text-sm mb-4 text-blue-600 font-light">
                      {myAllProjects.projectType}
                    </p>
                    <h2>Technology Used:</h2>
                    <div className="mt-5">
                      <button className="transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-gray-700 text-blue-600 rounded-full m-1">
                        html
                      </button>
                      <button className="transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-gray-700 text-blue-600 rounded-full m-1">
                        css
                      </button>
                      <button className="transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-gray-700 text-blue-600 rounded-full m-1">
                        Javascript
                      </button>
                      <button className="transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-gray-700 text-blue-600 rounded-full m-1">
                        React
                      </button>
                      <button className="transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-gray-700 text-blue-600 rounded-full m-1">
                        Node.js
                      </button>
                      <button className="transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-gray-700 text-blue-600 rounded-full m-1">
                        Express
                      </button>
                      <button className="transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-gray-700 text-blue-600 rounded-full m-1">
                        Mongodb
                      </button>
                    </div>
                    <h3 className="text-gray-300 w-5/6 mx-auto mt-10">
                      {myAllProjects.projectDescription}
                    </h3>
                    <div className=" mt-16">
                      <NavLink
                        to={`/projects/${myAllProjects.projectId}`}
                        className="px-5 mx-2 text-gray-900 py-2 rounded bg-blue-600 hover:bg-gray-700 hover:text-white transition duration-300"
                      >
                        View Details
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Projects;
