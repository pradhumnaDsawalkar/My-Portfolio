import React from "react";
import {
  Image,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle"style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px",marginTop:"50px" }}>About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Pradhumna Sawalkar</strong>. I'm from India. A Full-stack developer seeking more opportunities to apply my knowledge and skills to the real-world problems.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            My journey into the world of technology began with a strong passion for problem-solving, which led me to pursue the Information Technology program. Despite its challenges, I remained determined and forged lasting friendships that supported me throughout this demanding program.
            Throughout my studies at JSPM RSCOE, I had the opportunity to engage in fascinating projects. Notably, I contributed to the development of the Crakcode pvt hub ltd, projects that garnered recognition from my colleagues, instructors, and clients alike.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
