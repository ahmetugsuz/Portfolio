import styled from 'styled-components';
import {MdArrowDownward} from 'react-icons/md';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    position: relative;
    

    :before {
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0,0,0,0.6) 100%
        ), 
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 20;
    }
`;


export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const ImageBg = styled.image`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    overflow: hidden;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;

    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const HeroH1 = styled.h1`

    font-size: 64px;
    text-align: center;
    font-family: 'Times New Roman';

    

    @media screen and (max-width: 1300px) {
        font-size: 45px;
    }
    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const HeroP = styled.p`
    margin-top: 5px;
    padding-left: 50px;

    font-size: 24px;
    text-align: center;
    max-width: 600px;



    @media screen and (max-width: 1300px) {
        font-size: 20px;
    }
    
    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const HeroContentV2 = styled.div`
    z-index: 3;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 100px 50px;
`;

export const HeroBtnWrapper = styled.div`
    position: absolute;
    padding-bottom: 64px; 
    bottom: 0;
    margin-top: 62px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowDown = styled(MdArrowDownward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const TextBox = styled.div`
    /*
    position: absolute;
    padding-top: 10px;
    */
`;