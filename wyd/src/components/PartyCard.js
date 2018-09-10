import React from 'react'
import { Card, Button } from 'semantic-ui-react';

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
      <div className = "ui five wide column">
        Hello!
        {this.props.party.address}
      </div>
    )
  }
}

export default PartyCard
