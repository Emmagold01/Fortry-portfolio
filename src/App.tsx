import "./App.css";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
