import React, {useState} from 'react';
import './Hero.css';
import {HeroContainer, HeroBg, ImageBg, HeroContent, 
HeroH1, HeroP, HeroBtnWrapper, ArrowDown, TextBox} from './HeroElements';
import BackgroundImage from '../../images/Bg5.jpg';
import linkedIn from '../../images/linkedInBlackWhite.webp';
import github from '../../images/gitWhite.png';
import {Button} from '../ButtonElement';
import bildeAvMeg from '../../images/bildeAvMeg.png';
import hand from '../../images/Hand.png';
import TypeWriter from 'typewriter-effect';
function Hero() {
  const[hover, setHover] = useState(false);

  const tekst = "Hi, Thanks so much for stopping by!\n My name is Ahmet, and through this website you´ll get to know all about me and my areas of expertise, in the field of computer science. Happy scrolling!"

  const onHover = () =>{
    setHover(!hover);
  }
  return (
    <HeroContainer>
        <HeroBg className='HeroBg'>
            <img className='ImageBg' resizeMode="cover" src={BackgroundImage} type='image/jpeg' id="image-background"/>
        </HeroBg>
        <div className='heroSocials'>
          <a href={"https://www.linkedin.com/in/ahmet-tugsuz-7b6240210/"} target="_blank">
            <img src={linkedIn} className="linkedinV2"/>
          </a>
          <a href='https://github.com/ahmetugsuz' target="_blank">
            <img src={github} className="githubV2"/>
          </a>
        </div>
        <div className='helloWorld'>

        </div>
        <div className='introduksjon'>
          <div className='introduksjonTekst'>
            <TypeWriter
            options={{
              autoStart: true,
              loop: false,
              delay: 30,
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
