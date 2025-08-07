import {React, Component} from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'

const key = import.meta.env.VITE_API_KEY;

class Maps extends Component{
  render() {
  return (
    
            <Map google={this.props.google}
             zoom={14}
             style = {{width: "100%", height: "70%"}}
             initialCenter={
                {
                    lat: 37.5172,
                    lng: 127.0473
                }
             }
             >
                <Marker onClick = {this.onMarkerClick}
                        name={'current location'} />

            <InfoWindow onClose={this.onInfoWindowClose}>
                
            </InfoWindow>
            </Map>
  )
  }
}


export default GoogleApiWrapper ({
    apiKey:(key)
})(Maps)