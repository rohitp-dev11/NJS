import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const ScrollyCanvas = dynamic(() => import("@/components/ScrollyCanvas"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>
      <div className="relative z-20 bg-[#121212]">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
