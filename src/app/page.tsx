import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Recommendations from "@/components/Recommendations";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div className="band">
          <About />
        </div>
        <Projects />
        <div className="band">
          <Experience />
        </div>
        <Recommendations />
        <div className="band">
          <Skills />
        </div>
        <Education />
        <div className="band">
          <Certifications />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
