import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 800px;
  background: #333;

  @media screen and (max-width: 768px) {
    height: 1300px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content:flex-start
  align-items: center;
  text-align: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  bax-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: 0.2s ease;

  &:hover {
    transform: scale(1.02);
    transition: 0.2s ease;
  }
`;

export const ServicesIcon = styled.img`
  width: 160px;
  height: 160px;
  margin-bottom: 15px;
  margin: 0 auto 15px;
`;
export const ServicesH1 = styled.h1`
  font-size: 38px;
  margin-bottom: 20px;
  color: #fff;

  @media screen and(max-width:768px) {
    font-size: 23px;
  }
`;
export const ServicesH2 = styled.h2`
  font-size: 25px;
  margin-bottom: 20px;

  @media screen and(max-width:768px) {
    font-size: 18px;
  }
`;
export const ServicesP = styled.p`
  font-size: 18px;
  margin-bottom: 20px;

  @media screen and(max-width:768px) {
    font-size: 14px;
  }
`;
