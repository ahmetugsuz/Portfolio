import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { findByLabelText } from '@testing-library/react';


export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transistion: 0.8s all ease;
    }


`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    align-items: center;
    padding-top: 24px;
    margin-left: 0px;
    font-weight: bold;
    text-decoration: none;
    transition: 0.25s;
`;


export const MobileIcon = styled.div`
    display: none;
    
    @media screen and (max-width: 760px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        padding-right: 24px;
        transform: trasnlate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
        padding-top: 24px;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 2.2rem;
    height: 100%;
    cursor: pointer;
    font-size: 20px;
    transition: 0.25s;
    &.active {
        border-bottom: 3px solid #00FFFF;
    }
`
