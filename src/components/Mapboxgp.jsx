import React, { useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import dronIcon from "../images/dronIcon.png"

import mapboxgl from "mapbox-gl";
const Mapboxgp = () => {
  
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoicmF3YXRhbW1pZSIsImEiOiJjbG5rNzgzN28wandvMnFwMm1qbWduZ25hIn0.zjWDLv9gL6YI1uIIwPgA7A";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10",
      // style: "mapbox://styles/mapbox/light-v10",
      center: [78.9629, 20.5937],
      zoom: 5,
      attributionControl: false,
    });

    map.addControl(new mapboxgl.NavigationControl());

    const markers = [
      { longitude: 20.5937, latitude: 50.96292 },
      { longitude: 20.59371, latitude: 50.96294 },
      { longitude: 20.59373, latitude: 50.96294 },
      { longitude: 20.59375, latitude: 50.96294 },
      { longitude: 20.59376, latitude: 50.96294 },
      { longitude: 20.59377, latitude: 50.96294 },
      { longitude: 20.59378, latitude: 50.96294 },
      { longitude: 20.59379, latitude: 50.96294 },
      { longitude: 20.59380, latitude: 50.96294 },
      // Add more marker coordinates as needed
    ];
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
    // const markerElement = document.createElement("div");
    // markerElement.className = "custom-marker";
    // markerElement.style.backgroundImage =`url(${dronIcon})`;;
    // markerElement.style.width = "30px";
    // markerElement.style.height = "30px";

    // markers.forEach((marker) => {
     
    //   bounds.extend([marker.longitude, marker.latitude]);
    //   new mapboxgl.Marker(markerElement)
    //     .setLngLat([marker.longitude, marker.latitude])
    //     .addTo(map);
    // });

    // Ensure there are markers before fitting bounds
    // if (markers.length > 0) {
    //   console.log(markers, "bounds");
    //   map.fitBounds(bounds, {
    //     // Adjust padding as needed
    //     zoom: 1,
    //     maxZoom: 10, // Set maxZoom to prevent the map from zooming in too much
    //   });
    // }
    map.fitBounds(bounds, {
      // Adjust padding as needed
      padding: { top: 50, bottom: 50, left: 50, right: 50 },

      maxZoom: 21, // Set maxZoom to prevent the map from zooming in too much
    });

    // markers.forEach((marker) => {
    //   new mapboxgl.Marker().setLngLat([marker.longitude, marker.latitude]).addTo(map);
    // });

    // markers.forEach((marker) => {
    //   new mapboxgl.Marker()
    //     .setLngLat([marker.longitude, marker.latitude])
    //     .addTo(map);
    // });
    // Zoom the map to the position of the first marker

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
