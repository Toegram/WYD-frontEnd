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
      <Card
        image='/images/avatar/large/elliot.jpg'
        header='PARTY TIME'
        meta='Friend'
        description="Hello"
      />

    )
  }
}


export default PartyCard
