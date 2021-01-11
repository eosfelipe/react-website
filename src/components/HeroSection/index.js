import React, { useState } from "react";
import Hero from "../../images/hero.jpg";
import { Button2 } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  ImageBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImageBg src={Hero} alt="hero" />
      </HeroBg>
      <HeroContent>
        <HeroH1>A New Order Of Life</HeroH1>
        <HeroP>Think - Eat - Live</HeroP>
        <HeroBtnWrapper>
          <Button2
            to="contact"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            <span>Agenda tu cita</span>
          </Button2>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
