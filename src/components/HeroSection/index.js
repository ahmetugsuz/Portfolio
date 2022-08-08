import React, {useState} from 'react';
import './Hero.css';
import {HeroContainer, HeroBg, VideoBg, HeroContent, 
HeroH1, HeroP, HeroBtnWrapper, ArrowDown, TextBox} from './HeroElements';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement';


function Hero() {
  const[hover, setHover] = useState(false);

  const onHover = () =>{
    setHover(!hover);
  }
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <TextBox>
              <HeroH1>Welcome To My Website</HeroH1>
              <HeroP>This website was created by me</HeroP>
            </TextBox>
            <HeroBtnWrapper>
              <Button to="about" onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary='true'
              dark='true'
              smooth={true} duration={700} spy={true} exact='true'
              offset={-80}>
                Who Am I? {hover ? <ArrowDown /> : <ArrowDown />}
              </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero;
