import React, {Component} from "react";
import {Map, GoogleApiWrapper} from "google-maps-react";

const googleAPI = require("../api");

class MapAPI extends Component {
    render() {
        const mapStyles = {
            width: '25%',
            height: '50%',
        }
        return (
            <div className="MapAPI">
                <Map
                    google={this.props.google}
                    zoom={15}
                    style={mapStyles}
                    initialCenter={{lat:37.5, lng:127}}
                />
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: googleAPI,
})(MapAPI);