import React, {useState, useRef} from 'react';
import './AboutElements.css';
import CV from './CV.pdf';
import bilde from '../../images/mitt-bilde.png';
import { ButtonContact, ArrowDownContact } from '../ButtonElement';
import ScrollAnimationAbout from '../ScrollAnimationAbout';
function AboutMe({id, toggle}){
    const[hover, setHover] = useState(false);
    const experiencesSectionRef = useRef(null);
    const onHover = () =>{
        setHover(!hover);
    }
    const handleClick = () =>{
        window.location.assign('contact');

    };



    const birthdate = new Date('2001-08-19');
    const currentDate = new Date();

    const diffInMilliseconds = currentDate - birthdate;
    const ageInYears = Math.floor(diffInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));

    var age = 22

    return(
        <div className="aboutMecontainer" id="about">
            <div className='aboutMeTextBoxcontainer'>
                <div className='aboutMeTextBox'>
                        <div className='aboutTopline'><p className='topLinePurple'>About</p></div>
                        <div className='headlineCont'><h1 className=''><ScrollAnimationAbout experiencesSectionRef={experiencesSectionRef} /> Personal Info <ScrollAnimationAbout experiencesSectionRef={experiencesSectionRef} /></h1></div>
                        <div className=''><h3 className=''>Here you will find more information about me, who I am, and what I do</h3></div>
                        <div className='splitAbout left'>
                            <div className='centered'>
                                <div className='OmMeg'>
                                    <div className='descriptionContainerAbout'>
                                        <p className='toplineAbout'>I Am</p>
                                        <p className='descriptionFirst' style={{paddingLeft: 0}}>A {ageInYears}-year-old software engineer based in Norway.
                                        My education at the <a className='linkUniversity' target="_blank" href="https://www.google.com/search?q=university+of+oslo&source=hp&ei=oVL1YuP2K-i_xc8PgoyMyA8&iflsig=AJiK0e8AAAAAYvVgsb-ivcgsB0THuWI79XYXqTDFNqmM&ved=0ahUKEwijy_Cgvb_5AhXoX_EDHQIGA_kQ4dUDCAY&uact=5&oq=university+of+oslo&gs_lcp=Cgdnd3Mtd2l6EAMyBQguEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyCwguEIAEEMcBEK8BMgUIABCABDIFCAAQgAQyBQgAEIAEOhEILhCABBCxAxCDARDHARDRAzoLCAAQgAQQsQMQgwE6CwguEIAEELEDENQCOggIABCABBCxAzoICC4QgAQQsQM6CwguEIAEELEDEIMBOggILhCABBDUAjoICAAQsQMQgwE6DgguEIAEELEDEMcBENEDOg4ILhCABBCxAxDHARCvAToRCC4QgAQQsQMQgwEQxwEQrwE6CAguELEDEIMBOgsILhCABBDHARDRA1AAWOMYYIEbaABwAHgAgAFMiAH-CJIBAjE4mAEAoAEB&sclient=gws-wiz"> University of Oslo</a>, 
                                        combined with hands-on experience working on various real-time projects, 
                                        has honed my abilities as a well-organized, detail-oriented and aesthetically-focused developer.
                                        </p>
                                        <p className='descriptionFirst' style={{paddingLeft: 0}}>
                                        I'm confident in my ability to work effectively as part of a team and believe that my communication skills and drive for excellence will make me a valuable asset to any project.
                                        If you're looking for a dedicated software engineer with a proven track record and a passion for delivering high-quality results, I'd love to hear from you. Let's work together to create something truly remarkable.
                                        </p>
   
                                    </div>
                                        <div className='buttonToContactContainer'>
                                            <ButtonContact to="contact" onMouseEnter={onHover} 
                                            onMouseLeave={onHover} 
                                            primary='true' smooth={true} duration={500} 
                                            offset={-70} >GET IN TOUCH  {<ArrowDownContact />} </ButtonContact>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className='splitAbout right'>
                            <div className='centered'>
                                <div>
                                    <div className='softSkillsContainer'>
                                        <p className='skillsTopLineAbout'>Soft Skills</p>
                                        <div className='softSkills'>
                                            <div className='skill'><p className='softSkilltext'>Communication</p></div>
                                            <div className='skill'><p className='softSkilltext'>Adaptability</p></div>
                                            <div className='skill'><p className='softSkilltext'>Problemsolving</p></div>
                                            <div className='skill'><p className='softSkilltext'>Teamwork</p></div>
                                            <div className='skill'><p className='softSkilltext'>Creativity</p></div>
                                            <div className='skill'><p className='softSkilltext'>Leadership</p></div>
                                            <div className='skill'><p className='softSkilltext'>Work ethic</p></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
                
        </div>

    )

}

export default AboutMe