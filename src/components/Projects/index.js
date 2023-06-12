import './ProjectsElements.css';
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
import flaskIcon from '../../images/ProgImg/flaskIcon.png';
import numpyIcon from '../../images/ProgImg/numpyImg.png';
import numbaIcon from '../../images/ProgImg/numbaImg.png';
import pandasIcon from '../../images/ProgImg/pandasImg.png';
import pypiIcon from '../../images/ProgImg/pypiImg.png';


import { useHistory } from "react-router-dom";
function Projects() {
    const history = useHistory();
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
        window.open("https://algobattle.herokuapp.com", '_blank')
    };

    return (
        <div className="projectsContainer" id="projects">

            <div className='topLineProjectContainer'>
                <p className='myProjectsTopLine'>Projects</p>
                <div className='landscapeContainer'><p><div className='rettStrekAbout'></div> My Workspace <div className='rettStrekAbout'></div></p></div>
                <div className='projectsInfo'> <p className='workshopText'>Welcome to my workspace! Here, you'll discover a showcase of my personal projects, as well as collaborative projects I've worked on with others.
                </p></div>
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
                        <h3 className='headlineOsloAppInfo'>Oslo Tourist App</h3>
                        <p className='infoOmOsloAppenText'>A project developed by a team of 6 people. The App gives the clients an overview of some of the main activities in Oslo.
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
                            <h3 className='headlineOsloAppInfo'>AlgoBattle</h3>
                            <p className='infoOmOsloAppenText'>A game designed to teach algorithms in a fun and interactive way. Join us in the thrilling world of algorithms! 
                            Find the elusive green box amongst a sea of others before the algorithm beats you. 
                            Compete against other players, explore different algorithms, and have fun while learning valuable skills in the field. 
                            Track your progress, aim for the top spot on our leaderboard, and anticipate the enemies next moves by understanding their algorithmic mind, to stay ahead. Get ready for an exciting journey!
                            Click to play the game. </p>
                        </div>
                        <div className='rettStrekProjects'></div>
                        <div className='projectLanguages'>
                            <div className='languageBox'><img className='IconContainer' src={reactIcon}/>React</div>
                            <div className='languageBox'><img className='IconContainer' src={flaskIcon}/>Flask</div>
                            <div className='languageBox'><img className='IconContainer' src={pythonIcon}/>  Python</div>
                            <div className='languageBox'><img className='IconContainer middleIcon' src={mySQLIcon} /> MySQL</div>
                    </div>
                </div>

            </div>
            <div className="projectsBoxContainer BackendContainer">
                <div className="fullStackTextConatiner">
                    <p className='fullStackText'>Backend Development</p>
                    <div className='rettStrek strekUnderProjects'></div>
                </div>

                <div className="projectBox projectNBA" onClick={handleClickNBAGitHub}>
                    <div className='imageOfProject'>
                        <img src={nbaStatistics} className="bildeAvOsloApp" />
                    </div>
                    <div className='infoAboutProject infoAboutAnalyticsProject' >
                        <h3 className='headlineOsloAppInfo headlineNBAAppInfo'>Multi-Sport Analytics Program</h3>
                        <p className='infoOmOsloAppenText lead'>This is a data analysis program that allows you to analyze and compare the performance of top NBA players.
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
                <div className="projectBox projectFilterImage" onClick={handleClickFilterImageGitHub}>
                    <div className='imageOfProject'>
                        <img src={ImageFilteringProgram} className="bildeAvOsloApp ImageFilteringImg" />
                    </div>
                    <div className='infoAboutProject infoAboutFilterProject' >
                        <h3 className='headlineOsloAppInfo headlineFilterAppInfo'>Image Filtering Package</h3>
                        <p className='infoOmOsloAppenText'>This Python package allows users to transform an image by applying a sepia for aged, antique appearance or gray, to give it a black and white effect. 
                         The intensity of the desired effect can be adjusted, and the program offers the ability to scale the image. 
                         The program implements the filter using customizable options, providing users with control over the final result. Additionally, users can compare the runtime of the program using three implementation options: Numpy, Numba, and Pure Python.
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
            </div>
        </div>
        
    )
}


export default Projects;