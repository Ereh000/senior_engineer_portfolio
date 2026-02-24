import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AuthorityStrip from "../components/AuthorityStrip";
import About from "../components/About";
import Expertise from "../components/Expertise";
import SelectedWork from "../components/SelectedWork";
import Experience from "../components/Experience";
import Process from "../components/Process";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-white selection:bg-white/20 selection:text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <AuthorityStrip />
        <About />
        <Expertise />
        <SelectedWork />
        <Experience />
        <Process />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
