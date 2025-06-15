import "./App.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { useState, useEffect } from "react";

function App() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      {showBtn && (
        <div className="fixed right-4 bottom-5 z-50">
          <button
            onClick={scrollToTop}
            className="flex h-15 w-15 cursor-pointer items-center justify-center rounded-full bg-black"
          >
            <Icon
              icon="icon-park-outline:arrow-up"
              className="text-xl text-white"
            />
          </button>
        </div>
      )}

      <div className="md:max-w-8xl px-5 md:mx-auto md:px-10 lg:px-15">
        <Navbar />
        <Hero />
      </div>

      <div
        style={{
          background:
            "linear-gradient(to bottom, #f2f2f2 40%, #d0d0d0 75%, #ffffff 100%)",
        }}
        className="mt-[4rem] rounded-t-[5rem]"
      >
        <Services />
      </div>

      <div className="rounded-[50px] bg-[#e6e8ff] lg:rounded-t-[5rem]">
        <Portfolio />
      </div>

      <div className="bg-[#001948]">
        <Contact />
      </div>

      <div className="">
        <Footer />
      </div>
    </>
  );
}

export default App;
