import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q5ijf1i",
        "template_qh7rt32",
        form.current,
        "6cbSMIurPsuuTUomn"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("success");
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };
  return (
    <div id="contact" className="w-full h-[55vh] mt-5 sm:mt-0 sm:h-[30vh] bg-[#004f1e] flex flex-col sm:flex-row items-center justify-start sm:justify-between pt-[5%] sm:pt-0 box-border">
      <div className="w-[90%] sm:w-[30%] h-[10%] sm:h-full flex flex-col sm:flex-row items-center justify-center sm:justify-end pr-0 sm:pr-[8%] box-border ">
        <p className="text-[5vw] sm:text-[1.75rem] text-white font-light max-w-[50%] sm:max-w-[30%] -mt-3">
          CONTACT FORM
        </p>
      </div>
      <form
        className="w-[90%] sm:w-[70%] h-full flex flex-col items-center sm:items-start justify-center "
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="h-[60%] sm:h-full w-[90%] flex flex-col sm:flex-row items-center justify-start ">
          <div className="flex flex-col items-center sm:items-start justify-start sm:justify-center min-h-[100px] h-[40%] sm:h-[50%] w-[100%] sm:w-[50%] pl-0 sm:pl-4  ">
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              className="w-[95%] min-h-[35px] rounded-lg bg-white mb-2 pl-4 box-border text-[0.8rem] placeholder:text-[0.8rem] focus:outline-none"
            />
            <input
              type="email"
              placeholder="email"
              inputMode="email"
              name="user_email"
              className="w-[95%] min-h-[35px] rounded-lg bg-white mt-2 px-4 box-border text-[0.8rem] placeholder:text-[0.8rem] focus:outline-none"
            />
          </div>
          <textarea
            style={{ resize: "none" }}
            placeholder="message"
            rows={5}
            name="message"
            className="w-[95%] sm:w-[50%] h-[90px] rounded-xl bg-white text-[0.8rem] scrollbar-hide placeholder:text-[0.8rem] p-3 focus:outline-none"
          ></textarea>
        </div>
        <div className="w-[90%] h-[20%] sm:h-[40%] flex flex-col sm:flex-row items-center justify-start sm:justify-between -mt-0 sm:-mt-8 pl-0 sm:pl-4 box-border ">
          <div className="w-[90%] sm:w-[60%] h-[2px] bg-white my-2 sm:my-0" />
          <button
            type="submit"
            onClick={sendEmail}
            className="bg-black px-8 sm:px-9 py-3 sm:py-2 text-[0.8rem] rounded-xl text-white"
          >
            Send a message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
