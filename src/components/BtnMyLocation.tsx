import { useContext } from "react";
import { MapContext } from "../context/MapContext";
import { PlacesContext } from "../context/places/PlacesContext";

export const BtnMyLocation = () => {
  const { map, isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const onClick = () => {
    if (!isMapReady) throw new Error("Mapa no está listo");
    if (!userLocation) throw new Error("No hay ubicación de usuario");

    map?.flyTo({
      zoom: 14,
      center: userLocation,
    });
  };

  return (
    <button
      className="p-3 text-white text-lg font-bold rounded-md w-52 bg-cyan-500 hover:bg-cyan-600"
      onClick={onClick}
    >
      Mi ubicación
    </button>
  );
};
