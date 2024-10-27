import './ProjectsElements.css';
import React, {useState, useRef, useEffect} from 'react';
import bildeAvOsloApp from '../../images/osloTuristAppProjectsIntro.png';
import nbaStatistics from '../../images/NBAStatistics.png';
import ImageFilteringProgram from '../../images/ImageFilteringImg.png';
import AlanImg from '../../images/AlgoBattleProjectImg2.png';
import KotlinIcon from '../../images/ProgImg/Kotlin_Icon.svg.png';
import jetpackComposeIcon from '../../images/ProgImg/jetpackCompose.png';
import androidStudioIcon from '../../images/ProgImg/androidStudioImg.png';
import pythonIcon from '../../images/ProgImg/pythonImg.png';
import mySQLIcon from '../../images/ProgImg/mysql.png';
import reactIcon from '../../images/ProgImg/ReactImg.png';
import redisIcon from '../../images/ProgImg/redis.webp';
import flaskIcon from '../../images/ProgImg/flaskIcon.png';
import numpyIcon from '../../images/ProgImg/numpyImg.png';
import numbaIcon from '../../images/ProgImg/numbaImg.png';
import pandasIcon from '../../images/ProgImg/pandasImg.png';
import pandasIcon2 from '../../images/ProgImg/pandasIcon.png';
import pypiIcon from '../../images/ProgImg/pypiImg.png';
import dockerIcon from '../../images/ProgImg/docker.png';
import restIcon from '../../images/ProgImg/restapi.svg';
import apiRestIcon from '../../images/ProgImg/rest-api-icon.webp';
import busMoving from '../../videos/bus_driving.webm';
import busMoving2 from '../../videos/bus_driving.ogv';
import busMovingMov from '../../videos/driving_bus.mov';
import ScrollAnimationAbout from '../ScrollAnimationAbout';
import { ArrowRight, ArrowLeft } from '../ButtonElement';
import ReactPlayer from 'react-player';

