import React, {Component} from "react";
import "../css/map.css"
import {Map, GoogleApiWrapper, Marker} from "google-maps-react";

const api = require("../api");

class MapAPI extends Component {

    constructor(props) {
        super(props);
        this.state = {
            markers : ""
        };
    }

    componentDidMount() {

        let markers = "";
        
        if(!this.props.country.length) {//단일값
            markers = markers +
                "<Marker positon={{lat:{this.props.country.latitude}, lng:{this.props.country.longitude}}} />";
            this.setState({[markers] : markers});
            console.log(this.props.markers);
            console.log(markers);
        } else {//어레이값
        }

    }

    render() {

        const {style} = this.state;
        const mapStyles = {
            position: 'relative',
            width: this.props.width,
            height: this.props.height,
        }
        return (
            <Map
                class = "map"
                google={this.props.google}
                zoom={6}
                style={mapStyles}
                initialCenter={{lat:this.props.country.latitude, lng:this.props.country.longitude}}
            >
                {this.props.markers}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: api.googleAPI
})(MapAPI);