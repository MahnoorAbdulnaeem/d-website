import Image from "next/image"
import Link from "next/link"
import React from "react";
import { Menu } from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  return (
    <div className="bg-[#45242a] backdrop-blur-sm fixed top-0 left-0 w-full z-10 py-3">
      <header className="text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">

          {/* Logo for all screens */}
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <Image
              src="/images/Anzar-Media-Logo-T.webp"
              alt="logo"
              width={100}
              height={100}
              className="w-[50px]"
            />
          </a>

          {/* Navbar links and button for medium and large screens */}
          <nav className="hidden md:flex items-center space-x-12 text-base font-medium">
            <Link href="/" className="text-white hover:text-gray-300">Home</Link>
            <Link href="#Offer" className="text-white hover:text-gray-300">Offer</Link>
            <Link href="#Work" className="text-white hover:text-gray-300">Work</Link>
            <Link href="#About" className="text-white hover:text-gray-300">About</Link>
            <Link href="#Contact" className="text-white hover:text-gray-300">Contact</Link>
            <Image src="/images/en.svg" alt="flag" width={20} height={20} className="w-[20px]" />
            <button className="text-black bg-[#dbdddf] px-4 py-2 hover:bg-white w-56">
              Free consultation
            </button>
          </nav>

          {/* Menu Button for small screens */}
          <div className="sm:hidden flex items-center space-x-4">
            {/* Use a div or span here instead of a button */}
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    <Link href="/" className="block text-center bg-[#45242a] text-white py-2 px-4 rounded-lg hover:bg-[#5a2d34] transition-colors duration-300">
                      Home
                    </Link>
                    <br />
                    <Link href="#Offer" className="block text-center bg-[#45242a] text-white py-2 px-4 rounded-lg hover:bg-[#5a2d34] transition-colors duration-300">
                      Offer
                    </Link>
                    <br />
                    <Link href="#Work" className="block text-center bg-[#45242a] text-white py-2 px-4 rounded-lg hover:bg-[#5a2d34] transition-colors duration-300">
                      Work
                    </Link>
                    <br />
                    <Link href="#About" className="block text-center bg-[#45242a] text-white py-2 px-4 rounded-lg hover:bg-[#5a2d34] transition-colors duration-300">
                      About
                    </Link>
                    <br />
                    <Link href="#Contact" className="block text-center bg-[#45242a] text-white py-2 px-4 rounded-lg hover:bg-[#5a2d34] transition-colors duration-300">
                      Contact
                    </Link>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;