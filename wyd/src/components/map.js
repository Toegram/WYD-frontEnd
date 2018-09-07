import React, { Component } from 'react'

class Map extends Component{
  constructor(props){
    super(props)

    this.state = {
      dummyState: "dummy"
    }

  }

  render(){
    return(
      <div>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css"
            integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
            crossorigin=""/>



    )
  }


}




export default Map
