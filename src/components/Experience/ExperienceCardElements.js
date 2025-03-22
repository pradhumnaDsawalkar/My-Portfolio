import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgba(255, 255, 255, 0.15); /* Glassmorphic effect */
  backdrop-filter: blur(12px);
  border-radius: 12px;
  overflow: hidden;
  margin: 20px 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardLeft = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border-right: 1px solid rgba(255, 255, 255, 0.2);

  img {
    max-width: 100px;
    max-height: 100px;
    border-radius: 50%;
  }
`;

export const CardRight = styled.div`
  flex: 2;
  padding: 20px;
  color: #2C3E50; /* Deep Indigo for main text */

  h4 {
    font-size: 1.6rem;
    font-weight: bold;
    color: #F4A261; /* Golden Amber */
  }

  h5 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #34495E; /* Dark Blue-Gray */
  }

  p {
    margin: 10px 0;
    font-size: 1rem;
    color: #7F8C8D; /* Cool Gray */
  }
`;

export const TechCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

export const TechCard = styled.span`
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);
  color: #F4A261; /* Golden Amber */
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: bold;
`;

export const BtnGroup = styled.div`
  margin-top: 15px;

  a {
    display: inline-block;
    margin-right: 10px;
    padding: 10px 15px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s ease-in-out;

    &.PrimaryBtn {
      background: #F4A261;
      color: #2C3E50;

      &:hover {
        background: #E59866;
      }
    }

    &.SecondaryBtn {
      background: rgba(0, 0, 0, 0.2);
      color: #F4A261;

      &:hover {
        background: rgba(0, 0, 0, 0.3);
      }
    }
  }
`;
