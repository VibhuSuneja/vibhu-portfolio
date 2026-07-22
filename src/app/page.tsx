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
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { Chatbot } from "@/components/Chatbot";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen">
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
      <WhatsAppButton />
      <Chatbot />
      <ScrollToTop />
    </main>
  );
}

