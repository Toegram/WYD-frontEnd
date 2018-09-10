import React from "react"
import { Dropdown, Button, Label } from "semantic-ui-react"
import PartyCard from "../PartyCard"

const PartyContainer = (props) => {

  let counter = 0
  const mappedParties = props.parties.map(party => {
    return <PartyCard party={party} key={++counter}/>
  })

  console.log("mappedParties are", mappedParties)
  return (
    <div> {mappedParties}  </div>

  )
}

export default PartyContainer
