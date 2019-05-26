import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';

function App() {
  return (
    <div className="App">
    <Navigation />
    <Logo />
    <Rank />
    <ImageLinkForm />
    {/* <FaceRecognition />  */}
    </div>
  );
}

export default App;
