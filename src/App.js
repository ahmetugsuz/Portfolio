import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages';
import Hero from './components/HeroSection';
import AboutSection from './components/AboutSection2';
import { homeObjOne, homeObjTwo } from './components/AboutSection2/Data';
import { homeObjAbout, homeObjQuote } from './components/AboutSection/Data';
import About from './components/AboutSection';
import Quote from './components/QuoteSection';
import Knowledge from './components/KnowledgeSection';
import Project from './components/ProjectSection';
import Contact from './components/Contact.js';
import Social from './components/Social';
import Contact_test from './components/Contact_test';
import Social_test from './components/Social_test';


const Image = () => {
  return (
    <>
    <article className='article'>
      <div>
        <h1 className='tekst'>Welcome To My Website</h1>
      </div>
      <div className="bilde">
        <img src="./mitt-bilde.png" />
      </div>
    </article>
  </>);
}


function App() {
  return (
    <>
    <Router>
      <Home />
      <About {...homeObjAbout}/>
      <Quote />
      <Knowledge />
      <Project />
      <Contact_test />
      <Social_test />
    </Router>

    
    
  </>);
}

export default App;
