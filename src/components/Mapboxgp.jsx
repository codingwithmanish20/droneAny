import React, { useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import dronIcon from "../images/dronIcon.png";
import DroneData from "../DataList/Dronedata";

import mapboxgl from "mapbox-gl";
const Mapboxgp = () => {
  const [dronePosition, setDronePosition] = useState([]);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoicmF3YXRhbW1pZSIsImEiOiJjbG5rNzgzN28wandvMnFwMm1qbWduZ25hIn0.zjWDLv9gL6YI1uIIwPgA7A";

    const map = new mapboxgl.Map({
      container: "map",
      style: {
        version: 8,
        sources: {
          "raster-tiles": {
            type: "raster",
            tiles: [
              "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
              "https://b.tile.openstreetmap.org/{z}/{x}/{y}.png",
              "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
            ],
            tileSize: 256,
          },
        },
        layers: [
          {
            id: "simple-tiles",
            type: "raster",
            source: "raster-tiles",
            minzoom: 0,
            maxzoom: 24,
          },
        ],
       
        background: "rgb(239, 239, 239)" // Set the background color to white
      },
      center: [78.9629, 20.5937],
      zoom: 5,
      attributionControl: false,
    });

    map.addControl(new mapboxgl.NavigationControl());
    let res = DroneData.map((item) => {
      return { longitude: item.longitude, latitude: item.latitude };
    }).filter((item) => item.longitude !== undefined);

    const markers = res;

    // [
    //   { longitude: 20.5937, latitude: 50.96292 },
    //   { longitude: 20.59371, latitude: 50.96294 },
    //   { longitude: 20.59373, latitude: 50.96294 },
    //   { longitude: 20.59375, latitude: 50.96294 },
    //   { longitude: 20.59376, latitude: 50.96294 },
    //   { longitude: 20.59377, latitude: 50.96294 },
    //   { longitude: 20.59378, latitude: 50.96294 },
    //   { longitude: 20.59379, latitude: 50.96294 },
    //   { longitude: 20.5938, latitude: 50.96294 },
    //   // Add more marker coordinates as needed
    // ];
    // const centerCoordinate = markers.reduce(
    //   (acc, cur) => [acc[1] + cur.latitude / markers.length,  acc[0] + cur.longitude / markers.length],
    //   [0, 0]
    // );

    console.log(Object.values(markers[0]), "data0");

    const centerCoordinate = Object.values(markers[0]);

    map.setCenter(Object.values(markers[0]));
    map.setZoom(21);

    // if (markers.length > 0) {
    //   const firstMarker = markers[0];
    //   map.setCenter([firstMarker.longitude, firstMarker.latitude]);
    // }
    const bounds = new mapboxgl.LngLatBounds();
    markers.forEach((marker) => {
      // Create a new marker element for each marker
      const markerElement = document.createElement("div");
      markerElement.className = "custom-marker";
      markerElement.style.backgroundImage = `url(${dronIcon})`; // Assuming dronIcon is the same for all markers
      markerElement.style.width = "20px";
      markerElement.style.height = "20px";

      bounds.extend([marker.longitude, marker.latitude]);
      new mapboxgl.Marker(markerElement)
        .setLngLat([marker.longitude, marker.latitude])
        .addTo(map);
    });

    map.fitBounds(bounds, {
      padding: { top: 50, bottom: 50, left: 50, right: 50 },

      maxZoom: 20, // Set maxZoom to prevent the map from zooming in too much
    });

    console.log(centerCoordinate, "cordinate", markers[0]);

    return () => map.remove();
  }, []);

  return (
    <>
      <div className="mapCard">
        <div
          id="map"
          className="sideSpace"
          style={{ width: "450px", height: "400px" }}
        />
      </div>
    </>
  );
};
export default Mapboxgp;
