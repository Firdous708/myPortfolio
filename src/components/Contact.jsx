import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

//initialize emailjs
emailjs.init("md5puw_TZLp-_soOB");
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const success = () => toast("Message Sent Successfully");
  const [isSent, setIsSent] = React.useState(false);
  const handleHello = () => {
    //showing the form after clicking
    const contactForm = document.querySelector(".contact-form");
    contactForm.classList.toggle("hidden");
    //hiding the button after clicking
    const helloBtn = document.querySelector(".contact-form-container button");
    helloBtn.classList.toggle("hidden");
  };
  //handling the form submission
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_KEY,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          setIsSent(true);
          console.log(result.text);
          success();
        },
        (error) => {
          alert("Message not sent");
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div
      id="contact"
      className="contact-section  mb-12 px-8 md:px-[100px] mt-32 "
    >
      <div className="projects-section-top mb-12 flex flex-row items-center gap-4">
        <p className="text-sm font-semibold text-newgreen"> 04. </p>
        <h1 className="text-2xl text-newwhite ">Contact </h1>
        <hr className="border-1 border-newgreen w-[100px]" />
      </div>
      <div className="contact-form-container flex flex-col items-center gap-8">
        <h1 className="text-lightestSlate text-3xl font-bold">Get in Touch</h1>
        <p className="text-lightSlate">
          If you've any suggestions or feedback or want to collaborate on a
          project please feel free to contact me. I'll be happy to respond.
        </p>
        <button
          onClick={handleHello}
          className="border border-newgreen text-newgreen px-[50px] sm:px-[100px] py-[15px] rounded-lg hover:bg-greenTint 
        transition ease-in"
        >
          Say Hello!
        </button>
        {isSent ? (
          // using the toast here
          <>
            <ToastContainer
              position="top-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <div className="text-lightSlate shadow-2xl border-2 p-6 rounded-lg bg-greenTint font-bold border-newgreen">
              <p>Thank you for your message.</p>
              <p>I will get back to you soon.</p>
            </div>
          </>
        ) : (
          <div className="contact-form hidden">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group flex flex-col gap-4">
                <div className="form-group flex flex-col gap-2">
                  <label htmlFor="name" className="text-lightSlate">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-lightestNavy border border-lightSlate text-lightSlate px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-newgreen"
                  />
                  <label htmlFor="email" className="text-lightSlate">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    id="email"
                    className="bg-lightestNavy border border-lightSlate text-lightSlate px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-newgreen"
                  />

                  <label htmlFor="message" className="text-lightSlate">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    cols="30"
                    rows="10"
                    className="bg-lightestNavy border border-lightSlate text-lightSlate px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-newgreen"
                  ></textarea>
                  <input
                    type="submit"
                    className="mt-6  border cursor-pointer border-newgreen text-newgreen px-[50px] sm:px-[100px] py-[15px] rounded-lg hover:bg-greenTint
      transition ease-in"
                    value="Send Message"
                  />
                </div>
              </div>
            </form>
          </div>
        )}
        ;
        {/* <div className="contact-form hidden">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group flex flex-col gap-4">
              <div className="form-group flex flex-col gap-2">
                <label htmlFor="name" className="text-lightSlate">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-lightestNavy border border-lightSlate text-lightSlate px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-newgreen"
                />
                <label htmlFor="email" className="text-lightSlate">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  id="email"
                  className="bg-lightestNavy border border-lightSlate text-lightSlate px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-newgreen"
                />

                <label htmlFor="message" className="text-lightSlate">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  cols="30"
                  rows="10"
                  className="bg-lightestNavy border border-lightSlate text-lightSlate px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-newgreen"
                ></textarea>
                <input
                  type="submit"
                  className="border cursor-pointer border-newgreen text-newgreen px-[50px] sm:px-[100px] py-[15px] rounded-sm hover:bg-greenTint
        transition ease-in"
                  value="Send Message"
                />
              </div>
            </div>
          </form>
        </div> */}
      </div>
    </div>
  );
}
