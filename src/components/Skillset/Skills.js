import React from "react";
import { Technologies, Tech, TechImg, TechName } from "../About/AboutElements";
import { stackList } from "../../data/ProjectData";
import ScrollAnimation from "react-animate-on-scroll";

const SkillSet = () => (
  <div> <div className="SectionTitle" style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px",marginTop:"50px" }}>SkillSet</div>
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
