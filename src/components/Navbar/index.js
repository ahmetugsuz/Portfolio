import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, 
NavMenu, NavItem, NavLinks} from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll';
import './NavbarDefining.css'
function Navbar({ toggle }) {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo className='navMenuLinks' to="/" onClick={toggleHome}>
                    ahmettu
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks className='navMenuLinks' to="about"
                        smooth={true} duration={500} spy={true} exact='true'
                        offset={-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks className='navMenuLinks' to="skills"
                        smooth={true} duration={500} spy={true} exact='true'
                        offset={-80}>Proficiencies</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks className='navMenuLinks' to="projects"
                        smooth={true} duration={500} spy={true} exact='true'
                        offset={-80}>Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks className='navMenuLinks' to="contact"
                        smooth={true} duration={500} spy={true} exact='true'
                        offset={-75}>Contact</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar
