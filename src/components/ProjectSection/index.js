import React, { useState } from 'react'
import './ProjectElements.css'
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



function ProjectsTest() {

    const { ref: bananaRef, animationDown: introAnimation } = useAnimationOnInView();
    const { ref: epleRef, animationDown, animationRight, animationUp } = useAnimationOnInView();
    const { ref: mapRef, animationDown: animationNed, animationRight: animationHoyre, animationUp: animationOpp } = useAnimationOnInView();
    const { ref: searchRef, animationDown: animationN, animationRight: animationH, animationUp: animationO } = useAnimationOnInView();
    const { ref: settingRef, animationDown: animationD, animationRight: animationR, animationUp: animationU } = useAnimationOnInView();




    return (
        <div className='Projects_test_Container' id='projectOslo'>
            <div className='rowHolder'>
                <div className='topline_logo_container'>
                    <h2 className=''>Oslo tourist App</h2>
                    <img src={logo} className="logo" />
                </div>
                <div className='rowBoxes'>
                    <div className='columnBox'>
                        <p className='firstAppDescription'>
                            This project was developped by a team of 6 people. Some of us worked on design and planning, while others
                            worked on the backend devolopment of the project. I was among those that worked primarily on the devolopment, while also helping with planning and some of the design on the app.</p>
                        <p className='secondAppDescription'>The team spent 4-5 months on this project from start to finish.
                            We were dedicated, and communication was a key focus of ours throughout the whole process.</p>
                        <p className='thirdAppDescription'>
                            The application has been developed for Android devices with a minimum API level of 21. This covers over 98.6% of mobile phones with operating systems such as Android 5 or newer. The app cannot be used on iOS devices.
                            To make this possible, the code must be made available for "cross-platform development" through Kotlin Multiplatform mobile</p>
                    </div>
                    <div className='columnBox no-gutters' ref={bananaRef}>
                        <motion.div animate={introAnimation} className='welcome_images'>
                            <img className='intro1_image ' src={intro} />
                            <img className='intro2_image ' src={intro2} />
                            <motion.img animate={introAnimation} className='intro3_image ' src={intro4} />
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className='rowHolder appInfo'>
                <div className='rowBoxes jetpack_info'>
                    <div className='columnBox'>
                        <p className='firstAppDescription'>For the backend side, Kotlin, and Jetpack Compose for the frontend (UI).  </p>
                        <p className='firstAppDescription'>Tools used: Android Studio, Github, Figma, Trello, Zoom and more</p>
                    </div>
                    <div className='columnBox'> </div>
                </div>
            </div>
            <div className='rowHolder'>
                <div className='rowBoxes'>
                    <div className='columnBox'>
                        <h1 className='appHomePage_Headline'>The Home Page</h1>
                        <p className='firstAppDescription'>The App gives the clients an overview of some of the main activities in Oslo.
                            There are 5 different categories of activities that the application offers. These are places to eat, swimming halls and beaches, entertainment & culture, nightlife and nature. </p>
                        <p className='secondAppDescription'>
                            There are three different ways to find the points of interest. The user can choose between browsing the website through the various categories,
                            navigating around the map, or looking them up with the search function. At the Home Page you can simply swipe right and left to se all the activities under different categories</p>
                        <p className='thirdAppDescription'>We also have a top bar to see the weather conditions througout the day. The data on this is retrieved with API call from Nowcast. Our logo is to the left, and our search button to the right.
                            The bottom bar is designed to be a navigational tool through Home, Map, Favorites and Settings. </p>
                    </div>
                    <div className='columnBox no-gutters'>
                        <div className='homeImage_Container' ref={epleRef} >
                            <motion.img animate={animationRight} className='homeImage' src={homePage} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='rowHolder'>
                <div className='rowBoxes'>
                    <div className='columnBox'>
                        <h1 className='appSearch_Headline'>Search</h1>
                        <p className='secondAppDescription'>The search function makes it easy to find specific points of interest in the application.
                            In the search field, the user enters what they are looking for.
                            When confirming the search, the user will be able to interact with the points of interest in the search results as on the homepage.</p>

                        <p className='firstAppDescription'>The user can easily press the green button to search multiple POIs (points of interest) that are in the search field,
                            or simply press the search results in the search field to take a closer look at them.
                            If you want to do a new search, you can press the button that removes the search and prepare the search field.
                            The back/close button will end the search function and take the user back to the page they were last on.</p>

                        <p className='secondAppDescription'>The search algorithm is based on searching through names of places or descriptions of them.
                            When letters are entered, the algorithm searches through all points of interest with a low complexity and finds those that match.</p>
                    </div>
                    <div className='columnBox'>
                        <div className='searchImages_Container' ref={searchRef} >
                            <img className='sokeResultat_image' src={searchImage} />
                            <motion.img animate={animationH} className='severalSearch_image' src={osloResultSearch} />
                            <motion.img animate={animationN} className='clickedSearch_image' src={clickedSearch} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='rowHolder'>
                <div className='rowBoxes columnSettings'>
                    <div className='columnBox'>
                        <h1 className='appSearch_Headline'>Settings</h1>
                        <p className='firstAppDescription '>The settings in the app allow users to decide the language, color blindness and dark/light appearance.
                            The two different appearance modes can easily be switched around done by pressing their switch button in settings.</p>
                        <p className='secondAppDescription'>Dark mode for the application will give the background color a darker tone,
                            making it more comfortable for the eyes to use in dark environments.
                            The colorblind mode will provide a more friendly accent color for colorblind users.</p>
                        <p className='underline secondUnderline'></p>
                    </div>
                    <div className='columnBox'>
                        <div className='settings_Container' ref={settingRef} >
                            <motion.img className='darkMode_Img' animate={animationU} src={darkModeImg} />
                            <motion.img className='setting_Img' animate={animationU} src={settingImg} />
                            <motion.img className='colorBlind_Img' animate={animationU} src={colorBlindImg} />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ProjectsTest
