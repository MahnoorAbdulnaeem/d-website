import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
  return (
    <div id="Contact">
      <section className="text-gray-600 body-font relative bg-[#45242a]">
        <div className="container px-5 py-24 mx-auto flex flex-col items-center">
          {/* Updated Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#f5dddd] mb-4 font-bold text-center">
            Let's Connect
          </h1>
          <p className="text-white text-center max-w-lg mb-6">
            I'm currently looking for new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          {/* Social Icons */}
          <div className="flex mt-4 mb-4 justify-center">
            <Link href={"https://github.com/DUANOOR77"} target="_blank" className="mr-4">
              <Image src={require("../../../public/images/9919.png")} alt="GitHub" className="w-8 h-8 sm:w-10 sm:h-10" />
            </Link>
            <Link href={"https://www.linkedin.com/in/dua-noor-8a45302b4/"} target="_blank" className="mr-4">
              <Image
                src={require("../../../public/images/png-clipart-linkedin-linkedin-thumbnail (1).png")}
                alt="LinkedIn"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </Link>
          </div>

          <div className="lg:w-1/3 md:w-1/2 w-full bg-[#2d2d2d] flex flex-col items-center md:py-8 mt-8 md:mt-0 rounded-lg p-6">
            {/* Updated Form Fields */}
            <div className="relative mb-4 w-full">
              <label htmlFor="email" className="leading-7 text-sm text-gray-300">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-[#3e3e3e] text-gray-100 rounded-lg border border-[#555555] focus:border-[#9b5f6a] focus:ring-2 focus:ring-[#9b5f6a] text-base outline-none py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="123@gmail.com"
              />
            </div>

            <div className="relative mb-4 w-full">
              <label htmlFor="subject" className="leading-7 text-sm text-gray-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full bg-[#3e3e3e] text-gray-100 rounded-lg border border-[#555555] focus:border-[#9b5f6a] focus:ring-2 focus:ring-[#9b5f6a] text-base outline-none py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Just saying hi!"
              />
            </div>

            <div className="relative mb-4 w-full">
              <label htmlFor="message" className="leading-7 text-sm text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-[#3e3e3e] text-gray-100 rounded-lg border border-[#555555] focus:border-[#9b5f6a] focus:ring-2 focus:ring-[#9b5f6a] h-32 text-base outline-none py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                placeholder="Let's talk about..."
              />
            </div>

            {/* Updated Button */}
            <button className="text-white bg-[#9b5f6a] border-0 py-2 px-6 focus:outline-none hover:bg-[#c97b86] rounded-lg text-lg">
              Send Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
