import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import PartyCard from './PartyCard'

class SimpleExample extends Component {
  constructor(props){
    super(props)
    this.state = {
       markers: [],
       clickerPos: [40.7589, -73.9851],
    }
  }

  handleClick = (event) => {
    console.log(event.latlng)
    this.setState({
      ...this.state,
      clickerPos: event.latlng
    })

  }

  stringToFloat = (party) => {
    let finalArray = []
    party.map( tude => {
      finalArray.push(parseFloat(tude))
    })
    return finalArray
  }

  mappedMarkers = () => {
    return this.props.partySpot.map(spot => {
      return(
        <Marker key = {spot.id} position={this.stringToFloat(spot.latlng.split(','))}>
          <Popup>
            {spot.address}
          </Popup>
        </Marker>
      )
    })
  }

 render() {
   const startingPosition = [40.7589, -73.9851]
   return (
     <Map onClick={this.handleClick} className='leaflet-container' center={startingPosition} zoom='12' >
       <TileLayer
         attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       />
     <Marker position={this.state.clickerPos}>
         <Popup>
            <PartyCard handlePost={this.props.handlePost} latlng={this.state.clickerPos}/>
         </Popup>
      </Marker>
      {this.mappedMarkers()}
     </Map>
   )
 }
}

export default SimpleExample
