import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletters from "./components/Newsletters";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletters />
      <Cards />
    </div>
  );
}

export default App;
