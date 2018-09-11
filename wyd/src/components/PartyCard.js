import React from 'react'
import { Card } from 'semantic-ui-react';

class PartyCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false
    }
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    return (
      <Card>
        Create A New Party!!
        <br />
        <form onSubmit={this.props.handlePost}>
          <input type='text' placeholder="Address" />
          <input type='text' placeholder="Description" />
          <input type='number' placeholder="Host Id" />
          <br />
          <button class="ui button" >
            CREATE AN EVENT!
          </button>
        </form>


      </Card>
    )
  }
}


// <Card
//   image='/images/avatar/large/elliot.jpg'
//   header='PARTY TIME'
//   meta='Friend'
//   description="Hello"
//   />
export default PartyCard
