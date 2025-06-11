import "./App.css";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
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
          background: "linear-gradient(to bottom, #f2f2f2 44%, #8c8c8c 100%)",
        }}
        className="mt-[4rem] rounded-t-[5rem]"
      >
        <Services />
      </div>
    </>
  );
}

export default App;
