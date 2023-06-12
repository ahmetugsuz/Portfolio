import React from 'react'
import './AboutElements.css';
import './Data';
import { Image } from './AboutElements';
import bilde from '../../images/mitt-bilde.png';
import languages from '../../images/languages.png'; 
import goals from '../../images/goals2.png'; 
import TypeWriter from 'typewriter-effect';
import Soknad from './Søknad.pdf';
import CV from './CV.pdf';

function About({ headline, headline2, headline3, id }) {
  return (
    <div className='projectsContainer' id={id}>
   
      <div className="textBox">
      <p className='topline'> AHMET TUGSUZ </p>
      <h1 className='heading'>
        <TypeWriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter.typeString('Full Stack Devoloper').pauseFor(10000).deleteAll().pauseFor(1000).typeString('Software Engineer')
              .pauseFor(8000).deleteAll().pauseFor(1000).typeString('Software Architect').pauseFor(8000).deleteAll().pauseFor(1000)
              .start();
          }} />
      </h1>
      
      <div className='descriptionContainer'>
        <p className='description'>21 year old Software Engineer located in Norway. 
          In terms of how i approach a coding objective, i would describe myself as a well-organised problem solver, with an eye for detail, patterns and aesthetics.
        </p>
        <p className='description'>
          Im a <a className='linkUniversity' href="https://www.google.com/search?q=university+of+oslo&source=hp&ei=oVL1YuP2K-i_xc8PgoyMyA8&iflsig=AJiK0e8AAAAAYvVgsb-ivcgsB0THuWI79XYXqTDFNqmM&ved=0ahUKEwijy_Cgvb_5AhXoX_EDHQIGA_kQ4dUDCAY&uact=5&oq=university+of+oslo&gs_lcp=Cgdnd3Mtd2l6EAMyBQguEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyCwguEIAEEMcBEK8BMgUIABCABDIFCAAQgAQyBQgAEIAEOhEILhCABBCxAxCDARDHARDRAzoLCAAQgAQQsQMQgwE6CwguEIAEELEDENQCOggIABCABBCxAzoICC4QgAQQsQM6CwguEIAEELEDEIMBOggILhCABBDUAjoICAAQsQMQgwE6DgguEIAEELEDEMcBENEDOg4ILhCABBCxAxDHARCvAToRCC4QgAQQsQMQgwEQxwEQrwE6CAguELEDEIMBOgsILhCABBDHARDRA1AAWOMYYIEbaABwAHgAgAFMiAH-CJIBAjE4mAEAoAEB&sclient=gws-wiz">
            University of Oslo</a> graduate, and programming is my biggest passion. 
          I have worked on various real time projects with teams in relation to my studies, and i look forward to working on more ambitious team projects in the future. 
        </p>
      </div>
          <div className='bildeHolder'>
            <img src={bilde} className="b"></img>
          </div>
          <a href={CV} target="_blank" rel="noopener noreferrer">
            <button className='button'>CV</button>
          </a>
          <a href={CV} target="_blank" rel="noopener noreferrer">
            <button className='skillsButton'>Skills</button>
          </a>

      </div>
      


    </div>


  )
}

export default About
