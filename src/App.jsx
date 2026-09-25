import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Home from "./components/Home";
import Casechapter from "./components/CaseChapter/CaseChapter";
import Longcasechapter from "./components/CaseChapter/LongcaseChapter";
import Shortcasechapter from "./components/CaseChapter/ShortcaseChapter";
import StickyPromo from "./components/StickyPromo/StickyPromo";
import PageNotFound from "./components/PageNotFound";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path= "/about" element={<About/>} />
        <Route path="/chapter/:id" element={<Casechapter />} />
        <Route path="/Longcasechapter/:id" element={<Longcasechapter />} />
        <Route path="/Shortcaseschapter/:id" element={<Shortcasechapter />} />
        {/* <Route path="*" element={<Home />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <StickyPromo/>
    </Router>
  );
}

export default App;