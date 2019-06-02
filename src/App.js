import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import Rank from './components/Rank/Rank.js';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
// I love Holo!
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
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {}
    }
  };
  componentDidMount() {
    document.clear();
  }
  componentDidUpdate() {
    document.clear();
  }
  

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage")
    let width = Number(image.width);
    let height = Number(image.height);
    console.log( width, height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width = (clarifaiFace.right_col * width),
      bottomRow: height = (clarifaiFace.bottom_row * height),
    }
  }

  displayFaceBox = (box) => {
    this.setState({
      box: box
    })
    console.log("this.state.box:", this.state.box)
  }
  

  onInputChange = (event) => {
    this.setState({
      input: event.target.value
    })
    console.log(event.target.value);
  };

  onSubmit = () => {
    this.setState({
      imageUrl: this.state.input
    });
    app.models.predict( Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
  };


  render() {
    return (
      <div className="App">
        <Particles className= 'particles'
          params={particlesOptions}
        />    
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onSubmit = {this.onSubmit}  />
      <FaceRecognition box = {this.state.box} imageUrl = {this.state.imageUrl} /> 
      </div>
    );
  }
}

export default App;
