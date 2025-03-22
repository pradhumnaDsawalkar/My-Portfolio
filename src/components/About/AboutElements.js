import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
  margin-top: 5rem;
`;

export const Image = styled.img`
  max-width: 120px;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 90%;
  width: 70%;
  margin: 0 auto;
  padding: 20px;
`;

export const Tech = styled.div`
  background: #1e1e1e;
  padding: 15px;
  border-radius: 10px;
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
`;

export const TechName = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  margin-top: 5px;
`;
