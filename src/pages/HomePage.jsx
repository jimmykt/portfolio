import "./HomePage.scss";

import Hero from "../components/Hero";
import Porjects from "../components/Projects";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="home">
      <Hero />
      <Porjects />
      <Footer />
    </div>
  );
}

export default HomePage;
