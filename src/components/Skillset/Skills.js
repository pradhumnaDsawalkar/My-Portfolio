import React from "react";
import { Technologies, Tech, TechImg, TechName } from "../About/AboutElements";
import { stackList } from "../../data/ProjectData";
import ScrollAnimation from "react-animate-on-scroll";
import VoiceControl from "../VoiceControl/VoiceControl"; // Import the VoiceControl component

const SkillSet = () => (
  <div style={{marginBottom:"4rem"}}> 
  <VoiceControl/>
  <div className="SectionTitle" style={{ textAlign: "center", fontSize: "2rem", marginBottom: "40px",marginTop:"70px" }}>SkillSet</div>
  <Technologies>
    {stackList.map((stack, index) => (
      <ScrollAnimation animateIn="fadeInLeft" key={index}>
        <Tech className="tech">
          <TechImg src={stack.img} alt={stack.name} />
          <TechName>{stack.name}</TechName>
        </Tech>
      </ScrollAnimation>
    ))}
  </Technologies>
  </div>
);

export default SkillSet;
