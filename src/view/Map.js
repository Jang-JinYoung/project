import React, {Component} from "react";
import "../css/map.css"
import {Map, GoogleApiWrapper} from "google-maps-react";

const api = require("../api");

class MapAPI extends Component {

    constructor(props) {
        super(props);
        this.state = {
            style:props
        };
    }

    componentDidMount() {

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
                initialCenter={{lat:37.5, lng:127}}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: api.googleAPI
})(MapAPI);