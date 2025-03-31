import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "@emotion/styled";
import { Link as ScrollLink } from "react-scroll";

const SiderBar = styled.div`
  background: #151418;
  position: fixed;
  height: 100vh;
  width: 100%;
  left: 0;
  z-index: 999;
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
`;

const CloseIcon = styled(FaTimes)`
  font-size: 2rem;
  color: #fff;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .menu-item + .menu-item {
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    .menu-item + .menu-item {
      margin-top: 1.2rem;
    }
  }
`;

const NavLink = styled(ScrollLink)`
  color: #fff;
  cursor: pointer;
  font-size: 1.7rem;
  transition: 0.3s ease-in-out;

  &:hover {
    color: rgb(119, 119, 121);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  font-size: 1.5rem;

  @media (max-width: 480px) {
    margin-top: 2rem;
    font-size: 1.3rem;
  }
`;

const ResumeButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
  transition: 0.3s ease-in-out;
  font-size: 1.1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 10px 20px;
  }
`;

function Dropdown({ isOpen, toggle }) {
  return (
    <SiderBar isOpen={isOpen} onClick={toggle}>
      <CloseIcon onClick={toggle} />
      <NavMenu>
        <NavLink onClick={toggle} className="menu-item" to="projects">
          Projects
        </NavLink>
        <NavLink onClick={toggle} className="menu-item" to="about">
          About
        </NavLink>
        <NavLink onClick={toggle} className="menu-item" to="contact">
          Contact
        </NavLink>
        <NavLink onClick={toggle} className="menu-item" to="experience">
          Experience
        </NavLink>
      </NavMenu>
      <NavBtn>
        <ResumeButton
          href="https://drive.google.com/file/d/1LkuLexbsGdQw4PkqEqyyGf1rq74V3Emc/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </ResumeButton>
      </NavBtn>
    </SiderBar>
  );
}

export default Dropdown;
