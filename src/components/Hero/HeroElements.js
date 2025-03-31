import styled, { keyframes } from "styled-components";
import { Link as LinkScroll } from "react-scroll";

/* Smooth Fade-In Animation */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

/* Elegant Floating Effect */
const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`;

/* Subtle Scroll Indicator Animation */
const shimmer = keyframes`
  0% { opacity: 0.5; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(-5px); }
  100% { opacity: 0.5; transform: translateY(0); }
`;

/* Hero Section Container */
export const HeroContainer = styled.div`
  padding: 5rem 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1s ease-in-out;
  max-width: 1200px;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

/* Hero Wrapper */
export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  padding: 4rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  width: 100%;
  max-width: 1100px;

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;
    padding: 3rem;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`;

/* Left Side of Hero */
export const HeroLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    background: linear-gradient(45deg, #1e3c72, #2a5298);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 2px 2px 10px rgba(30, 60, 114, 0.5);
  }

  h5 {
    font-size: 1.4rem;
    font-weight: 500;
    color: #d1d5db;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: #e5e7eb;
    line-height: 1.6;
  }

  @media screen and (max-width: 992px) {
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2.4rem;
    }

    h5 {
      font-size: 1.2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

/* Right Side of Hero */
export const HeroRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* Hero Image */
export const Image = styled.img`
  height: 350px;
  width: auto;
  transition: transform 0.4s ease-in-out, filter 0.4s ease-in-out;
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.3));

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 992px) {
    height: 280px;
  }

  @media screen and (max-width: 768px) {
    height: 230px;
  }
`;

/* Scroll Down Indicator */
export const ScrollDown = styled(LinkScroll)`
  display: flex;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${shimmer} 2s infinite ease-in-out;

  &:hover {
    filter: brightness(1.2);
  }

  @media screen and (max-width: 992px) {
    position: relative;
    margin-top: 2rem;
  }

  @media screen and (max-width: 768px) {
    bottom: 20px;
  }
`;

/* Scroll Link */
export const ScrollLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #d1d5db;
  text-shadow: 0px 0px 8px rgba(209, 213, 219, 0.5);

  img {
    height: 30px;
    width: 30px;
    margin-left: 8px;
    animation: ${shimmer} 1.5s infinite alternate;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;

    img {
      height: 25px;
      width: 25px;
    }
  }
`;
