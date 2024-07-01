"use client";

import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

// Make sure to replace 'your_mapbox_access_token' with your actual Mapbox access token
mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9uZXM1ODEiLCJhIjoiY2xwNzAyeDVlMXlxZzJqbzVvcnBjbDZ3OCJ9.cuGt6LfugBHuqw9rJKQ2DA";

const MapboxMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v11", // Style of the map
        center: [-1.2982167, 50.7029], // Initial map center in [lng, lat]
        zoom: 12, // Initial zoom level
      });

      // Clean up on unmount
      return () => map.remove();
    }
  }, []);

  return (
    <div ref={mapContainerRef} style={{ width: "100%", height: "400px" }} />
  );
};

export default MapboxMap;
