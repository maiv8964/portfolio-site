// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import ExperiencePage from './components/ExperiencePage';
import ProjectsPage from './components/ProjectsPage';

function App() {
  return (
    <>
      <LandingPage></LandingPage>
      <AboutPage></AboutPage>
      <ExperiencePage></ExperiencePage>
      <ProjectsPage></ProjectsPage>
    </>
    
  );
}

export default App;
