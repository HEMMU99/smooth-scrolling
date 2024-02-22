import React, { useState } from "react";
import video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroWrapper,
  ArrowRight,
  ArrowForward,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg autoPlay loop muted src={video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>Single Page Smooth Scroll</HeroH1>
          <HeroP>
            Thsi Single page site designed using <b>REACT</b> with smooth scroll
            and by using <b>Styled Components</b>
          </HeroP>
          <HeroWrapper>
            <Button
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              to="/signup"
              primary="true"
              dark="true"
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
