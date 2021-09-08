import React, {Component} from "react";
import "../css/map.css"
import {Map, GoogleApiWrapper, Marker} from "google-maps-react";

const api = require("../api");

class MapApi extends Component {

    constructor(props) {
        super(props);
        this.state = {
            country: this.props.country
        };
    }

    componentDidMount() {
        console.log(this.props.country);
    }

    setMarkers ()  {

    }

    render() {

        const props = this.props;

        const mapStyles = {//MapStyle
            position: 'relative',
            width: this.props.width,
            height: this.props.height
        }

        return (
            <Map
                class = "map"
                google={this.props.google}
                zoom={6}
                style={mapStyles}
                initialCenter={{
                    lat:this.props.country[0].latitude,
                    lng:this.props.country[0].longitude
                }}
            >
                {this.setMarkers}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: api.googleAPI
})(MapApi);