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
      <Button 
        text="Click Me" 
        onClick={handleClick}
        className="custom-button"
      />
    </div>
  );
}

export default App;