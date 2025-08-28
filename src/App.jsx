import Header from "./components/layout/Header";
import Hero from "./components/other/Hero";
import About from "./components/other/About";
import Services from "./components/other/Services";
import Work from "./components/other/Work";
import Footer from "./components/layout/Footer";

import {
  heroSection,
  aboutSection,
  servicesSection,
  workSection,
} from "./assets/data";

function App() {
  return (
    <div className="scroll-smooth">
      <Header />

      <Hero hero={heroSection} />

      <section id="about">
        <About about={aboutSection} />
      </section>
      <section id="services">
        <Services service={servicesSection} />
      </section>
      <section id="work">
        <Work work={workSection} />
      </section>

      <Footer />
    </div>
  );
}

export default App;
