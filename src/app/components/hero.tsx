"use client";
import React from "react"
import Image from "next/image";
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from "next/link";


// Import your images
import image1 from '../../../public/images/tyler-casey-zplYiXUxjXI-unsplash-scaled-2048x1536.jpg (1).webp';
import image2 from '../../../public/images/onur-binay-O2-EZNGZIyk-unsplash-scaled-2048x1152.jpg.webp';
import image3 from '../../../public/images/chris-murray-YvPxyGzaFJ4-unsplash-scaled-2048x2042.jpg.webp';

const slides = [
    {
        src: image1,
        h1: "Anzar Media Production",
        h2: "Expert Video Production",
        p: "Crafting stunning videos that leave a lasting impression",
        width: 700,
        height: 700
    },
    {
        src: image2,
        h1: "Social Media Strategies",
        h2: "Connect & Engage Your Audience",
        p: "Building your online presence and connecting with your audience",
        width: 700,
        height: 700
    },
    {
        src: image3,
        h1: "Documentary Storytelling",
        h2: "Captivating Narratives",
        p: "Sharing your story with the world",
        width: 700,
        height: 700
    }
];

const Hero = () => {
    const controls = useAnimation();
    const [currentIndex, setCurrentIndex] = useState(0);

    const changeSlide = (direction: any) => {
        const nextIndex = (currentIndex + direction + slides.length) % slides.length;
        setCurrentIndex(nextIndex);
        controls.start({
            opacity: 0,
            scale: 1.1,
            rotate: 10,
            transition: { duration: 0.5, ease: 'easeOut' }
        }).then(() => {
            controls.start({
                opacity: 1,
                scale: 1,
                rotate: 0,
                transition: { duration: 0.5, ease: 'easeOut' }
            });
        });
    };

    const showSlides = () => {
        changeSlide(1);
    };

    useEffect(() => {
        const interval = setInterval(showSlides, 6000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="relative h-screen bg-[#45242a] text-center pt-16">
            <section className="text-gray-200 body-font h-full pt-20">
                <div className="container mx-auto flex flex-col md:flex-row items-center h-full">
                    {/* Text Section */}
                    <motion.div
                        className="md:w-1/2 w-full flex flex-col justify-center px-8 text-center md:text-left"
                        key={`text-${currentIndex}`}
                        animate={controls}
                    >
                        <h3 className="text-lg md:text-xl font-semibold text-[#7a7f92] mb-2">
                            {slides[currentIndex].h1}
                        </h3>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            {slides[currentIndex].h2}
                        </h1>
                        <p className="text-md md:text-lg text-gray-300 mb-6">
                            {slides[currentIndex].p}
                        </p>

                        {/* Arrows and Slide Number - Hidden on small screens */}
                        <div className="hidden sm:flex items-center justify-center md:justify-start space-x-5 mt-8">
                            <button
                                className="text-white text-3xl mx-2"
                                onClick={() => changeSlide(-1)}
                            >
                                &lt;
                            </button>
                            <span className="text-white text-lg">
                                {`0${currentIndex + 1} / ${slides.length}`}
                            </span>
                            <button
                                className="text-white text-3xl mx-2"
                                onClick={() => changeSlide(1)}
                            >
                                &gt;
                            </button>
                        </div>

                        {/* Social Media Icons - Hidden on small screens */}
                        <div className="hidden sm:flex space-x-5 mt-6 justify-center md:justify-start">
                            <FaGoogle className="text-white text-3xl cursor-pointer hover:text-blue-400" />
                            <FaLinkedin className="text-white text-3xl cursor-pointer hover:text-blue-400" />
                            <FaTwitter className="text-white text-3xl cursor-pointer hover:text-blue-400" />
                        </div>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        className="md:w-1/2 w-full flex justify-center items-center relative mt-10 md:mt-0"
                        key={`image-${currentIndex}`}
                        animate={controls}
                    >
                        {/* Make the image responsive for smaller screens */}
                        <div className="w-full sm:w-[500px] h-auto sm:h-[350px] flex justify-center items-center">
                            <Image
                                className="object-cover object-center rounded-xl shadow-xl"
                                alt={`slide-${currentIndex}`}
                                src={slides[currentIndex].src}
                                width={slides[currentIndex].width}
                                height={slides[currentIndex].height}
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
/////////////////////////// 

