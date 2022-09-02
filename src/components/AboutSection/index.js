import React from 'react'
import './AboutElements.css';
import './Data';
import { Image } from './AboutElements';
import bilde from '../../images/mitt-bilde.png';
import languages from '../../images/languages.png'; 
import goals from '../../images/goals2.png'; 
import TypeWriter from 'typewriter-effect';
import { AboutWrapper } from '../AboutSection2/AboutElements';
import Soknad from './Søknad.pdf';

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
        <p className='hello'>"HELLO WORLD"</p>
        <p className='description'>I am Ahmet, 21 years old Software Engineer located in Norway. 
          Well-organised person, problem solver, independet employee with a high attention to detail and pattern.
        </p>
        <p className='description'>
          As a <a className='linkUniversity' href="https://www.google.com/search?q=university+of+oslo&source=hp&ei=oVL1YuP2K-i_xc8PgoyMyA8&iflsig=AJiK0e8AAAAAYvVgsb-ivcgsB0THuWI79XYXqTDFNqmM&ved=0ahUKEwijy_Cgvb_5AhXoX_EDHQIGA_kQ4dUDCAY&uact=5&oq=university+of+oslo&gs_lcp=Cgdnd3Mtd2l6EAMyBQguEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyCwguEIAEEMcBEK8BMgUIABCABDIFCAAQgAQyBQgAEIAEOhEILhCABBCxAxCDARDHARDRAzoLCAAQgAQQsQMQgwE6CwguEIAEELEDENQCOggIABCABBCxAzoICC4QgAQQsQM6CwguEIAEELEDEIMBOggILhCABBDUAjoICAAQsQMQgwE6DgguEIAEELEDEMcBENEDOg4ILhCABBCxAxDHARCvAToRCC4QgAQQsQMQgwEQxwEQrwE6CAguELEDEIMBOgsILhCABBDHARDRA1AAWOMYYIEbaABwAHgAgAFMiAH-CJIBAjE4mAEAoAEB&sclient=gws-wiz">University of Oslo</a> graduate I am a huge passionated programmer.
          With experience of real time projects with team, I'm now looking forward to 
          get into new team-projects with positive people and ambitious projects.
        </p>
      </div>
      <div className='buttonContainer'>
          <img src={bilde} className="b"></img>
          <a href={Soknad} target="_blank" rel="noopener noreferrer">
            <button className='button'>Søknad</button>
          </a>
          <button className='button'>CV</button>
      </div>
      </div>
      


    </div>


  )
}

export default About
