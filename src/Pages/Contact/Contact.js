import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5kdksgk",
        "template_lcck8gp",
        form.current,
        "m_gLf0DDYlDIdrAM6"
      )
      .then(
        (result) => {
          alert("message sent successfully");
        },
        (error) => {
          alert(error.message);
        }
      );
    e.target.reset();
  };
  return (
    <div id="contact" className=" bg-gray-900 text-white pb-20">
      <h1 className=" pt-24 pb-5 text-4xl font-bold">Contact Me</h1>
      <hr className="py-1 bg-blue-600 w-32 border-none rounded mb-20 mx-auto" />
      <div className="bg-3 w-11/12 lg:w-1/2 mx-auto py-5 lg:py-10 rounded-box">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-11/12 lg:w-5/6 mx-auto"
          action=""
        >
          <input
            required
            className="rounded text-gray-900 px-5  py-4 my-4"
            type="text"
            name="user_name"
            id=""
            placeholder="Your Name"
          />
          <input
            required
            className=" rounded text-gray-900 px-5 py-4 my-4"
            type="email"
            name="user_email"
            id=""
            placeholder="Email"
          />
          <textarea
            required
            className=" text-gray-900 px-5 pt-5 rounded my-4"
            name="user_message"
            placeholder="Type your message"
            id=""
            cols="30"
            rows="5"
          ></textarea>
          <input
            className=" rounded text-gray-900 cursor-pointer bg-blue-600 my-4 px-20 py-4"
            type="submit"
            value="SEND"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
