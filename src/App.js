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
      <NavComponent></NavComponent>
      <LandingPage></LandingPage>
      <AboutPage></AboutPage>
      <ExperiencePage></ExperiencePage>
      <ProjectsPage></ProjectsPage>
      <ContactPage></ContactPage>
    </>
    
  );
}

export default App;
