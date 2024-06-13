// src/components/GoogleMapComponent/GoogleMapComponent.tsx
'use client'
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '658px',
};

const center = {
  lat: 40.712776, // Replace with your desired latitude
  lng: -74.005974, // Replace with your desired longitude
};

const GoogleMapComponent: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
