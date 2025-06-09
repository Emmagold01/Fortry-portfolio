import "./App.css";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="md:max-w-8xl px-5 md:mx-auto md:px-10 lg:px-15">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
