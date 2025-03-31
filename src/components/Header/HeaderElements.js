import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import styled from "@emotion/styled";

/* 💡 Navbar Container */
export const Nav = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 0 20px;
  z-index: 1000;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease-in-out;
  background: rgba(0, 0, 0, 0.6);
`;

/* 💡 Navigation Links */
export const NavLink = styled(ScrollLink)`
  color: #ddd;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  padding: 10px 15px;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #fff;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.8);
  }

  /* 🔥 Cool Neon Underline Effect */
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    bottom: -5px;
    left: 50%;
    background: linear-gradient(90deg, #ff00ff, #00ffff);
    transition: all 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }
`;

/* 💡 Logo Styling */
export const Logo = styled(ScrollLink)`
  cursor: pointer;

  img {
    width: 50px;
    height: 50px;
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: rotate(360deg) scale(1.1);
  }
`;

/* 💡 Mobile Menu Icon */
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #ff00ff;
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

/* 💡 Close Icon for Mobile Menu */
export const CloseIcon = styled(FaTimes)`
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #ff00ff;
    transform: scale(1.1);
  }
`;

/* 💡 Desktop Navigation Menu */
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

/* 💡 Mobile Navigation Menu */
export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  transition: 0.4s ease-in-out;

  ${NavLink} {
    font-size: 1.8rem;
  }
`;

/* 💡 Button with Glowing Effect */
export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  .btn {
    background: linear-gradient(45deg, #ff00ff, #00ffff);
    padding: 10px 20px;
    color: white;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    text-decoration: none;
    box-shadow: 0 0 15px rgba(255, 0, 255, 0.5);
  }

  .btn:hover {
    transform: scale(1.1);
    box-shadow: 0 0 25px rgba(0, 255, 255, 0.7);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

/* 💡 Responsive Navigation Component */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      {/* Logo */}
      <Logo to="home" smooth duration={500}>
        <img src="/logo.png" alt="Logo" />
      </Logo>

      {/* Desktop Menu */}
      <NavMenu>
        <NavLink to="about" smooth duration={500}>About</NavLink>
        <NavLink to="services" smooth duration={500}>Services</NavLink>
        <NavLink to="contact" smooth duration={500}>Contact</NavLink>
      </NavMenu>

      {/* Glowing Button */}
      <NavBtn>
        <a href="/signup" className="btn">Get Started</a>
      </NavBtn>

      {/* Mobile Menu Icon */}
      <Bars onClick={() => setIsOpen(true)} />

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen}>
        <CloseIcon onClick={() => setIsOpen(false)} />
        <NavLink to="about" smooth duration={500} onClick={() => setIsOpen(false)}>About</NavLink>
        <NavLink to="services" smooth duration={500} onClick={() => setIsOpen(false)}>Services</NavLink>
        <NavLink to="contact" smooth duration={500} onClick={() => setIsOpen(false)}>Contact</NavLink>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
