import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p className="text-sm">© 2026 Hassan Anwar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
