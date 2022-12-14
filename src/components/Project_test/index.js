import React from 'react'
import './ProjectsElement.css';
import { animate, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

import logo from '../../images/osloTouristAppLogo.png';
import intro from '../../images/OsloTouristApp/Introduction.png';
import intro2 from '../../images/OsloTouristApp/Introduction2.png';
import intro3 from '../../images/OsloTouristApp/Introduction3.png';
import intro4 from '../../images/OsloTouristApp/Introduction4.png';
import homePage from '../../images/OsloTouristApp/HomePage.png';
import mapImage from '../../images/OsloTouristApp/Map.png';
import favoriteImage from '../../images/OsloTouristApp/Favorite.png';
import searchImage from '../../images/OsloTouristApp/SearchOslo.png';
import clickedSearch from '../../images/OsloTouristApp/OsloSearchClick.png';
import osloResultSearch from '../../images/OsloTouristApp/OsloResultSearch.png';
import settingImg from '../../images/OsloTouristApp/Settings.png';
import darkModeImg from '../../images/OsloTouristApp/DarkMode.png';
import colorBlindImg from '../../images/OsloTouristApp/ColorBlind.png';

const useAnimationOnInView = () => {
    const animationDown = useAnimation();
    const animationRight = useAnimation();
    const animationUp = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.4, delay: 0
        
    });
    useEffect(() => {
        if (inView) {
            animationDown.start({
                y: 0,
                opacity: 1,
                transition: {
                    type: "keyframes", duration: 1.2
                }
            });

            animationRight.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: "keyframes", duration: 1.4
                }
            });

            animationUp.start({
                y: 0,
                opacity: 1,
                transition: {
                    type: "keyframes", duration: 1.2
                }
            });
        }
        if (!inView) {
            animationDown.start({
                y: '-80vh',
                opacity: 0,
                transition: {
                    type: "keyframes", duration: 1.2
                }
            });

            animationRight.start({
                x: '100vw',
                opacity: 0,
                zIndex: -3,
                transition: {
                    type: "keyframes", duration: 1.2
                }

            });

            animationUp.start({
                y: '100vh',
                opacity: 0,
                zIndex: -3,
                transition: {
                    type: "keyframes", duration: 1.2
                }

            });
        }

        console.log("use effect hook, inview =", inView);


    }, [inView, animationDown, animationRight, animationUp]);
    return { ref, animationDown, animationRight, animationUp };
}

