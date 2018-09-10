import React, { Component } from 'react';
import './App.css';
import LeafMap from './components/map.js'
import PartyContainer from './components/containers/PartyContainer'
import TestButton from './components/buttons'

const PartiesAPI = "http://localhost:3000/api/v1/parties"
const UsersAPI = "http://localhost:3000/api/v1/users"


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parties: [],
      users: []
    }
  }

  componentDidMount() {
    fetch(PartiesAPI).then(res => res.json()).then(data => this.setState({ parties: data }))
    fetch(UsersAPI).then(res => res.json()).then(data => this.setState({ users: data }))

  }

  render() {
    // console.log("STATE OF THE PARTY UNION:", this.state.parties.latlng);
    return (
      <div className="App">
        <header className="App-header">
          <div className='App-container'>
            <span className='wyd-div'>
            <h1>
              WYD !?
            </h1>
          </span>
            <span className='button-div'>
            <TestButton />
            </span>
          </div>
        </header>
          <LeafMap partySpot={this.state.parties} />
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
