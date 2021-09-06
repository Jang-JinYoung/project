import React, {Component} from "react";
import "../css/map.css"
import {Map, GoogleApiWrapper, Marker} from "google-maps-react";

const api = require("../api");

class MapAPI extends Component {

    constructor(props) {
        super(props);
        this.state = {
            style:props,
            country: props.country
        };
    }


    componentDidMount() {
        console.log(this.props.country);
    }

    Markers = (e) => {
        let ret = "";

        for(let i=0; i<this.props.country.length; i++) {
            ret = ret + <Marker key={i} positon={{lat:this.props.country[i].latitude, lng:this.props.country[i].longitude}} />
        }
        console.log("ret : " + ret);
        return ret;
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
                initialCenter={{lat:this.props.country.latitude, lng:this.props.country.longitude}}
            >
                {this.Markers()}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: api.googleAPI
})(MapAPI);