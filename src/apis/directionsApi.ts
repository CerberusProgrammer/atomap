import axios from "axios";

const directionsApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    alternatives: false,
    geometries: "geojson",
    overview: "simplified",
    steps: false,
    access_token:
      "pk.eyJ1Ijoib21hcmdtdCIsImEiOiJjbHZ4eXE1Mm4ybjN5MmlteGtlcGxtaHh6In0.XQqB8x1C7Ot3QaBEacTn3w",
  },
});

export default directionsApi;
