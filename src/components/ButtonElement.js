import styled from 'styled-components';
import {Link} from 'react-scroll';
import {MdArrowDownward, MdArrowDropUp, MdArrowRight} from 'react-icons/md';
import { FaArrowLeft, FaArrowRight, FaAngleRight, FaHome } from 'react-icons/fa';


export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#00FFFF' : '#010606')}; /*Lysere blå farge #68E4E1*/
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: conter;
    align-items: center;
    transition: all 0.2s ease-in-out;


    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' :
        '#01BF71')};
    }
`

export const ButtonContact = styled(Link)`
    display: flex;
    align-items: center;
    letter-spacing: 0.1rem;
    font-weight: 600;
    color: #666;
    background-color: #fff;
    /*padding: 0.5rem 1rem 0.5rem 0.5rem; /* Adjust padding as needed */*/
    /*font-size: calc(0.5vh + 0.5vw);*/
    border-radius: 1rem;
    font-family: 'Times New Roman', Times, serif;
    transition: 0.2s;
    cursor: pointer;
    width: fit-content; /* Adjust the width based on content */
    &:hover {
        transition: 0.2s;
        transform: translateY(3px);
        color: blueviolet;
    }
`;

export const ArrowDownContact = styled(MdArrowDownward)`
    margin-left: 6px;
    margin-top: -0.5px;
    font-size: calc(0.55vh + 0.55vw); /* Match the font size of the button text */
    vertical-align: middle;

    
    @media (max-height: 1200px){
        font-size: calc(0.62vw + 0.6vh);
        margin-top: -0.5px;
    }


`;

export const ArrowRightMd = styled(MdArrowRight)`
`;

export const ArrowRight = styled(FaArrowRight)`

    right: 0;
`;

export const ArrowLeft = styled(FaArrowLeft)`
    position: absolute;
    left: 0;
`;

export const PilowRight = styled(FaAngleRight)`
    margin-top: 1px;
    margin-right: 4px;
`;

export const HomeIcon = styled(FaHome)`
    margin-bottom: -2px;
`;