import React, { Component } from 'react';
import './App.css';
import Map from './components/map.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> WYD MAP MOD 4 PROJECT </h1>
          <Map />
        </header>
      </div>
    );
  }
}

export default App;

//Google Maps API w/ key

// <p className="google-map">
//   <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAWzKqnlu-46fmjbMf2bo8iC-iQ87yEz2w&callback=initMap"
//    type="text/javascript"></script>
//
// </p>