function Project() {

    const { ref: bananaRef, animationDown: introAnimation } = useAnimationOnInView();
    const { ref: epleRef, animationDown, animationRight, animationUp } = useAnimationOnInView();
    const { ref: mapRef, animationDown: animationNed, animationRight: animationHoyre, animationUp: animationOpp } = useAnimationOnInView();
    const { ref: searchRef, animationDown: animationN, animationRight: animationH, animationUp: animationO } = useAnimationOnInView();
    const { ref: settingRef, animationDown: animationD, animationRight: animationR, animationUp: animationU } = useAnimationOnInView();





    return (
        /*
        <motion.div animate={{ y: 100, scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ type: "tween", duration: 1 }}
            drag whileDrag={{ scale: 1.3 }}
            
        > </motion.div>
        */
        <div className='projectsCont' id={'projects'} >
            <div className='rowObject leftside'>
                <div className='ColumnText no-gutters'>
                    <h2 className='toplineProject'>Oslo tourist App</h2>
                    <img src={logo} className="logo"/>
                    <p className='underline firstUnderline'>This project was developped by a team of 6 people. Some of us worked on design and planning, while others
                        worked on the backend devolopment of the project. I was among those that worked primarily on the devolopment, while also helping with planning and some of the design on the app.</p>

                    <p className='underline secondUnderline'>The team spent 4-5 months on this project from start to finish. We were dedicated, and communication was a key focus of ours throughout the whole process.</p>
                    <p className='underline firstUnderline'>
                        The application has been developed for Android devices with a minimum API level of 21. This covers over 98.6% of mobile phones with operating systems such as Android 5 or newer. The app cannot be used on iOS devices.
                        To make this possible, the code must be made available for "cross-platform development" through Kotlin Multiplatform mobile</p>

                    <p className='underline'>For the backend side, Kotlin, and Jetpack Compose for the frontend (UI).  </p>
                    <p className='underline'>Tools used: Android Studio, Github, Figma, Trello, Zoom and more</p>

                    <div className='appHomePage'>
                        <h1 className='appHomePageHeadline'>The Home Page</h1>
                        <p className='underline firstUnderline'>The App gives the clients an overview of some of the main activities in Oslo.
                            There are 5 different categories of activities that the application offers. These are places to eat, swimming halls and beaches, entertainment & culture, nightlife and nature. </p>

                        <p className='underline secondUnderline '>
                            There are three different ways to find the points of interest. The user can choose between browsing the website through the various categories,
                            navigating around the map, or looking them up with the search function. At the Home Page you can simply swipe right and left to se all the activities under different categories</p>

                        <p className='underline firstUnderline'>We also have a top bar to see the weather conditions througout the day. The data on this is retrieved with API call from Nowcast. Our logo is to the left, and our search button to the right.
                            The bottom bar is designed to be a navigational tool through Home, Map, Favorites and Settings. </p>
                    </div>

                    <div className='appHomePage'>
                        <h1 className='appHomePageHeadline mapAndFavoriteHeadline'>Map And Favorites</h1>
                        <p className='underline secondUnderline mapText'>
                            The purpose of the map in the application is to easily show the geographical positions of the recommended points of interest.
                            This should make it easy for the user to both navigate around the areas they are in and find a desired point of interest.
                            All the points of interest are spread over the entire city/map, which is represented in the form of symbols, and displayed by using Mapbox.</p>

                        <p className='underline firstUnderline'>When the user has found a point of interest, it can be added to "Favorites" by pressing the favorite button on the card.
                            It can then easily be found at any time in the list of favorites if you want to look further at other points of interest or visit it on a later occasion. </p>

                        <p className='underline secondUnderline'></p>
                    </div>
                    <div className='searchPage'>
                        <h1 className='appHomePageHeadline'>Search</h1>
                        <p className='underline secondUnderline '>The search function makes it easy to find specific points of interest in the application.
                            In the search field, the user enters what they are looking for.
                            When confirming the search, the user will be able to interact with the points of interest in the search results as on the homepage.</p>

                        <p className='underline firstUnderline'>The user can easily press the green button to search multiple POIs (points of interest) that are in the search field, 
                        or simply press the search results in the search field to take a closer look at them. 
                        If you want to do a new search, you can press the button that removes the search and prepare the search field.
                        The back/close button will end the search function and take the user back to the page they were last on.</p>

                        <p className='underline secondUnderline'>The search algorithm is based on searching through names of places or descriptions of them. 
                        When letters are entered, the algorithm searches through all points of interest with a low complexity and finds those that match.</p>
                    </div>
                    <div className='settingsPage'>
                        <h1 className='appHomePageHeadline'>Settings</h1>
                        <p className='underline secondUnderline '>The settings in the app allow users to decide the language, color blindness and dark/light appearance.
                         The two different appearance modes can easily be switched around done by pressing their switch button in settings.</p>

                        <p className='underline firstUnderline'>Dark mode for the application will give the background color a darker tone, 
                        making it more comfortable for the eyes to use in dark environments. 
                        The colorblind mode will provide a more friendly accent color for colorblind users.</p>

                        <p className='underline secondUnderline'>
                            
                        </p>
                    </div>
                </div>
            </div>


            <div className='ColumnImage no-gutters' ref={bananaRef}>
                <motion.div animate={introAnimation} className='rowObject rightside introSide'>
                    <img className='intro1 ' src={intro} />
                    <img className='intro2 ' src={intro2} />
                    <motion.img animate={introAnimation} className='intro3 ' src={intro4} />
                </motion.div>


                <div className='rowObject rightside homeImages' ref={epleRef} >
                    <motion.img animate={animationRight} className='homePageImage' src={homePage} />
                </div>
                <div className='rowObject rightside mapImages ' ref={mapRef} >
                    <motion.img animate={animationNed} className='mapImage' src={mapImage} />
                    <motion.img animate={animationOpp} className='favorite' src={favoriteImage} />
                </div>
                <div className='rowObject rightside  searchImage' ref={searchRef} >
                    <motion.img animate={animationH} className='severalSearch' src={osloResultSearch} />
                    <motion.img animate={animationN} className='clickedSearch' src={clickedSearch} />
                    <img className='sokeResultat' src={searchImage} />
                </div>
                <div className='rowObject rightside setting' ref={settingRef} >
                    <motion.img className='first settingImg' animate={animationU} src={settingImg} />
                    <motion.img className='second darkModeImg' animate={animationU} src={darkModeImg} />
                    <motion.img className='last colorBlindImg' animate={animationU} src={colorBlindImg} />
                </div>

            </div>



        </div>

    )
}

export default Project
