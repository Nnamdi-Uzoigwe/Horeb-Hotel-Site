import {React, Component} from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'

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

           // <Map
                //google = {this.props.google}
              ////  style = {{width:"100%", height:"100%"}}
               // zoom = {10}
              //  initialCenter = {
                 //   {
                 ////       lat: 6.169735,
                  //      lng: 6.722589
                  //  }
               // }
          //  />

 // )
//}

export default GoogleApiWrapper ({
    apiKey:("AIzaSyDEBWmej2g2mVqNP9kJDo1iII_4CxMdjJc")
})(Maps)