import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
function App() {
  return (
    <div className="container-fluid gx-0">
     <NavBar/>
     <About/>
     <Projects/>
     <Skills/>
     <Footer/>
    </div>
  );
}

export default App;
