import React from "react"
import YardCard from "../YardCard"

//Yard Sale Container will show all Yard Sales

const YardContainer = (props) => {

  let counter = 0

  const mappedParties = props.parties.map(party => {
    return <YardCard party={party} key={++counter}/>
  })

  console.log("mappedParties are", mappedParties)
  return (
    <div> {mappedParties}  </div>

  )
}

export default YardContainer
