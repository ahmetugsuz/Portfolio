import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Sidebar from './components/Sidebar';
import Home from './pages';
import Hero from './components/HeroSection';
import { homeObjAbout, homeObjQuote } from './components/AboutMe/Data';
import About from './components/AboutSection';
import Quote from './components/QuoteSection';
import Knowledge from './components/KnowledgeSection';
import ProjectOslo from './components/OsloTuristAppSection';
import Contact from './components/Contact.js';
import Social from './components/Social';
import Contact_test from './components/Contact_test';
import Social_test from './components/Social_test';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import { ThemeProvider } from 'styled-components';

// Define your global styles
const GlobalStyle = createGlobalStyle`
  /* global styles*/

  body {
    font-size: 16px; /* Default base font size */
  }

  h1 {
    font-weight: 400;
    font-size: calc(0.85vw + 0.80vh);
  }

  h2{
    font-size: 2em;
    color: white;
    font-weight: 300;
    letter-spacing: 0.05rem;  
    
  }
  
  h3 {
    font-size: calc(0.70vw + 0.5vh);
    color: #555;
    font-weight: 100;
    line-height: 1.2;
    padding-top: calc(0.3vw + 0.3vh);
    text-align: center;
    display: block;
    max-width: calc(20vw + 16vh);
    margin: auto;
  }
  
  p {
    font-size: 1em;
  }
  
  .topLinePurple{
    font-size: calc(0.57vw + 0.57vh);
    color: blueviolet;
    font-weight: 600;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
  }

  .toplineAqua{
    font-size: calc(0.57vw + 0.57vh);
    color: aqua;
    font-weight: 600;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    font-family:inherit;
  }

  .proficienciesSectionInfo{
    text-align: center;
    display: block;
    margin: auto;
    line-height: 1.2;
  }

  .descriptionFirst{
    line-height: 1.6;
    color: #666;
    font-size: calc(0.6vw + 0.5vh);
    padding-left: 10px;
    padding-bottom: 10px;
    font-weight: 100;
  }

  .headingMarker{
    position: relative;
    margin-bottom: calc(0.166vw + 0.165vh);
    width: calc(0.17vw + 0.17vh);
    display: inline-block;
    transition: border-width 0.4s ease-out, width 0.5s ease-out; /* Overgang for bredde og grenselinjens tykkelse */
  }

  .headingMarker.animate {
      width: calc(2.4vw + 2.4vh); 
      border-width: 0.0207in; 
  }

  .headingMarkerWhite{
    border: solid white 0.0207in;
  }

  .headingMarkerBlack{
    border: solid #444 0.0207in;
  }

  @media screen and (max-width: 2100px) {
    .descriptionFirst{
      font-size: calc(0.65vw + 0.65vh);
    }
  }

  @media screen and (max-width: 1900px) {

    h1 {
      font-size: calc(1.2vw + 0.8vh);
    }

    h3 {
      font-size: calc(1vw + 0.4vh);
      max-width: calc(26vw + 22vh);
    }

    .descriptionFirst{
      font-size: calc(0.7vw + 0.55vh);
    }

    .topLinePurple{
      font-size: calc(0.77vw + 0.57vh);
    }
  
    .toplineAqua{
      font-size: calc(0.77vw + 0.57vh);
    }

    .headingMarker.animate {
      width: calc(2.4vw + 2.4vh); 
      border-width: 0.015in; 
    }

    .headingMarker{
      margin-bottom: calc(0.22vw + 0.22vh);
    }


  }

  @media screen and (max-width: 620px){
    .descriptionFirst{
      color: #333;
    }
  }

  @media screen and (min-width: 2300px){
    p {
      font-size: 1.1em;
    }


  }

`;


const StyledWrapper = styled.div`
  /* any additional styling for the wrapper */
`;


function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <StyledWrapper>
          {/* Home Route */}
          <Route exact path="/" component={Home} />

          {/* Other Routes */}
          <Route path="/projectoslo" component={ProjectOslo} />
          <Route path="/" exact component={Hero} />
          <Route path="/" exact render={() => <AboutMe {...homeObjAbout} />} />
          <Route path="/" exact component={Projects} />
          <Route path="/" exact component={Knowledge} />
          <Route path="/" exact component={Contact_test} />
          <Route path="/" exact component={Social_test} />
        </StyledWrapper>
      </Router>
    </>
  );
}


export default App;
