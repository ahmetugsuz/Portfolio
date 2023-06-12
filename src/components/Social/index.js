import React from 'react'
import linkedIn from '../../images/linkedInBlackWhite.webp';
import github from '../../images/gitWhite.png';
import { Link } from "react-router-dom";
import './SocialElements.css';
import ButtonMailto from "./ButtonMailto.js";
function Social() {
    return (
        <div className='socialContainer'>
            <div className='footerContainer'>
                <div className='footerAboutMe'>
                    <h2 className='overLinjaTekst V3'>Contact Me On</h2>
                    <p className='overtekst email'>Email: ahmet2009@live.no</p>
                </div>
                <div className='footerThisWebsite'>
                    <p className='overtekst createdBy'>This website was created by me @</p>
                    <p className='overLinjaTekst createdBy createdV2'> @ Copyright 2023. Made by Ahmet Tugsuz </p>
                </div>
                <div className='footerSocial'>
                    <h2 className='overLinjaTekst V3'>Some Socials</h2>
                    <a href={"https://www.linkedin.com/in/ahmet-tugsuz-7b6240210/"} target="_blank">
                        <img className='linkedin' src={linkedIn} />
                    </a>
                    <a href='https://github.com/ahmetugsuz' target="_blank">
                        <img className='github' src={github} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Social
