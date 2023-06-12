import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages';
import Hero from './components/HeroSection';
import { homeObjAbout, homeObjQuote } from './components/AboutMe/Data';
import About from './components/AboutSection';
import Quote from './components/QuoteSection';
import Knowledge from './components/KnowledgeSection';
import ProjectOslo from './components/ProjectSection';
import Contact from './components/Contact.js';
import Social from './components/Social';
import Contact_test from './components/Contact_test';
import Social_test from './components/Social_test';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';


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
      <Navbar />
      <Route exact path="/" component={Hero}/>
      <Route exact path="/" {...homeObjAbout} component={AboutMe}/> 
      <Route exact path="/" component={Knowledge} />
      <Route exact path="/" component={Projects}/>   
      <Route exact path="/" component={Contact_test}/>
      <Route exact path="/" component={Social_test} />
      <Route path="/projectOslo" component={ProjectOslo}/>
    </Router>

    
    
  </>);
}

export default App;
