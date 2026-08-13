import Hero from "../Hero/Hero";
import About from "../About/About";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import Partners from "../Partners/Partners";
import Contact from "../Contact/Contact";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

function Main() {
  return (
    <main className="page">
      <Hero />

      <ScrollReveal>
        <About />
      </ScrollReveal>

      <ScrollReveal>
        <Services />
      </ScrollReveal>

      <Projects />

      <ScrollReveal>
        <Partners />
      </ScrollReveal>

      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </main>
  );
}

export default Main;
