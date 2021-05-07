import React, { useState } from 'react'
import Slider from 'react-animated-slider'
import Hero from '../../images/hero.jpg'
import Hero2 from '../../images/hero_2.png'
import Hero3 from '../../images/hero_3.png'
import { Button2 } from '../ButtonElements'
import {
  HeroContainer,
  HeroBg,
  ImageBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from './HeroElements'
import './customSlider.css'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  const slides = [
    {
      img: Hero,
      title: 'A New Order Of Life',
      description: 'Think - Eat - Live',
    },
    {
      img: Hero2,
      title: 'Focus on your health',
      description: 'Not your weight',
    },
    {
      img: Hero3,
      title: 'Let\'s work together',
      description: 'L.N. Eyder Méndez Gamboa',
    },
  ]

  return (
    <HeroContainer id="home">
      <Slider autoplay={4000} className="sliderCustom">
        {slides.map((slide, index) => (
          <HeroBg key={index}>
            <ImageBg src={slide.img} alt={slide.title} />
            <HeroH1>{slide.title}</HeroH1>
            <HeroP>{slide.description}</HeroP>
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
          </HeroBg>
        ))}
      </Slider>
    </HeroContainer>

  // <HeroContainer id="home">
  //   <Slider autoplay={3000} slideIndex={999}>
  //     <>
  //       <HeroBg>
  //         <ImageBg src={Hero} alt="hero" />
  //       </HeroBg>
  //       <HeroContent>
  //         <HeroH1>A New Order Of Life</HeroH1>
  //         <HeroP>Think - Eat - Live</HeroP>
  //         <HeroBtnWrapper>
  //           <Button2
  //             to="contact"
  //             onMouseEnter={onHover}
  //             onMouseLeave={onHover}
  //             primary="true"
  //             dark="true"
  //             smooth={true}
  //             duration={500}
  //             spy={true}
  //             exact="true"
  //             offset={-80}
  //           >
  //             <span>Agenda tu cita</span>
  //           </Button2>
  //         </HeroBtnWrapper>
  //       </HeroContent>
  //     </>
  //   </Slider>
  // </HeroContainer>
  )
}

export default HeroSection
