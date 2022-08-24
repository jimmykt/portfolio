import "./HomePage.scss";

import React, { useState } from "react";

import Hero from "../components/Hero";
import Porjects from "../components/Projects";
import Footer from "../components/Footer";
import UpArrow from "../assets/Icons/up-arrow-2.png";
import AboutMe from "./ContactPage";
function HomePage() {
  const [showScroll, setShowScroll] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 500) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 500) {
      setShowScroll(false);
    }
  };
  window.addEventListener("scroll", checkScrollTop);

  return (
    <main className="home">
      <div className="Projects__upArrowContainer">
        <img
          className="scrollTop"
          onClick={scrollTop}
          style={{ height: 40, display: showScroll ? "flex" : "none" }}
          src={UpArrow}
          alt="Go to top"
        />
      </div>
      <Hero />
      <Porjects />
      <AboutMe />
      {/* <Footer /> */}
    </main>
  );
}

export default HomePage;
