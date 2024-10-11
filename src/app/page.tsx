import Image from "next/image";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Offer from "./components/offer";
import Work from "./components/work";
import { Aoboshi_One } from "next/font/google";
import About from "./components/about";
import Contact from "./components/contact";



export default function Home() {
  return (
    <div>
      <Hero />
      <Offer />
      <Work/>
      <About/>
      <Contact/>
    </div>
  );
}
