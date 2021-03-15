import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

function Map() {
  return (
    <div style={{ height: "400px", width: "100%", flex:"0.6" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: `AIzaSyBDpA0dGeYEjwl2qEiDrKpG_ZYshJWeiBI`,
        }}
        defaultCenter={{ lat:  5.722018, lng:  0.107379}}
        defaultZoom={10}
      >
        <Marker
            lat={5.722018}
            lng={0.107379}
          />
      </GoogleMapReact>
    </div>
  );
}

export default Map;
