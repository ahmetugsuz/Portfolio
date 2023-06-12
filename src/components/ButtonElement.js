import styled from 'styled-components';
import {Link} from 'react-scroll';
import {MdArrowDownward, MdArrowDropUp} from 'react-icons/md';

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
    letter-spacing: 0.1rem;
    font-weight: 600;
    color: #666;
    background-color: #fff;

    margin-top: 15px;
    padding: 0.5rem 0rem;
    font-size: 1.2rem;
    border-radius: 1rem;
    font-family: 'Times New Roman', Times, serif;
    transition: 0.2s;
    display: flex;
    cursor: pointer;

    width:28%;

    &:hover{

        transition: 0.2s;
        transform: translateY(3px);
        color: blueviolet;
    }

    @media screen and (max-width: 1300px){
        font-size: 0.9rem;
    }

    @media (max-height: 1000px){
        font-size:0.9rem;
    }

`

export const ArrowDownContact = styled(MdArrowDownward)`
    margin-left: 5px;
    margin-top: 0px;
    width: 14%;
    height: 55%;

    @media screen and (min-width: 1800px){
        width: 12%;
    }

    @media (max-height: 1000px){
        width: 10%;
    }
    @media (max-height: 768px){
        width: 8%;
    }

`