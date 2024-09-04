import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';

function App() {
  return (
   <>
   <Navbar />
   <Hero />
   <About />
   <Skills />
   <Services />
   <Footer />
   </>
  );
}

export default App;
