import styled from "styled-components";

import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.5) !important;
    z-index: 5;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;
export const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 5;
  max-width: 1000px;
  margin: 0 auto;
`;
export const HeroH1 = styled.h1`
  font-size: 48px;
  color: #fff;
  font-family: "Dancing Script", cursive;

  @media screen and (max-width: 768px) {
    font-size: 38px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
export const HeroP = styled.p`
  color: #fff;
  font-size: 19px;
  text-align: center;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 23px;
  font-weight: bold;
  display: felx;
  align-items: center;
  margin-top: 2px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 23px;
  font-weight: bold;
  display: felx;
  align-items: center;
  margin-top: 2px;
`;
