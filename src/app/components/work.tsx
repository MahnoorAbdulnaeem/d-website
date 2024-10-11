import React from "react";
import { SiMediamarkt } from "react-icons/si";
const Work = () => {
    return (
      <div id="Work" className="bg-[#f3eced]">
        <section className="text-[#45242a] body-font">
          <div className="container px-5 py-24 mx-auto">
            {/* Text Section */}
            <div className="flex flex-col text-center w-full mb-12">
              <div className="flex flex-wrap sm:flex-row flex-col py-8 mb-11 items-center justify-center">
                <h1 className="sm:w-2/5 text-[#45242a] font-bold title-font text-4xl sm:text-5xl mb-4 sm:mb-0">
                  Work
                </h1>
                <p className="sm:w-2/4 leading-relaxed text-[#45242a] text-2xl sm:text-3xl text-center font-bold">
                  Specializing in Video Production,<br />
                  Social Media Management, &<br />
                  Advertising
                </p>
              </div>
            </div>
  
            {/* Video Section */}
            <div className="container px-0 py-12 mx-auto flex flex-wrap justify-center">
              <div className="lg:w-full min-h-30 mx-auto">
                <div className="flex flex-wrap min-h-full py-0 px-2">
                  <iframe
                    className="w-full h-64 sm:h-96 lg:h-[80vh]"  // Full height on larger screens
                    src="media.mp4"
                    allowFullScreen
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
  