import React, {useState} from 'react'
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
import { motion } from 'framer-motion';
import { Bounce } from 'react-toastify';

function Knowledge() {
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
    open: {x: -250, y: 300, scale: 1.2, opacity: 1 },
    closed: {x: 0, y: 350, scale: 0.5, opacity: 0 }
  }

  const variantsMiddleImageLeft = {
    open: {x: -200, y: -200, scale: 1.2, opacity: 1 },
    closed: {x: '-100vw', y: -200, scale: 0.5, opacity: 0 }
  }

  const variantsRightText = {
    open: {x: -400, y: -550, scale: 1.4, opacity: 1 },
    closed: {x: 0, y: -550, scale: 0, opacity: 0 }
  }

  const variantsRightImageLeft = {
    open: {x: -430, y: 100, scale: 1, opacity: 1 },
    closed: {x: '-100vw', y: 100, scale: 0.5, opacity: 0 }
  }
  const variantsRightImageRight = {
    open: {x: -450, y: -0, scale: 1, opacity: 1 },
    closed: {x: '-00vw', y: -0, scale: 0.5, opacity: 0 }
  }

  const variantsRightTextRight = {
    open: {x: 300, y: -300, scale: 1.4, opacity: 1 },
    closed: {x: 0, y: -300, scale: 0, opacity: 0 }
  }


  const [isOpen, setIsOpen] = useState(false)
  const [isOpenMiddle, setIsOpenMiddle] = useState(false)
  const [isOpenRight, setIsOpenRight] = useState(false)

  return (
    <div className='KnowledgeContainer' id={'skills'}>
      <div className='upperContainer'>
        <h1 className='toplineLanguages'>Languages I speak</h1>

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
             variants={variantsMiddleLeft} className='middleInfoTekst'>With the fundemental understanding of logic in back-end development, I am now capable of jumping into several languages without any problem.  </motion.p>
            <motion.p transition={{duration: 0.2, type: "tween"}} animate={isOpenMiddle ? "open" : "closed"}
             variants={variantsMiddleRight} className='middleInfoTekst'> With 5 + years of experience on backend side, I've been in several projects. 
              One them was built on C where multiple devices could communicate with each other on a UDP client(s)-server connection,
              and i've also created an algorithm built on Java to find the path in a maze from point A to B visualized on GUI. </motion.p>
            <motion.img transition={{duration: 0.2, type: "tween"}}
             animate={isOpenMiddle ? "open" : "closed"} variants={variantsMiddleImageRight} className='venstreBilde' src={middleRightImage} />
            <motion.img transition={{duration: 0.2, type: "tween"}}
             animate={isOpenMiddle ? "open" : "closed"} variants={variantsMiddleImageLeft} className='venstreBilde2' src={middleLeftImage} />
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.2 }}>
            <motion.img className='languageBilde' src={tools}
             onHoverStart={() => setIsOpenRight(isOpenRight => !isOpenRight)} onHoverEnd={() => setIsOpenRight(isOpenRight => !isOpenRight)}/>
            <motion.p transition={{duration: 0.2, type: "tween"}} animate={isOpenRight ? "open" : "closed"} variants={variantsRightText} className='venstreInfoTekst'>I love working on multiple platforms, trying out new software, application to solve complex mathematical equations, analyze data, graph the data, interact with multiple tools and platforms, and make my own testing such as JUnit testing to devolop a robust program.  </motion.p>
            <motion.img transition={{duration: 0.2, type: "tween"}}
             animate={isOpenRight ? "open" : "closed"} variants={variantsRightImageRight} className='venstreBilde' src={RightImageLeft}/>
            <motion.img transition={{duration: 0.2, type: "tween"}} 
            animate={isOpenRight ? "open" : "closed"} variants={variantsRightImageLeft} className='venstreBilde2' src={RightImageRight}/>
            <motion.p transition={{duration: 0.2, type: "tween"}}
             animate={isOpenRight ? "open" : "closed"} variants={variantsRightTextRight} className='venstreInfoTekstRight'>I've been working with these tools for many years, and ready to deploy every project in safe hands. Working up from the planning the idea, visualization of the project, time estimate of how long it will take, and program it. I am also open to communicate on many platforms.   </motion.p>
          </motion.div>
        </div>
      </div>
      <div className='goalsContainer'>
        <h1 className='toplineGoals'>Goals & Achivements</h1>
        <img className='goals' src={goals}></img>
      </div>
    </div>
  )
  console.log(isOpen);
}

export default Knowledge
