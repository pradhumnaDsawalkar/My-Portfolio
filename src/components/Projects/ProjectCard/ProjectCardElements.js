import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  padding: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 90%;
  max-width: 400px;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  /* Light Glassmorphism Background */
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(12px);
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 14px;
    background: linear-gradient(45deg, #ffebd2, #d0f4de, #cce5ff, #fad2e1);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    pointer-events: none;
  }

  &:hover {
    transform: perspective(1000px) rotateY(3deg) translateY(-4px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 768px) {
    max-width: 700px;
    flex-direction: row;
    text-align: left;
    padding: 2rem 3rem;
  }

  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

export const CardLeft = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12);

    @media (max-width: 480px) {
      width: 80px;
      height: 80px;
    }
  }

  @media (min-width: 768px) {
    width: 40%;
    margin-bottom: 0;
  }
`;

export const CardRight = styled.div`
  width: 100%;

  h4 {
    font-size: 1.4rem;
    font-weight: 700;
    color: #222;
    text-transform: uppercase;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }

  p {
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.85);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
    line-height: 1.6;
    max-width: 90%;
    margin: 0 auto;
    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  @media (min-width: 768px) {
    width: 55%;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 1rem;
`;

export const TechCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-top: 1rem;
`;

export const TechCard = styled(motion.div)`
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(255, 192, 203, 0.5), rgba(173, 216, 230, 0.5));
  padding: 6px 14px;
  font-size: 14px;
  font-weight: 500;
  color: black;
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.08);
  }

  /* Floating Animation */
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-6px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

