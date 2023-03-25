import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="font-bold text-[30px] text-center">Contact us</h1>
      <form className="flex flex-col mx-auto shadow-md my-4 max-w-[400px] ">
        <input
          type="email"
          placeholder="Enter your Email"
          className="p-4 shadow-sm m-2 outline-none border"
        />
        <input
          type="text"
          placeholder="Enter your number"
          className="p-4 shadow-sm m-2 outline-none border"
        />
        <textarea
          name="message"
          id="message"
          placeholder="Enter your message"
          cols="30"
          rows="10"
          className="p-4 shadow-sm m-2 outline-none border"
        ></textarea>
        <button className="px-4 py-2 my-4 bg-orange-500 w-max mx-auto">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
