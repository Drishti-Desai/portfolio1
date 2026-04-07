import Hero from "../components/Hero";
import About from "../components/about";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      <div className="max-w-5xl mx-auto px-6">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </div>
    </main>
  );
}