import React from "react";
import Image from "next/image";
const Offer = () => {
    return (
      <div id="Offer" className="bg-[#f3eced]">
        <section className="text-[#45242a] body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <div className="flex flex-wrap sm:flex-row flex-col py-8 mb-11 items-center justify-center">
                <h1 className="sm:w-2/5 text-[#45242a] font-bold title-font text-4xl sm:text-5xl mb-4 sm:mb-0">
                  Offer
                </h1>
                <p className="sm:w-2/4 leading-relaxed text-[#45242a] text-2xl sm:text-3xl text-center font-bold">
                  Exceptional Video Content,<br /> Social Media Strategies, &<br /> Advertising Solutions in Morocco
                </p>
              </div>
            </div>
  
            {/* Flex Container for Offer Items */}
            <div className="flex flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4">
              {/* First Offer Item */}
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col items-center text-center">
                <div className="rounded-lg h-40 w-40 overflow-hidden items-center">
                  <Image
                    src={require("../../../public/images/media2-home-icon1.webp")}
                    alt="logo"
                    className="object-cover object-center w-full h-full"
                    width={160}
                    height={160}
                  />
                </div>
                <h2 className="text-xl font-semibold title-font text-[#510b17] mt-4">
                  Advertising
                </h2>
                <p className="leading-relaxed mt-3 text-sm text-[#510b17]">
                  We design and execute effective advertising campaigns across<br />
                  various platforms, including television and digital media,<br />
                  to increase brand visibility and drive meaningful results.
                </p>
              </div>
  
              {/* Second Offer Item */}
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col items-center text-center">
                <div className="rounded-lg h-40 w-40 overflow-hidden">
                  <Image
                    src={require("../../../public/images/media2-home-icon2.webp")}
                    alt="logo"
                    className="object-cover object-center w-full h-full"
                    width={160}
                    height={160}
                  />
                </div>
                <h2 className="text-xl font-semibold title-font text-[#510b17] mt-4">
                  Social Media Management
                </h2>
                <p className="leading-relaxed mt-3 text-sm text-[#510b17]">
                  We develop tailored social media strategies, manage content<br />
                  creation and scheduling, and boost engagement to help you<br />
                  build a strong online presence and connect with your target audience.
                </p>
              </div>
  
              {/* Third Offer Item */}
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col items-center text-center">
                <div className="rounded-lg h-40 w-40 overflow-hidden">
                  <Image
                    src={require("../../../public/images/media2-home-icon3.webp")}
                    alt="logo"
                    className="object-cover object-center w-full h-full"
                    width={160}
                    height={160}
                  />
                </div>
                <h2 className="text-xl font-semibold title-font text-[#510b17] mt-4">
                  Video Production
                </h2>
                <p className="leading-relaxed mt-3 text-sm text-[#510b17]">
                  From concept development to post-production, we create visually<br />
                  stunning and impactful videos for advertisements,<br />
                  documentaries, and social media platforms.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Offer;
  