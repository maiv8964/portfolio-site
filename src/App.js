// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import ExperiencePage from './components/ExperiencePage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import NavComponent from './components/NavComponent';

function App() {
  return (
    <>
      <NavComponent/>
      <div id="landing"><LandingPage /></div>
      <div id="about"><AboutPage /></div>
      <div id="experience"><ExperiencePage /></div>
      <div id="projects"><ProjectsPage /></div>
      <div id="contact"><ContactPage /></div>
    </>
    
  );
}

export default App;