import { useHistory } from "react-router-dom";
import { style } from '@motionone/dom';
import { hover } from '@testing-library/user-event/dist/hover';
function Projects() {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const history = useHistory();
    const experiencesSectionRef = useRef(null);
    const handleClick = () =>{
        history.push("/projectOslo")
        window.scrollTo(0, 0);
    };

    const handleClickNBAGitHub = () => {
        window.open("https://github.com/ahmetugsuz/WEB-Scraper", '_blank')
    };
    const handleClickFilterImageGitHub = () => {
        window.open("https://github.com/ahmetugsuz/Image-filtering", '_blank')
    };
    const handleAlgoBattleClick = () => {
        window.open("https://www.algobattle.fun", '_blank')
    };

    const handleClickHelsinkiBusTrackerGitHub = () => {
        window.open("https://github.com/ahmetugsuz/Helsinki_Bus_Tracker", '_blank')
    };

    const [scrollPosition, setScrollPosition] = useState(0);
    const [showThirdProject, setShowThirdProject] = useState(true);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [showScrollBtn, setShowScrollBtn] = useState(false);
    const [helsinkiIsHovered, setHelsinkiIsHovered] = useState(false);
    const [firstRefresh, setFirstRefresh] = useState(true);
    const [played, setPlayed] = useState(0);
    const [playedOnce, setPlayedOnce] = useState(false);
    const [initialLoad, setInitialLoad] = useState(true);
    
    const playerRef = useRef(null);
    const SCROLL_THRESHOLD = 100;
    const projectBoxRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
        };

        const handleScroll = () => {
            // Add your logic to determine when to set the state based on scroll position
            if (window.scrollY > 500) { // let the video start from 60% after scrolled a bit
              playerRef.current.seekTo(0.5, 'fraction');
            }
          };
        
          window.addEventListener('resize', handleResize);
          window.addEventListener('scroll', handleScroll);
        


        return () => {
          window.removeEventListener('resize', handleResize);
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    const handleArrowButtonClick = () => {
        const projectBoxElement = projectBoxRef.current;
        
        if (projectBoxElement) {
          const rect = projectBoxElement.getBoundingClientRect();
      
          // Scroll the projectBox based on the rect.x value if needed
          setScrollPosition((prevScrollPosition) => prevScrollPosition - rect.x);
          
        }
                  // Toggle the showThirdProject state if needed
        setShowScrollBtn((prevshowScrollBtn) => !prevshowScrollBtn);
        setShowThirdProject((prevShowThirdProject) => !prevShowThirdProject);
              
      };
    

    const shouldShowButton = screenWidth > SCROLL_THRESHOLD;

    return (
        <div className="projectsContainer" id="projects" >
            <div className='topLineProjectContainer'>
                <p className="topLinePurple">Projects</p>
                <h1><ScrollAnimationAbout experiencesSectionRef={experiencesSectionRef} /> My Workspace <ScrollAnimationAbout experiencesSectionRef={experiencesSectionRef} /></h1>
                <div className='projectsInfo'> 
                    <h3>Welcome to my workspace! Here, you'll discover a showcase of my personal projects, as well as collaborative projects I've worked on with others.</h3>
                </div>
            </div>
            <div className='AllProjectsContainer'>
            <div className="projectsBoxContainer">
                <div className="fullStackTextConatiner">
                    <p className='fullStackText'>Full Stack Development</p>
                    <div className='rettStrek strekUnderProjects'></div>
                </div>
                <div className="projectBox" onClick={handleClick}>
                    <div className='imageOfProject'>
                        <img src={bildeAvOsloApp} className="bildeAvOsloApp" />
                    </div>
                    <div className='infoAboutProject' >
                        <p className='headlineProjectInfo'>Oslo Tourist App</p>
                        <p className='descriptionFirst'>A project developed by a team of 6 people. The App gives the clients an overview of some of the main activities in Oslo.
                            There are three different ways to find the points of interest.
                            The user can choose between browsing the website through the various categories, navigating around the map, or looking them up with the search function. Click to read more about it.</p>
                    </div>
                    <div className='rettStrekProjects'></div>
                    <div className='projectLanguages'>
                        <div className='languageBox'><img className='IconContainer' src={KotlinIcon} /> Kotlin</div>
                        <div className='languageBox'><img className='IconContainer biggerIcon' src={jetpackComposeIcon}/> Jet. Compose</div>
                        <div className='languageBox'><img className='IconContainer biggerIcon' src={androidStudioIcon}/>Andr. Studio</div>
                    </div>
                </div>

                <div className="projectBox projectAlgo" onClick={handleAlgoBattleClick}>
                    <div className='imageOfProject'>
                            <img src={AlanImg} className="bildeAvOsloApp" />
                        </div>
                        <div className='infoAboutProject' >
                            <p className='headlineProjectInfo'>AlgoBattle</p>
                            <p className='descriptionFirst'>A game designed to learn searching algorithms in a fun and interactive way.
                            Find the elusive green box amongst a sea of others before the algorithm beats you. 
                            Track your progress, aim for the top spot on the leaderboard, and anticipate the enemies next moves by understanding their algorithmic mind. Join us in the thrilling world of algorithms! 
                            Click to play the game. </p>
                        </div>
                        <div className='rettStrekProjects'></div>
                        <div className='projectLanguages'>
                            <div className='languageBox'><img className='IconContainer' src={reactIcon}/>React</div>
                            <div className='languageBox'><img className='IconContainer' src={redisIcon}/>Redis</div>
                            <div className='languageBox'><img className='IconContainer' src={pythonIcon}/>  Python</div>
                            <div className='languageBox'><img className='IconContainer middleIcon' src={mySQLIcon} />MySQL</div>
                    </div>
                </div>

            </div>

            <div className="projectsBoxContainer" >
                <div className='BackendContainer'></div>
                <div className="fullStackTextConatiner">
                    <p className='fullStackText'>Backend Development</p>
                    <div className='rettStrek strekUnderProjects'></div>
                </div>
                {shouldShowButton ? (

                    <div className='backProjects'>
                        <div className="projectBox projectNBA" onClick={handleClickNBAGitHub}  ref={projectBoxRef}>
                                <div className='imageOfProject'>
                                    <img src={nbaStatistics} className="bildeAvOsloApp" />
                                </div>
                                <div className='infoAboutProject infoAboutAnalyticsProject' >
                                    <p className='headlineProjectInfo'>Multi-Sport Analytics Program</p>
                                    <p className='descriptionFirst'>This web scraper app analyzes and compares top NBA players, 
                                    extracting data from Wikipedia to identify the top three players based on points, assists, and rebounds per team. 
                                    Compare performance within teams and across the league through user-friendly plots. Check it out on GitHub.</p>
                                </div>
                                <div className='rettStrekProjects'></div>
                                <div className='projectLanguages'>
                                    <div className='languageBox'><img className='IconContainer' src={pythonIcon}/>Python</div>
                                    <div className='languageBox'><img className='IconContainer biggerIcon' src={pypiIcon}/>BeautifulSoup</div>
                                    <div className='languageBox'><img className='IconContainer middleIcon' src={pandasIcon2}/>Pandas</div>
                                </div>
                        </div>

                        
                        <div
                        className={`projectBox projectHelsinki ${helsinkiIsHovered ? 'hovered' : ''}`}
                        onClick={handleClickHelsinkiBusTrackerGitHub}
                        onMouseEnter={() => setHelsinkiIsHovered(true)}
                        onMouseLeave={() => {
                            setHelsinkiIsHovered(false); 
                            
                        }}

                        >
                        <div className='imageOfProject helsinkiBusVideo'>
                                    {isSafari ? (
                                    <ReactPlayer
                                        ref={playerRef}
                                        url={busMovingMov}
                                        loop
                                        muted
                                        className="busVideo"
                                    />
                                    ) : (
                                    <ReactPlayer
                                        ref={playerRef}
                                        url={busMoving}
                                        playing={helsinkiIsHovered}
                                        loop
                                        muted
                                        className="busVideo"
                                    />
                                    )}
                                </div>  
                                <div className='infoAboutProject' >
                                    <p className='headlineProjectInfo headlineHelsinki'>Helsinki Bus Tracker</p>
                                    <p className='descriptionFirst'>
                                    Explore Helsinki Bus Tracker: leveraging real-time telemetry from mqtt.hsl.fi, 
                                    it provides a user-friendly API for instant access to comprehensive bus data in the region. 
                                    Beyond real-time updates, it prioritizes memory optimization with a cleanup program. 
                                    Perfect for transit enthusiasts, developers, and commuters seeking a seamless travel experience.
                                    </p>
                                </div>
                                <div className='rettStrekProjects'></div>
                                <div className='projectLanguages'>
                                    <div className='languageBox'><img className='IconContainer' src={pythonIcon}/>Python</div>
                                    <div className='languageBox'><img className='IconContainer biggerIcon' src={dockerIcon} />Docker</div>
                                    <div className='languageBox'><img className='IconContainer biggerIcon' src={apiRestIcon} /> REST-API</div>
                                    <div className='languageBox'><img className='IconContainer middleIcon' src={mySQLIcon} /> MySQL</div>
                                </div>
                        </div> 


                        {showThirdProject && (
                            <div className="projectBox projectFilterImage" onClick={handleClickFilterImageGitHub}>
                                <div className='imageOfProject'>
                                    <img src={ImageFilteringProgram} className="bildeAvOsloApp ImageFilteringImg" />
                                </div>  
                                <div className='infoAboutProject infoAboutFilterProject' >
                                    <p className='headlineProjectInfo headlineFilterAppInfo'>Image Filtering Package</p>
                                    <p className='descriptionFirst'>Explore this Python package for image transformation, offering sepia and gray filters for aged or black-and-white effects. 
                                    Customize options like intensity and scale, giving users control over the final result. Compare runtime using Numpy, Numba, and Pure Python implementations. 
                                    Check it out on GitHub for more details.</p>
                                </div>
                                <div className='rettStrekProjects'></div>
                                <div className='projectLanguages'>
                                    <div className='languageBox'><img className='IconContainer' src={pythonIcon}/>Python</div>
                                    <div className='languageBox'><img className='IconContainer' src={numpyIcon}/>Numpy</div>
                                    <div className='languageBox'><img className='IconContainer' src={numbaIcon}/>Numba</div>
                                </div>
                            </div>                            
                        )}
                    </div>

                    ) : (
                        <div className='BackendContainer' >

                            <div className="projectBox projectNBA" onClick={handleClickNBAGitHub}>
                                <div className='imageOfProject'>
                                    <img src={nbaStatistics} className="bildeAvOsloApp" />
                                </div>
                                <div className='infoAboutProject infoAboutAnalyticsProject' >
                                    <p className='headlineProjectInfo'>Multi-Sport Analytics Program</p>
                                    <p className='descriptionFirst'>This is a data analysis program that allows you to analyze and compare the performance of top NBA players.
                                    It reads player data from Wikipedia and selects the top three players based on their points, assists, and rebounds from each team in the regular season. 
                                    Allowing for comparison of performance within each team and across the league. The program provides a user-friendly plot for visualizing and analyzing player performance.
                                    Click to see it on the GitHub page.</p>
                                </div>
                                <div className='rettStrekProjects'></div>
                                <div className='projectLanguages'>
                                    <div className='languageBox'><img className='IconContainer' src={pythonIcon}/>Python</div>
                                    <div className='languageBox'><img className='IconContainer middleIcon' src={pypiIcon}/>BeautifulSoup</div>
                                    <div className='languageBox'><img className='IconContainer' src={pandasIcon}/>Pandas</div>
                                </div>
                            </div>


                            <div className="projectBox projectFilterImage" onClick={handleClickFilterImageGitHub} >
                                <div className='imageOfProject'>
                                    <img src={ImageFilteringProgram} className="bildeAvOsloApp ImageFilteringImg" />
                                </div>  
                                <div className='infoAboutProject infoAboutFilterProject' >
                                    <p className='headlineProjectInfo headlineFilterAppInfo'>Image Filtering Package</p>
                                    <p className='descriptionFirst'>This Python package allows users to transform an image by applying a sepia for aged, antique appearance or gray, to give it a black and white effect. 
                                    The program implements the filter using customizable options, like the intensity, or the scale of the image, providing users with control over the final result. Additionally, users can compare the runtime of the program using three implementation options: Numpy, Numba, and Pure Python.
                                    Click to see more of it on the GitHub page.</p>
                                </div>
                                <div className='rettStrekProjects'></div>
                                <div className='projectLanguages'>
                                    <div className='languageBox'><img className='IconContainer' src={pythonIcon}/>Python</div>
                                    <div className='languageBox'><img className='IconContainer' src={numpyIcon}/>Numpy</div>
                                    <div className='languageBox'><img className='IconContainer' src={numbaIcon}/>Numba</div>
                                </div>
                            </div>

                                   

                            <div className="projectBox" onClick={handleClickHelsinkiBusTrackerGitHub} >
                                <div className='imageOfProject'>
                                    <img src={bildeAvOsloApp} className="bildeAvOsloApp ImageFilteringImg" />
                                </div>  
                                <div className='infoAboutProject infoAboutFilterProject' >
                                    <p className='headlineProjectInfo headlineFilterAppInfo'>Image Filtering Package</p>
                                    <p className='descriptionFirst'>This Python package allows users to transform an image by applying a sepia for aged, antique appearance or gray, to give it a black and white effect. 
                                    The program implements the filter using customizable options, like the intensity, or the scale of the image, providing users with control over the final result. Additionally, users can compare the runtime of the program using three implementation options: Numpy, Numba, and Pure Python.
                                    Click to see more of it on the GitHub page.</p>
                                </div>
                                <div className='rettStrekProjects'></div>
                                    <div className='projectLanguages'>
                                        <div className='languageBox'><img className='IconContainer' src={pythonIcon}/>Python</div>
                                        <div className='languageBox'><img className='IconContainer' src={numpyIcon}/>Numpy</div>
                                        <div className='languageBox'><img className='IconContainer' src={numbaIcon}/>Numba</div>
                                    </div>
                                </div>
                            </div>
                        
                        )}
                </div>
            </div>
        </div>
        
    )
}


export default Projects;