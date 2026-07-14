import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AskMe from "@/components/AskMe";
import Currently from "@/components/Currently";
import SelectedWork from "@/components/SelectedWork";
import Stack from "@/components/Stack";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import SectionIndex from "@/components/Sectionindex";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto min-h-screen px-4">
      <Nav />
      <Hero />
      <AskMe />
      <Currently />
      <SelectedWork />
      <Stack />
      <Certifications />
      <Contact />
      <SectionIndex />
    </main>
  );
}