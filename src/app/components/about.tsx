import React from 'react'

const About = () => {
  return (
    <div id='About' className='relative h-screen bg-[#f3eced] text-center pt-1'>
      <section className="text-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-8xl text-[#45242a] tracking-widest font-semibold title-font mb-2 mr-30">
              About us
            </h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-[#45242a] ">
              Anzar Media Production began as an ambitious documentary filmmaking and advertising company. Over the years, we've grown our expertise and expanded our services to encompass all aspects of video production and digital marketing. Our passion for storytelling and commitment to exceptional quality has allowed us to collaborate with numerous clients and create engaging content that resonates with audiences.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 ">
              <h2 className="text-lg sm:text-xl text-[#45242a] font-medium title-font mb-0">
                Big idea
              </h2>
              <p className="leading-relaxed text-base mb-4 text-[#45242a]">
                Harnessing the power of creativity and innovation to help our clients achieve unparalleled success.
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-black border-opacity-60">
              <h2 className="text-lg sm:text-xl text-[#45242a] font-medium title-font mb-0">
                Mission
              </h2>
              <p className="leading-relaxed text-base mb-4 text-[#45242a]">
                Empower businesses through innovative video production and digital marketing solutions succsess
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-black border-opacity-60">
              <h2 className="text-lg sm:text-xl text-[#45242a] font-medium title-font mb-0">
                Providing
              </h2>
              <p className="leading-relaxed text-base mb-4 text-[#45242a]">
                At Anzar Media Production, we are committed to providing exceptional services  our clients' expectations.
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-black border-opacity-60">
              <h2 className="text-lg sm:text-xl text-[#45242a] font-medium title-font mb-0">
                helping
              </h2>
              <p className="leading-relaxed text-base mb-9 text-[#45242a] ">
                long-lasting relationships with our clients and helping to achieve their marketing goals through  designs
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About;

