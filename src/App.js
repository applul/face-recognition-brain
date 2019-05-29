import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

// const Clarifai = require('clarifai');

// initialize with your api key. This will also work in your browser via http://browserify.org/

const app = new Clarifai.App({
 apiKey: '777ff9cbc1c546a3959417cb4cdd73a6'
});

const particlesOptions = {
  particles: {
    number: {
      value: 79,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    }
  };
  

  onInputChange = (event) => {
    this.setState({
      input: event.target.value
    })
    console.log(event.target.value);
  }

  onSubmit = () => {
    console.log("click");
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
      function(response) {
        // do something with response
      },
      function(err) {
        // there was an error
      }
    );
  };

  render() {
    return (
      <div className="App">
        <Particles className= 'particles'
          params={particlesOptions}
        />    
      <Navigation />
      <Logo />
      <Rank Holo = {this.state.input} />
      <ImageLinkForm onInputChange={this.onInputChange} onSubmit = {this.onSubmit}  />
      {/* <FaceRecognition />  */}
      </div>
    );
  }
}

export default App;
