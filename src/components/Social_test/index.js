import React from 'react'
import './Social_testElements.css'
import linkedIn from '../../images/linkedin-ico.png';
import github from '../../images/gitWhite.png';

function Social_test() {
  return (
    <div className='footer_Container'>
      <div className='rettStrek'></div>
      <div className='rowbox_container_social'>
        <div className='columnBox_social left_side_social'>
          <div className='leftSideContainer'>
          <h2 className='leftsideInfoHeadline'>Contact Me On</h2>
          <p className='leftSideInfo'>Email: <a style={{color: 'rgba(0, 255, 255, 0.781)'}} href='mailto:ahmet2009@live.no'>ahmet2009@live.no</a></p>
          </div>
        </div>
        <div className='columnBox_social middle_side_social'>
          <div className='middleSideContainer'>
          
            <p className='middleSideInfo '> @ Copyright 2024.</p>
            <p className='middleSideInfo createdV2'> // React.js &nbsp; &nbsp; HTML &nbsp; &nbsp; CSS &nbsp; &nbsp; Draw.io </p>
          </div>
        </div>
        <div className='columnBox_social right_side_social'>
          <div className='rightSideContainer'>
          <h2 className='rightSideInfo social_h2'>Some Socials</h2>
          <a href={"https://www.linkedin.com/in/ahmet-tugsuz-7b6240210/"} target="_blank">
            <img className='rightSideInfo linkedinDesign' src={linkedIn} />
          </a>
          <a href='https://github.com/ahmetugsuz' target="_blank">
            <img className='rightSideInfo githubDesign' src={github} />
          </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Social_test
