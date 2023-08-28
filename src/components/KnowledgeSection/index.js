import React, {useState, useRef} from 'react'
import './KnowledgeElements.css';
import frontend from '../../images/frontend.png';
import backend from '../../images/backend.png';
import tools from '../../images/tools.png';
import goals from '../../images/goals3.png';
import venstreBilde from '../../images/venstreBilde.png';
import venstreBilde2 from '../../images/venstreBilde2.png';
import middleLeftImage from '../../images/middleLeftImage.png';
import middleRightImage from '../../images/middleRightImage.png';
import RightImageRight from '../../images/RightImageRight.png';
import RightImageLeft from '../../images/RightImageLeft.png';
import { motion, transform } from 'framer-motion';
import { Bounce } from 'react-toastify';
import ScrollAnimation from '../ScrollAnimation';

function Knowledge() {
  const experiencesSectionRef = useRef(null);
  const variants = {
    open: { opacity: 1, x: 0, y: 0, scale: 1.4, rotate: [10, 0]},
    closed: { opacity: 0, x: 300, y: 0, scale: 0 },
  }
  const variants2 = {
    open: { opacity: 1, x: 0, y: 0, scale: 1.4, rotate: 0},
    closed: { opacity: 0, x: -750, y: 0, scale: 0 },
  }

  const variantsRight ={
    open: { opacity: 1, x: 0, y: 0, scale: 1.2},
    closed: { opacity: 0, x: '100vw', y: 0, scale: 0}
  }
  const variantsLeft ={
    open: { opacity: 1, x: 0, y: 0, scale: 1.2},
    closed: { opacity: 0, x: '-100vw', y: 0, scale: 0}
  }

  const variantsMiddleLeft ={
    open: {x: -550, y: -200, scale: 1.4, opacity: 1 },
    closed: {x: 0, y: -200, scale: 0, opacity: 0 }
  }

  const variantsMiddleRight = {
    open: {x: 500, y: -500, scale: 1.4, opacity: 1 },
    closed: {x: 0, y: -500, scale: 0, opacity: 0 }
  }

  const variantsMiddleImageRight = {
    open: {x: -250, y: 350, scale: 1.2, opacity: 1 },
    closed: {x: 0, y: 350, scale: 0.5, opacity: 0 }
  }

  const variantsMiddleImageLeft = {
    open: {x: -200, y: -200, scale: 1.2, opacity: 1 },
    closed: {x: '-100vw', y: -200, scale: 0.5, opacity: 0 }
  }

  const variantsRightText = {
    open: {x: -400, y: -600, scale: 1.4, opacity: 1 },
    closed: {x: 0, y: -550, scale: 0, opacity: 0 }
  }

  const variantsRightImageLeft = {
    open: {x: -430, y: 100, scale: 1, opacity: 1 },
    closed: {x: '-100vw', y: 100, scale: 0.5, opacity: 0 }
  }
  const variantsRightImageRight = {
    open: {x: -380, y: -0, scale: 1, opacity: 1 },
    closed: {x: '-00vw', y: -0, scale: 0.5, opacity: 0 }
  }

  const variantsRightTextRight = {
    open: {x: 350, y: -400, scale: 1.4, opacity: 1 },
    closed: {x: 0, y: -300, scale: 0, opacity: 0 }
  }


  const [isOpen, setIsOpen] = useState(false)
  const [isOpenMiddle, setIsOpenMiddle] = useState(false)
  const [isOpenRight, setIsOpenRight] = useState(false)

  return (
    <div className='KnowledgeContainer' id={'skills'}>
      <div className='upperContainer'>

        <h1 className='toplineLanguages'>Proficiencies</h1>
        <div className='headlineContentProficiencies'><p className='proficienciesHeadline'><ScrollAnimation experiencesSectionRef={experiencesSectionRef} /> Language Skills <ScrollAnimation experiencesSectionRef={experiencesSectionRef} /></p></div>
        <div className='proficienciesSectionInfo'><p className='infotextAboutMe'>Dive into my realm of programming languages and tools. Explore the languages I've mastered and the tools that fuel my creations.</p></div>
        <div className='languages'>
          <div>
          <motion.div  whileHover={{scale: 1.2}} className="frontendContainer">
            <motion.p transition={{duration: 0.2, type: "tween"}} animate={isOpen ? "open" : "closed"} variants={variants} className='venstreInfoTekst'>I value simple content structure, clean design patterns, and thoughtful interactions.</motion.p>
            <motion.img className='languageBilde' src={frontend} 
            onHoverStart={() => setIsOpen(isOpen => !isOpen)} onHoverEnd={() => setIsOpen(isOpen => !isOpen)} />
            <motion.img transition={{duration: 0.2, type: "tween"}}
             animate={isOpen ? "open" : "closed"} variants={variantsRight} className='venstreBilde' src={venstreBilde}/>
            <motion.img transition={{duration: 0.2, type: "tween"}} 
            animate={isOpen ? "open" : "closed"} variants={variantsLeft} className='venstreBilde2' src={venstreBilde2}/>
            <motion.p whileHover={{ scale: 0, opacity: 0}} transition={{duration: 0.2, type: "tween"}}
             animate={isOpen ? "open" : "closed"} variants={variants2} className='venstreInfoTekst2'>I like to code things from scratch, and enjoy bringing ideas to life in the browser and mobile.</motion.p>
          </motion.div>
          </div>
      
          <motion.div  whileHover={{ scale: 1.2 }} className="backendContainer">
            <motion.img className='languageBilde' src={backend} 
            onHoverStart={() => setIsOpenMiddle(OpenMiddle => !OpenMiddle)} onHoverEnd={() => setIsOpenMiddle(OpenMiddle => !OpenMiddle)}/>
            <motion.p transition={{duration: 0.2, type: "tween"}} animate={isOpenMiddle ? "open" : "closed"}
             variants={variantsMiddleLeft} className='middleInfoTekst middleTekst2'>With the fundemental understanding of logic in back-end development, I am now capable of jumping into several languages without any problem.  </motion.p>
            <motion.p transition={{duration: 0.2, type: "tween"}} animate={isOpenMiddle ? "open" : "closed"}
             variants={variantsMiddleRight} className='middleInfoTekst'> With 5 years of backend experience, I've contributed to diverse projects.
              These include building a UDP Client-Server connection in C, a Python web scraper to gather NBA player data from Wikipedia for statistics, crafting a Java maze-solving algorithm, and more.
               </motion.p>
            <motion.img transition={{duration: 0.2, type: "tween"}}
             animate={isOpenMiddle ? "open" : "closed"} variants={variantsMiddleImageRight} className='venstreBilde middleBilde' src={middleRightImage} />
            <motion.img transition={{duration: 0.2, type: "tween"}}
             animate={isOpenMiddle ? "open" : "closed"} variants={variantsMiddleImageLeft} className='venstreBilde2 middleBilde2' src={middleLeftImage} />
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.2}} className="toolsContainer">
            <motion.img className='languageBilde' src={tools}
             onHoverStart={() => setIsOpenRight(isOpenRight => !isOpenRight)} onHoverEnd={() => setIsOpenRight(isOpenRight => !isOpenRight)}/>
            <motion.p transition={{duration: 0.2, type: "tween"}} animate={isOpenRight ? "open" : "closed"} variants={variantsRightText} className='venstreInfoTekst hoyreInfoTekst'>I love working on multiple platforms,
             trying out new software, as well as applications to solve complex mathematical equations. Furthermore, I analyze data, graph the data, and interact on multiple tools and platforms. 
             I also make my own testing, such as Junit, in order to develop robust programs. </motion.p>
            <motion.img transition={{duration: 0.2, type: "tween"}}
             animate={isOpenRight ? "open" : "closed"} variants={variantsRightImageRight} className='venstreBilde hoyreBilde' src={RightImageLeft}/>
            <motion.img transition={{duration: 0.2, type: "tween"}} 
            animate={isOpenRight ? "open" : "closed"} variants={variantsRightImageLeft} className='venstreBilde2 hoyreBilde2' src={RightImageRight}/>
            <motion.p transition={{duration: 0.2, type: "tween"}}
             animate={isOpenRight ? "open" : "closed"} variants={variantsRightTextRight} className='venstreInfoTekstRight hoyreInfoTekst2'>
             Every part of the process, from planning the idea, visualizing the end-result of the project, to the programming itself, i try to approach with precision.  </motion.p>
          </motion.div>
        </div>
      </div>
      <div className='goalsContainer'>
        <div className='headlineContentProficiencies'><p className='proficienciesHeadline'><ScrollAnimation experiencesSectionRef={experiencesSectionRef} /> Experiences <ScrollAnimation experiencesSectionRef={experiencesSectionRef} /></p></div>
        <div className='proficienciesSectionInfo'><p className='infotextAboutMe'>Here you will enter my world of experiences, goals, and achievements, where each chapter adds depth to my story. </p></div>
          <div className='experiencesContainer'>
            <a href='https://www.fotball.no/dommer/' target='_blank'><div className='experienceBox'  ><p className='experienceText'>Norges Fotballforbund (NFF) | Football Referee | 3 Years (2018 - 2021)</p></div></a>
            <a href='https://www.instagram.com/royalwedding_events/' target='_blank'><div className='experienceBox'><p className='experienceText'>Royal Wedding & Events | Wedding Coordinator and Event Assistant | 5 Years (2015 - 2020)</p></div></a>
            <a href='https://malerhjem.no' target='_blank'><div className='experienceBox'><p className='experienceText'>Malerhjem | Web designer and Operations Manager | Over 1 Year (2022 - 2023) </p></div></a>
            <a href='https://www.technipfmc.com' target='_blank'><div className='experienceBox'><p className='experienceText'>TechnipFMC | Project Engineer Software | (2023 - Ongoing) </p></div></a>
          </div>
        <img className='goals' src={goals}></img>
      </div>
    </div>
  )
  console.log(isOpen);
}

export default Knowledge
