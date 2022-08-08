import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages';
import Hero from './components/HeroSection';
import AboutSection from './components/AboutSection';
import { homeObjOne, homeObjTwo } from './components/AboutSection/Data';
import Projects from './components/ProjectsSection';
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
      <AboutSection {...homeObjOne} />
      <Projects {...homeObjOne}/>
    </Router>

    
    
  </>);
}

export default App;
