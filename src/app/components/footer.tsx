import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-[#EEE7E6]">
      <footer className="body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

          {/* Section for desktop only (hidden on small screens) */}
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10 hidden sm:block">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <Image
                src={require("../../../public/images/Colorful_Flat_Illustrative_Photography_Service_Logo-removebg-preview-1-e1714148247171.webp")}
                alt="logo"
                width={700}
                height={500}
                className="w-[900] -mt-8 my-9"
              />
            </a>
          </div>

          {/* The flex-wrap content (only visible on desktop, hidden on small screens) */}
          <div className="flex-grow  flex-wrap md:pr-50 -mb-10 md:text-left text-center order-first hidden sm:flex">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-2xl">
              <h2 className="title-font font-bold text-[#4d0b18] tracking-widest text-sm mb-8 mx-9 ">
                CONTACT
              </h2>
              <nav className=" mb-10 mx-9 ">
                <div className="text-sm text-[#4d0b18] mb-7">
                  <p>Stay connected with us to discover</p>
                  <p>the latest trends and insights.</p>
                  <br />
                  <p>+212 6 38 28 31 33</p>
                  <br />
                  <p>info@anzarmedia.com</p>
                </div>
              </nav>
            </div>

            {/* OUR ADDRESS */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-9xl mx-9">
              <h2 className="title-font font-bold text-[#4d0b18] tracking-widest text-sm mb-8 mx-11">
                OUR ADDRESS
              </h2>
              <nav className=" mb-10 mx-11">
                <div className="text-sm text-[#4d0b18]">
                  <p>Casablanca</p>
                  <br />
                  <p>Casa Oulfa, 20200</p>
                  <br />
                  <p>Morocco</p>
                </div>
              </nav>
            </div>
          </div>

          {/* Section for small screens only */}
          <div className="block sm:hidden text-center">
            <Image
              src={require("../../../public/images/Colorful_Flat_Illustrative_Photography_Service_Logo-removebg-preview-1-e1714148247171.webp")}
              alt="logo"
              width={200} // Adjusted size for mobile
              height={150}
              className="mx-auto"
            />
            <p className="text-sm text-[#4d0b18] mt-4">
              Stay connected with us to discover the latest trends and insights.
            </p>
          </div>
        </div>

        {/* Footer Bottom Section (visible on all screens) */}
        <div className="bg-[#eee7e6]">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            {/* line */}
            <div className="h-1 w-full bg-[#4d0b18] rounded-none "></div>
            <p className="text-[#4d0b18] text-md text-center sm:text-center">
              © 2024 Anzar Media, LLC. All Rights Reserved. "Anzar Media" and other related marks are trademarks of Anzar Media, LLC. Use of this website is subject to our Terms of Use and Privacy Policy.
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="ml-3 text-gray-500"></a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
