import React from 'react';
import Button from './assets/components/Button';
import './App.css';

function App() {
  const handleClick = () => {
    console.log('Button clicked!');
    // Add here the desired functionality when the button is clicked
  };

  return (
    <div className="App">
      <h1 className="inter-heading">DocsGPT</h1>
      <Button 
        text="Transform your docs" 
        onClick={handleClick}
        className="button-header"
      />
    </div>
  );
}

export default App;