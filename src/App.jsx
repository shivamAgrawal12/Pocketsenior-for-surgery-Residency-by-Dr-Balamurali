import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home"; 
import About from "./components/About";
import Chapter from "./components/Chapter";
import Longcasechapter from "./components/Longcasechapter";
import Shortcaseschapter from "./components/Shortcaseschapter";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const handleCopy = async (event) => {
      event.preventDefault();
      const heartIcon = "Lots of ❤️";
      try {
        await navigator.clipboard.writeText(heartIcon);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    };

    document.addEventListener("copy", handleCopy);
    
    return () => {
      document.removeEventListener("copy", handleCopy);
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chapter/:id" element={<Chapter />} />
        <Route path="/Longcasechapter/:id" element={<Longcasechapter />} />
        <Route path="/Shortcaseschapter/:id" element={<Shortcaseschapter />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
