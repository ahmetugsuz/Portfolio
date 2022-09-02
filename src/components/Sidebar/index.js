import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, 
SidebarLink, SidebarMenu} from './SidebarElements';

function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onCLick={toggle}>
            <CloseIcon />
        </Icon>  
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}
                smooth={true} duration={500} spy={true} exact='true'
                offset={-80}>About Me</SidebarLink>
                <SidebarLink to="skills" onClick={toggle}
                smooth={true} duration={500} spy={true} exact='true'
                offset={-80}>Skills</SidebarLink>
                <SidebarLink to="projects" onClick={toggle}
                smooth={true} duration={500} spy={true} exact='true'
                offset={-80}>My Projects</SidebarLink>
                <SidebarLink to="contact" onClick={toggle}
                smooth={true} duration={500} spy={true} exact='true'
                offset={-80}>Contact Me</SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>      
    </SidebarContainer>
  ) 
}

export default Sidebar
