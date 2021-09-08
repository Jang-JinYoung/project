import React, {Component} from "react";
import "../css/map.css"
import {Map, GoogleApiWrapper, Marker} from "google-maps-react";

const api = require("../api");

class MapApi extends Component {

    constructor(props) {
        super(props);
        this.state = {
            country: this.props.country,
            stores : []
        };

        this.markerClick = this.markerClick.bind(this);
    }

    componentDidMount() {
        // console.log(this.state.country);
    }

    markerClick(e) {
        alert(e.label);
    }

    render() {

        const country = this.state.country;

        const mapStyles = {//MapStyle
            position: 'relative',
            width: this.props.width,
            height: this.props.height
        }

        return (
            <Map
                google={this.props.google}
                zoom={6}
                style={mapStyles}
                initialCenter={{
                    lat:this.props.country[0].latitude,
                    lng:this.props.country[0].longitude
                }}
            >
                {country.length !== 0 && country.map((e) => (
                    // console.log(e)
                    <Marker
                        key={e.id}
                        position={{lat: e.latitude, lng: e.longitude}}
                        label={e.country_kr}
                        onClick={this.markerClick}
                    />
                ))}
            </Map>
            // <Map
            //     google={this.props.google}
            //     zoom={10}
            //     style={mapStyles}
            //     onClick={this.addMarkers}
            // >
            //     {this.displayMarkers()}
            // </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: api.googleAPI
})(MapApi);