import React, {Component} from "react";
import "../css/map.css"
import {Map, GoogleApiWrapper, Marker} from "google-maps-react";

const api = require("../api");

class MapAPI extends Component {

    constructor(props) {
        super(props);
        this.state = {
            style:props,
            lat : props.lat,
            lng : props.lng
        };
    }


    componentDidMount() {

    }

    onMarkerClick = (e) => {
        console.log(e);
    }

    render() {


        const {style} = this.state;
        const mapStyles = {
            position: 'relative',
            width: style.width,
            height: style.height,
        }
        return (
            <Map
                class = "map"
                google={this.props.google}
                zoom={6}
                style={mapStyles}
                initialCenter={{lat:this.props.lat, lng:this.props.lng}}
            >
                <Marker position={{lat:this.props.lat, lng:this.props.lng}} onClick={this.onMarkerClick}/>
                <Marker position={{lat:this.props.lat, lng:12.5}} onClick={this.onMarkerClick}/>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: api.googleAPI
})(MapAPI);