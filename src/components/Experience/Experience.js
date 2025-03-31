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
import ExperienceVoiceControl from "../VoiceControl/ExperienceVoiceControl";

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
          padding: "80px 5%",
          textAlign: "center",
        }}
      >
        <ExperienceVoiceControl />
        <div
          className="SectionTitle"
          style={{
            fontSize: "2rem",
            marginBottom: "50px",
            fontWeight: "bold",
          }}
        >
          Experience
        </div>

        <div style={{ width: "85%", maxWidth: "900px" }}>
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

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .experience-section {
              padding: 60px 5%;
            }
            .SectionTitle {
              font-size: 1.8rem;
              margin-bottom: 40px;
            }
          }

          @media (max-width: 480px) {
            .experience-section {
              padding: 50px 4%;
            }
            .SectionTitle {
              font-size: 1.5rem;
              margin-bottom: 30px;
            }
          }
        `}
      </style>
    </>
  );
}

export default ExperienceCard;
