import styled, { keyframes } from "styled-components";

const floatingAnimation = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(600px); }
  100% { transform: translateX(0); }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  overflow: hidden;
  padding: 20px;
  max-width: 95%;
  width: 400px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: inset 0px 0px 12px rgba(255, 255, 255, 0.2), 
              0px 5px 12px rgba(0, 0, 0, 0.3);
  margin: 0 auto;  /* Centers the card horizontally */

  &:hover {
    transform: scale(1.05);
    box-shadow: inset 0px 0px 15px rgba(255, 255, 255, 0.3), 
                0px 8px 18px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    width: 350px;
    padding: 18px;
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 15px;
  }
`;

export const CardLeft = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 50%;
  margin-bottom: 15px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: inset 0px 0px 10px rgba(255, 255, 255, 0.2), 
              0px 5px 8px rgba(0, 0, 0, 0.2);

  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;

    img {
      width: 70px;
      height: 70px;
    }
  }
`;

export const CardRight = styled.div`
  color: #222;

  h4 {
    font-size: 1.6rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
  }

  h5 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #444;
  }

  p {
    margin: 12px 0;
    font-size: 1rem;
    color: #555;
  }

  @media (max-width: 480px) {
    h4 {
      font-size: 1.3rem;
    }
    h5 {
      font-size: 1.1rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

export const TechCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-top: 14px;
`;

export const TechCard = styled.span`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: #222;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: bold;
  box-shadow: inset 0px 0px 10px rgba(255, 255, 255, 0.15), 
              0px 3px 6px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 5px 10px;
  }
`;

export const BtnGroup = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;

  a {
    display: inline-block;
    padding: 10px 16px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s ease-in-out;
    font-size: 1rem;
    box-shadow: inset 0px 0px 8px rgba(255, 255, 255, 0.2), 
                0px 4px 8px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);

    &.PrimaryBtn {
      background: rgba(255, 255, 255, 0.2);
      color: #222;
      &:hover {
        background: rgba(255, 255, 255, 0.4);
      }
    }

    &.SecondaryBtn {
      background: rgba(255, 255, 255, 0.15);
      color: #222;
      &:hover {
        background: rgba(255, 255, 255, 0.3);
      }
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;

    a {
      font-size: 0.9rem;
      padding: 8px 14px;
    }
  }
`;
