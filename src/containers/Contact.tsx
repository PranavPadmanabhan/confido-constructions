import React from "react";

function Contact() {
  return (
    <div className="w-full h-[30vh] bg-[#004f1e] flex items-center justify-between">
      <div className="w-[30%] h-full flex items-center justify-end pr-[8%] box-border">
        <p className="text-[1.75rem] text-white font-light max-w-[30%] -mt-3">
          CONTACT FORM
        </p>
      </div>
      <div className="w-[70%] h-full flex flex-col items-start justify-center">
        <div className="h-full w-[80%] flex  items-center justify-start">
          <div className="flex flex-col items-start justify-center h-[50%] w-[50%] pl-4">
            <input
              type="text"
              placeholder="Name"
              className="w-[95%] min-h-[35px] rounded-lg bg-white mb-2 pl-4 box-border text-[0.8rem] placeholder:text-[0.8rem] focus:outline-none"
            />
            <input
              type="text"
              placeholder="email"
              multiple
              className="w-[95%] min-h-[35px] rounded-lg bg-white mt-2 px-4 box-border text-[0.8rem] placeholder:text-[0.8rem] focus:outline-none"
            />
          </div>
          <textarea
            style={{ resize: "none" }}
            placeholder="message"
            rows={5}
            className="w-[50%] h-[90px] rounded-xl bg-white text-[0.8rem] scrollbar-hide placeholder:text-[0.8rem] p-3 focus:outline-none"
          ></textarea>
        </div>
        <div className="w-[80%] h-[40%] flex items-center justify-between -mt-8 pl-4 box-border ">
          <div className="w-[60%] h-[2px] bg-white" />
          <button className="bg-black px-9 py-2 text-[0.8rem] rounded-xl text-white">
            Send a message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
