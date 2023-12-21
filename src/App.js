import { useEffect, useState } from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
function App() {
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else setShowScroll(false);
    });
  }, []);
  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <Main />
      <Contact />
      <Footer />
      <a style={{ opacity: showScroll ? 1 : 0, transition: "0.8s" }} href="#up">
        <button className="scrollUp icon-keyboard_arrow_up" />
      </a>
    </div>
  );
}

export default App;
