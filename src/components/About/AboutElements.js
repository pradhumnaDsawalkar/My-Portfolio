import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
  margin-top: 5rem;
  padding: 0 1rem;

  @media screen and (max-width: 576px) {
    margin-top: 3rem;
  }
`;

export const Image = styled.img`
  max-width: 120px;
  margin: 0 auto;
  margin-bottom: 1rem;

  @media screen and (max-width: 576px) {
    max-width: 100px;
  }
`;

export const Technologies = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr)); /* Dynamic grid */
  gap: 20px;
  max-width: 90%;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  justify-items: center; /* Centers items in the grid */

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
    gap: 15px;
  }

  @media screen and (max-width: 480px) {
    gap: 10px;
  }
`;

export const Tech = styled.div`
  background: #1e1e1e;
  padding: 15px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 768px) {
    width: 80px;
    height: 80px;
  }

  @media screen and (max-width: 480px) {
    width: 70px;
    height: 70px;
  }
`;

export const TechImg = styled.img`
  height: 50px;
  width: 50px;
  object-fit: contain;
  padding-bottom: 5px;

  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media screen and (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`;

export const TechName = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  margin-top: 5px;

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
