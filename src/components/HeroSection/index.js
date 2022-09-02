import React, {useState} from 'react';
import './Hero.css';
import {HeroContainer, HeroBg, VideoBg, HeroContent, 
HeroH1, HeroP, HeroBtnWrapper, ArrowDown, TextBox} from './HeroElements';
import Video from '../../videos/video.mp4';
import linkedIn from '../../images/linkedInBlackWhite.webp';
import github from '../../images/gitWhite.png';
import {Button} from '../ButtonElement';
import bildeAvMeg from '../../images/bildeAvMeg.png';
import TypeWriter from 'typewriter-effect';
function Hero() {
  const[hover, setHover] = useState(false);

  var tekst = "Hello world, I'm Ahmet, a 2000´s child and like many born of the generation, my relationship with computers started the day I was born. In this website I am going to take you through about my self, skills and projects. Take a seat and..."

  const onHover = () =>{
    setHover(!hover);
  }
  return (
    <HeroContainer>
        <HeroBg className='HeroBg'>
            <VideoBg className='VideoBg' autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <div className='heroSocials'>
        <a href={"https://www.linkedin.com/in/ahmet-tugsuz-7b6240210/"}>
          <img src={linkedIn} className="linkedinV2"/>
        </a>
        <a href='https://github.com/ahmetugsuz'>
          <img src={github} className="githubV2"/>
        </a>
        </div>
        <div className='introduksjon'>
          <div className='introduksjonTekst'>
            <TypeWriter
            options={{
              autoStart: true,
              loop: false,
              delay: 50,
            }}
            onInit={(typewriter) => {
              typewriter.typeString(tekst)
                .start();
            }} />
          </div>
        </div>
        <HeroContent>
            <TextBox className='heroText HeroBg'>
              <HeroH1 className='tcp '>Welcome To My Website</HeroH1> 
              <HeroP className='topline '>A Full Stack Engineer</HeroP>
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
