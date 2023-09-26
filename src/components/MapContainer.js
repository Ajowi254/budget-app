import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px"
};

const MapContainer = () => {
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState(null);
  const [selected, setSelected] = useState(null);

  // Get user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      });
    }
  }, []);

  // Load map when center is updated
  const onLoad = (map) => {
    setMap(map);
  };

  // Select marker
  const onMarkerLoad = (marker) => {
    setSelected(marker);
  };

  // Close info window
  const onCloseClick = () => {
    setSelected(null);
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
      >
        {center && (
          <Marker
            position={center}
            onLoad={onMarkerLoad}
          />
        )}
        {selected && (
          <InfoWindow
            position={center}
            onCloseClick={onCloseClick}
          >
            <div>
              <h4>You are here</h4>
              <p>Latitude: {center.lat}</p>
              <p>Longitude: {center.lng}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
