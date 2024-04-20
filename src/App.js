import Navbar from './componentes/section/Navbar';
import Apresentation from './componentes/section/Presentation'
import Footer from './componentes/section/Footer';
import Skills from './componentes/section/Skills';
import Projects from './componentes/section/Projects';

import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Apresentation/>
        <Skills/>
        <Projects/>
        <Footer/>
    </div>
  );
}

export default App;