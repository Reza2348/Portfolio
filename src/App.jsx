import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MySkills from "./components/MySkills";
import MyExperience from "./components/MyExperience";
import About from "./components/About";
import MyProjects from "./components/MyProjects";
import MyTestimonial from "./components/MyTestimonial";
import ContactUS from "./components/ContactUS";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <MySkills />
      <MyExperience />
      <About />
      <MyProjects />
      <MyTestimonial />
      <ContactUS />
      <Footer />
    </>
  );
}

export default App;
