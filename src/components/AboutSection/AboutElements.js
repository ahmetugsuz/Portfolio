import styled from 'styled-components';
import TypeWriter from 'typewriter-effect';
export const AboutContainer = styled.div`
    /*color: #fff;*/
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};


    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100vh;
    width: 100%;
    max-width: 2000px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    

`;

export const AboutRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2
    col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col2'
        'col2 col2'`)};

    }
    
`;


export const Column1 = styled.div`
    margin-bottom: 15px;
    margin-top: -35px;
    padding: 0 25px;
    grid-area: col1;

    @media screen and (max-width: 768px){
        justify-content: center;
        margin: auto;
        margin-top: 50px;


        top: 0;
    
    

    }

`;
export const Column2 = styled.div`
    margin-bottom: -650px;
    padding: 20 15px;
    margin-left: -750px;
    grid-area: col2;

    @media screen and (min-width: 1800px) {
        margin-left: -950px;
    }

    @media screen and (max-width: 768px){
        width: 100px;
        justify-content: center;
        padding-left: 50px;
        height: 100px;

    }
`;



export const TextWrapper = styled.div`
    max-width: 640px;
    padding-top: 0;

    padding-right: 60px

    @media screen and (max-width: 768px) {

        display: flex;
    }
`

export const TopLine = styled.p`
    color: #00FFFF;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;

    @media screen and (max-width: 768px){
        font-size: 12px;
    }

`

export const Heading = styled.h1`
    /*margin-bottom: 24px;*/
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};


    @media screen and (max-width: 768px){
        font-size: 28px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }

`;



export const ImgWrap = styled.div`
    max-width: 333px;
    height: 100%;
    box-sizing: content-box;
    width: 100%;
    border: solid #5B6DCD 4px;
    background-color: black;
    padding: 5px;


    @media screen and (min-width: 1800px) {
        margin-top: 500px; /*On purpose*/
        padding:left: -50px;
    }

    @media screen and (max-width: 768px) {
        padding-left: 250px;
        position: absolute;
        width: 100%;
        height: 100px;
        width: 222px;
    }
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 -4px 0;
    padding-right: 0;
`;


export const Column4 = styled.div`

    max-width: 600px;

    justify-content: center;
    margin: auto;

    text-align: center;
    padding-bottom: 200px;



    @media screen and (min-width: 1800px) {
        margin-bottom: 250px;

    }
    @media screen and (max-width: 768px) {
        grid-row: 1 / 3;
        position: absolute;
        padding-top: 450px;
        padding-right: 50px;

        width: 90%;
    }
`;

export const Experience = styled.p`
    height: 10px;
    text-align: center;
    padding-left: 30px;
`;

export const HeadingExperience = styled.h1`
    display: flex;
    justify-content: center;

    
    padding-bottom: 15px;
    color: grey;

    @media screen and (max-width: 768px) {
        font-size: 20px;


    }
`;

export const ImgLanguages = styled.img`
    width: 70%;

`;

export const Img2Wrap = styled.div`
    width: 100%;
    height: 200px;
    z-index: 33;

    @media screen and (min-width: 1800px) {
        position: relative;
        margin-bottom: -180px;
        bottom: 0;
        margin-left: 100px;
    }

    @media screen and (max-width: 768px) {
        position: absolute;
        bottom: 0;
        justify-content: center;
        left: 0;
        right: 0;
        margin-bottom: -1130px;
        width: vw;
        height: 130px;
    }

`;

export const Img2 = styled.img`
    width: 100%;
    height: 100%;
    z-index: 1;
`;

export const TopLineGoals = styled.h1`
    display: flex;
    padding-top: 25px;
    margin-left: 50px;
    color: grey;
    left: 0;
    right: 0;
    margin-bottom: 5px;
    justify-content: center;

    @media screen and (max-width: 768px){
        font-size: 20px;
    }
`;

