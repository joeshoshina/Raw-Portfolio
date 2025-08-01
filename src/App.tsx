import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Story from "./components/Story";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
