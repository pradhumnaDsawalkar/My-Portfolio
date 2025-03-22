import React from "react";
import { ExperienceList } from "../../data/ExperienceList";
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
} from "./ExperienceCardElements";
import ScrollAnimation from "react-animate-on-scroll";


function ExperienceCard() {
  return (
    <>
    <div
      className="experience-section"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: "90%",
        width: "100%",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <div className="SectionTitle" style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}>
        Experience
      </div>
  
      <div style={{ width: "78%" }}>
        {ExperienceList.map((experience, index) => (
          <ScrollAnimation animateIn="fadeInLeft" key={index}>
            <Card>
              <CardLeft>
                <img
                  src={"/crakCodeLogoImg.svg"}
                  alt={experience.company}
                  style={{ maxWidth: "100px", borderRadius: "50%" }}
                />
              </CardLeft>
              <CardRight>
                <h4>{experience.role}</h4>
                <h5>{experience.company}</h5>
                <p>{experience.description}</p>
                <TechCardContainer>
                  {experience.skills.map((skill, index) => (
                    <TechCard key={index}>{skill}</TechCard>
                  ))}
                </TechCardContainer>
                <BtnGroup>
                  {experience.certificate_url.length > 0 && (
                    <a
                      className="btn SecondaryBtn btn-shadow"
                      href={experience.certificate_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Certificate
                    </a>
                  )}
                  {experience.company_website.length > 0 && (
                    <a
                      className="btn PrimaryBtn btn-shadow"
                      href={experience.company_website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit ➜
                    </a>
                  )}
                </BtnGroup>
              </CardRight>
            </Card>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  </>
  
  );
}

export default ExperienceCard;
