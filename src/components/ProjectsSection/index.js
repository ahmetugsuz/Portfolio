import React from 'react'
import './ProjectsElements.css';
import './Data';
import { Image } from './ProjectsElemts';
import bilde from '../../images/mitt-bilde.png';
import TypeWriter from 'typewriter-effect';
import { AboutWrapper } from '../AboutSection/AboutElements';

function Projects({headline, headline2, headline3}) {
  return (
    <div className='projectsContainer'>
      <div className='AboutWrapper'>
      <div className='Column2'>
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
      </div>
      <div className='Column1'>
        <img src={bilde} alt="mitt-bilde" className='mittBilde' />
      </div>
    </div>
    </div>


  )
}

export default Projects
