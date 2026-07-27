import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { TechTicker } from "@/components/sections/tech-ticker";

// Below-the-fold sections: split into separate chunks so they don't
// block the initial hydration of the hero/navbar.
const About = dynamic(() =>
  import("@/components/sections/about").then((m) => m.About)
);
const Journey = dynamic(() =>
  import("@/components/sections/journey").then((m) => m.Journey)
);
const Experience = dynamic(() =>
  import("@/components/sections/experience").then((m) => m.Experience)
);
const Projects = dynamic(() =>
  import("@/components/sections/projects").then((m) => m.Projects)
);
const Skills = dynamic(() =>
  import("@/components/sections/skills").then((m) => m.Skills)
);
const Contact = dynamic(() =>
  import("@/components/sections/contact").then((m) => m.Contact)
);
const Footer = dynamic(() =>
  import("@/components/sections/footer").then((m) => m.Footer)
);

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <TechTicker />
      <About />
      <Journey />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
