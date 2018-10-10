import React, { Component } from 'react';
import './App.css';
import LeafMap from './components/map.js'
import YardContainer from './components/containers/YardContainer'
import SemanticButton from './components/buttons'

const PartiesAPI = "http://localhost:3000/api/v1/parties"
const UsersAPI = "http://localhost:3000/api/v1/users"


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parties: [],
      user_parties: [],
      filter: false
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

  handleCheckIn = (party) => {
    this.setState({
      ...this.state,
      user_parties: [...this.state.user_parties, party]
    })
    alert(`You've checked in to ${party.host.user_name}'s party!'`)
  }

  filterTrue = () => {
    this.setState({filter: true})
  }

  filterFalse = () => {
    this.setState({filter: false})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='App-container'>
            <span className='wyd-div'>
            <h1>
              By The Yard . . .
            </h1>
          </span>
            <span className='button-div'>
            <SemanticButton filterTrue={this.filterTrue} filterFalse={this.filterFalse}/>
            </span>
          </div>
        </header>
          <LeafMap handleCheckIn={this.handleCheckIn} handlePost={this.handlePost} partySpot={this.state.parties} filter={this.state.filter} userParties={this.state.user_parties}/>
      </div>

    );
  }
}

export default App;
