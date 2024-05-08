import { useContext, useLayoutEffect, useRef } from "react";

import { Map } from "mapbox-gl";
import { PlacesContext } from "../context/places/PlacesContext";
import { MapContext } from "../context/MapContext";
import Loading from "./Loading";

export const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext);
  const { setMap } = useContext(MapContext);

  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new Map({
        container: mapDiv.current!,
        style: "mapbox://styles/mapbox/light-v10",
        center: userLocation,
        zoom: 14,
      });

      setMap(map);
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      ref={mapDiv}
      style={{
        height: "100vh",
        left: 0,
        position: "fixed",
        top: 75,
        width: "100vw",
      }}
    ></div>
  );
};
