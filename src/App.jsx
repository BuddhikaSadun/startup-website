import Header from "./components/layout/Header";
import Hero from "./components/other/Hero";
import About from "./components/other/About";
import Services from "./components/other/Services";
import Work from "./components/other/Work";
import Footer from "./components/layout/Footer";
import ContactUs from "./components/other/ContactUs";

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

      <section id="overview">
        <Hero hero={heroSection} />
      </section>

      <section id="about">
        <About about={aboutSection} />
      </section>
      <section id="services" className="scroll-mt-10">
        <Services service={servicesSection} />
      </section>
      <section id="work" className="scroll-mt-10">
        <Work work={workSection} />
      </section>
      <section id="contactUs" className="scroll-mt-24">
        <ContactUs />
      </section>

      <Footer />
    </div>
  );
}

export default App;
