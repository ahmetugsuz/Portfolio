import React, {useState, useEffect} from 'react';
import {AboutContainer, AboutWrapper, Column1,
TextWrapper, TopLine, Heading, Subtitle, AboutRow, Column2, ImgWrap, Img, 
Column3, Column4, Experience, Img2Wrap, Img2, TopLineGoals, ImgLanguages, HeadingExperience}
from './AboutElements';
import TypeWriter from 'typewriter-effect';
import "./AboutStyling.css";
import {animateScroll as scroll} from 'react-scroll';

function AboutSection({lightBg, id, topLine, lightText, darkText, headline, description,
img, alt, img2, imgLanguages, headline2, headline3}) {

  return (
    <AboutContainer lightBg={lightBg} id={id} >
      <AboutWrapper>
        <AboutRow>
            <Column1>
            <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>
                <TypeWriter 
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) =>{
                  typewriter.typeString(headline).pauseFor(10000).deleteAll().pauseFor(1000).typeString(headline2)
                  .pauseFor(8000).deleteAll().pauseFor(1000).typeString(headline3).pauseFor(8000).deleteAll().pauseFor(1000)
                  .start();
                }}/>
                </Heading>
            </TextWrapper>
            </Column1>
            <div className='Column2'>
              <div className='ImgWrap'>
                <img src={img} className="Img" alt={"mitt-bilde"} />
              </div>
            <div className='column3'>
              <div className='typewriter'>
              <TypeWriter
              options={{
                loop: false,
              }}
              onInit={(typewriter2)  => { 
                typewriter2.pauseFor(2500).typeString(description).pauseFor(2000).
                typeString(" i'm Ahmet, 21 years old software engineer.").pauseFor(500).
                typeString(" Currently living in Norway, with the oppurtinity of working remotly. I am currently working on my way to finish computer science degree in University of Oslo. My passion to programming.").pauseFor(500).
                typeString("Within all these years with programming, I learned a lot of good and dumb things, but the best thing I've learned is the oppurtunity to be ambitious, and that there is still no limits of how far you can go, at the end of the day there is still code and your creativity in your mind.").
                start();
              }}/>
              </div>
            </div>
            </div>
            <Column4>
              <Experience>
                  <HeadingExperience>Languages and tools that I speak</HeadingExperience>
                  <ImgLanguages src={imgLanguages} alt={"Languages"}/>
              </Experience>
            </Column4>
            <Img2Wrap>
              <TopLineGoals>Goals & achievements</TopLineGoals>
              <Img2 src={img2} alt={"goals"}/>
            </Img2Wrap>
        </AboutRow>
      </AboutWrapper>
    </AboutContainer>
  )
}


export default AboutSection;
