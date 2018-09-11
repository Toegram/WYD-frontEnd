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
    this.fetchData()
  }

  fetchData() {
    console.log("fetching data")
    fetch(PartiesAPI).then(res => res.json()).then(data => this.setState({parties: data }))
    fetch(UsersAPI).then(res => res.json()).then(data => this.setState({ users: data }))
  }

  handlePost = (data) => {
    let objData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({party: data})
    }
    fetch(PartiesAPI, objData).then(console.log("finished posting")).then(this.fetchData()).then(console.log(this.state))
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='App-container'>
            <span className='wyd-div'>
            <h1>
              By The Yard
            </h1>
          </span>
            <span className='button-div'>
            <TestButton />
            </span>
          </div>
        </header>
          <LeafMap handlePost={this.handlePost} partySpot={this.state.parties} />
      </div>

    );
  }
}

export default App;
