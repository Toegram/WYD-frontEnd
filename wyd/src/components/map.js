import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import YardCard from './YardCard'

class LeafletMap extends Component {
  constructor(props){
    super(props)
    this.state = {
       markers: [],
       clickerPos: [40.73344658954001, -73.59081423681278],
    }
  }

  handleClick = (event) => {
    console.log(event.latlng)
    this.setState({ clickerPos: event.latlng })
  }

  stringToFloat = (party) => {
    let finalArray = []
    party.map( tude => {
      finalArray.push(parseFloat(tude))
    })
    return finalArray
  }

  mappedMarkers = () => {
    if (this.props.filter) {
      return this.props.userParties.map(spot => {
        return(
          <Marker key = {spot.id} position={this.stringToFloat(spot.latlng.split(','))}>
            <Popup>
              Address: {spot.address} <br />
              Description: {spot.description} <br />
              Host: {spot.host.user_name} <br />
            </Popup>
          </Marker>
        )
      })
    } else if(this.props.filter === false) {
     return this.props.partySpot.map(spot => {
       return(
         <Marker key = {spot.id} position={this.stringToFloat(spot.latlng.split(','))}>
           <Popup>
             Address: {spot.address} <br />
             Description: {spot.description} <br />
             Host: {spot.host.user_name} <br />
             <button onClick={() => this.props.handleCheckIn(spot)} className="ui button">
               Check In
             </button>
           </Popup>
         </Marker>
       )
     })
   }
 }

 render() {
   const startingPosition = [40.79169888584593, -73.18116545677186]
   return (
     <Map onClick={this.handleClick} className='leaflet-container' center={startingPosition} zoom='10' >
       <TileLayer
         attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       />
       <Marker position={this.state.clickerPos}>
         <Popup>
            <YardCard handlePost={this.props.handlePost} latlng={this.state.clickerPos}/>
         </Popup>
      </Marker>
      {this.mappedMarkers()}
     </Map>
   )
 }
}

export default LeafletMap
