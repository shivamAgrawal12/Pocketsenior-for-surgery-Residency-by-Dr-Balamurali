import React from "react";
import Hero from "../components/Hero/Hero";
import Chapters from "../components/Chapter/Chapter";
import LongcasesDataCarousel from "../components/DataCarousel/LongcasesDataCarousel";
import ShortcasesDataCarousel from "../components/DataCarousel/ShortcasesDataCarousel";
import Contact from "../components/Contact/Contact";
import TestimonialsCarousel from "../components/DataCarousel/TestimonialsCarousel";

const Home = () => {
  return (
    <main className="home-page">

      <Hero />
      <Chapters />
      <TestimonialsCarousel />
      <LongcasesDataCarousel />
      <ShortcasesDataCarousel />
      <Contact />
    </main>
  );
};

export default Home;