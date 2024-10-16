import React from "react";
import { SiMediamarkt } from "react-icons/si";

const Work = () => {
  return (
    <div id="Work" className="bg-[#45242a]">
      <section className="text-[#f3eced] body-font">
        <div className="container px-5 py-24 mx-auto">
          {/* Text Section */}
          <div className="flex flex-col text-center w-full mb-12">
            <div className="flex flex-wrap sm:flex-row flex-col py-8 mb-11 items-center justify-center">
              <h1 className="sm:w-2/5 text-[#f3eced] font-bold title-font text-4xl sm:text-5xl mb-4 sm:mb-0">
                Work
              </h1>
              <p className="sm:w-2/4 leading-relaxed text-[#f3eced] text-2xl sm:text-3xl text-center font-bold">
                Specializing in Video Production,<br />
                Social Media Management, &<br />
                Advertising
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="container px-0 py-12 mx-auto flex flex-wrap justify-center">
            <div className="lg:w-full mx-auto">
              <div className="flex flex-wrap py-0 px-2">
                {/* Video element with autoplay */}
                <video
                  className="w-full h-64 sm:h-96 lg:h-[80vh]" // Full height on larger screens
                  src="media.mp4"
                  autoPlay
                  loop
                  muted
                  controls
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
