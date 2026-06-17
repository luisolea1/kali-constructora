import Hero from "../Hero/Hero";
import About from "../About/About";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import Partners from "../Partners/Partners";
// import Contact from "../Contact/Contact";

function Main() {
    return (
    <main className="page">
      
      <Hero />
      <About />
      <Services />
      <Projects />
      <Partners />

      {/* Contact */}
    </main>
);
}

export default Main;