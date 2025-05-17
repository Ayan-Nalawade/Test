//import React from 'react';
import Navbar from './assets/components/Navbar';
import Home from './pages/Home';
import Docs from './pages/Docs';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sections-container">
        <section id="home">
          <Home />
        </section>
        <section id="docs">
          <Docs />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
