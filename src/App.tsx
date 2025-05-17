import React from 'react';
import Button from './assets/components/Button';
import Navbar from './assets/components/Navbar.tsx';
import './App.css';

function App() {
  const handleClick = () => {
    console.log('Button clicked!');
    // Add here the desired functionality when the button is clicked
  };

  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <h1 className="inter-heading">DocsGPT</h1>
        <Button 
          text="Transform your docs" 
          onClick={handleClick}
          className="button-header"
        />
      </main>
    </div>
  );
}

export default App;