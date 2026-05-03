import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import MoreProjects from "@/components/MoreProjects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#080808] min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <MoreProjects />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <Leadership />
      <Contact />
      <Footer />
    </main>
  );
}
