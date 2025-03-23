import React from "react";
import Hero from "../components/Hero/Hero";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import SkillSet from "../components/Skillset/Skills";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";
function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <section id="experience">
        <Experience />
      </section>
      <About />
      <section id="skillset">
        <SkillSet />
      </section>
      <section id="contact">
      <Contact />
      </section>
      
      <FixSocialIcon />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
