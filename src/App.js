import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import Particles from 'react-particles-js';

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
  }

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
