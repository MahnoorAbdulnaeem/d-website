import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="Contact">
      <section className="body-font relative bg-[#45242a] min-h-screen flex justify-center items-center">
        <div className="container px-5 py-24 mx-auto flex flex-col items-center">
          {/* Heading and Paragraph */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#f5dddd] mb-4 font-bold text-center">
            Let's Connect
          </h1>
          <p className="text-white text-center max-w-lg mb-6">
            I'm currently looking for new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          {/* Form and Info Section */}
          <div className="flex flex-col lg:flex-row w-full justify-between lg:w-2/3 md:w-3/4">
            {/* Form Section */}
            <div className="w-full lg:w-2/3 bg-[#45242a] flex flex-col items-start pr-10">
              {/* Name Input */}
              <div className="relative mb-4 w-full">
                <label htmlFor="name" className="leading-7 text-[#f7f1f0] text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-transparent text-[#f7f1f0] border-b-2 border-[#f7f1f0] focus:border-[#9b5f6a] focus:outline-none text-base py-2 px-1 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Input */}
              <div className="relative mb-4 w-full">
                <label htmlFor="email" className="leading-7 text-[#f7f1f0] text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-transparent text-[#f7f1f0] border-b-2 border-[#f7f1f0] focus:border-[#9b5f6a] focus:outline-none text-base py-2 px-1 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Your Email"
                />
              </div>

              {/* Message Input */}
              <div className="relative mb-4 w-full">
                <label htmlFor="message" className="leading-7 text-[#f7f1f0] text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-transparent text-[#f7f1f0] border-b-2 border-[#f7f1f0] focus:border-[#9b5f6a] focus:outline-none h-32 text-base py-2 px-1 leading-6 resize-none transition-colors duration-200 ease-in-out"
                  placeholder="Let's talk about..."
                />
              </div>

              {/* Send Button */}
              <button className="bg-[#f7f1f0] border-0 py-2 px-6 focus:outline-none hover:bg-[#9b5f6a] rounded-lg text-lg">
                Send Message
              </button>
            </div>

            {/* Info Section on the Right */}
            <div className="w-full lg:w-1/3 flex flex-col items-start pl-0 lg:pl-10 text-white mt-10 lg:mt-0 gap-6">
              <h2 className="text-2xl font-bold">We're Here to Help!</h2>
              <p className="text-sm leading-6">
                Thank you for your interest in Anzar Media Production. We're here to answer any questions you may have about our services, packages, or anything else related to our offerings. Please don't hesitate to reach out using the contact information provided below or by filling out the form on this page. We'll get back to you as soon as possible.
              </p>
              <div className="mt-4">
                <FaMapMarkerAlt className="text-2xl mr-2" />
                <span className="text-lg">Columbia, SC</span>
              </div>
              <div className="mt-4">
                <FaPhoneAlt className="text-2xl mr-2" />
                <span className="text-lg">(803) 500-1475</span>
              </div>
              <div className="mt-4">
                <FaEnvelope className="text-2xl mr-2" />
                <span className="text-lg">info@anzarmedia.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
