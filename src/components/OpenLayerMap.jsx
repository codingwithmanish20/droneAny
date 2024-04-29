import React, { useRef, useEffect } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Circle as CircleStyle, Fill, Style } from "ol/style";
import { fromLonLat } from "ol/proj"; // Importing fromLonLat function
import { Icon } from "ol/style";
import Feature from "ol/Feature";
import { Point } from "ol/geom";
import marker from "../images/dronIcon.png"

const OpenLayerMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;
    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: new Style({
        image: new Icon({
          src: marker, // Icon image URL
          scale: 0.1, // Scale down the icon size
        }),
      }),
    });

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        // center: [0, 0],
        center: fromLonLat([77.07274, 28.38659]), // Using fromLonLat function directly
        zoom: 18,
      }),
    });

    // Adding a layer
    // const feature = new Feature({
    //     geometry: new Point([0, 0]),
    //   });
    //   vectorSource.addFeature(feature);

    // Add multiple markers
    const markers = [
      { coordinates: [77.07274, 28.38659] },
      { coordinates: [10, 10] },
      { coordinates: [-10, -10] },
    ];

    markers.forEach((marker) => {
      const feature = new Feature({
        geometry: new Point(marker.coordinates),
      });
      vectorSource.addFeature(feature);
    });

    return () => map.dispose(); // Cleanup when component unmounts
  }, []);
  return <div ref={mapRef} style={{ width: "100%", height: "100vh" }}></div>;
};

export default OpenLayerMap;
